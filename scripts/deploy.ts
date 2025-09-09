import hre from "hardhat";
import {
  parseEther,
  parseUnits,
  encodeFunctionData,
  type Address,
  type Hex,
  WalletClient,
} from "viem";
import { Logger } from "logger-chain";

import { readConfig, writeConfig, checkConfig } from "./common/readConfig.js";
import { getContractConfig, getTotalRewards } from "../src/config.js";
import { AddConfig, AddToken, FrontConfig, getFarms } from "../src/index.js";
import { ContractTypesMap } from "hardhat/types/artifacts";



const logger = new Logger();

async function logDeploy(name: string, address: Address) {
  logger.debug("Deploy", `${name}: ${address}`);
}
async function logTx(name: string, txHashPromise: Promise<Hex>) {
  const publicClient = await hre.viem.getPublicClient();
  const hash = await txHashPromise;
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  logger.debug("Tx", `${name} (hash: ${receipt.transactionHash})`);
}
async function hasCode(address?: string) {
  if (!address) return false;
  const publicClient = await hre.viem.getPublicClient();
  const code = await publicClient.getCode({ address: address as Address });
  return !!code && code !== "0x";
}

async function signPermitERC2612(params: {
  token: ContractTypesMap["ERC20Mock"]
  owner: Address;
  spender: Address;
  value: bigint;
  deadline: bigint;
}) {
  const { token, owner, spender, value, deadline } = params;
  const publicClient = await hre.viem.getPublicClient();
  const [chainId, name, nonce] = await Promise.all([
    publicClient.getChainId(),
    token.read.name(),
    token.read.nonces([owner]),
  ]);

  let version = "1";
  try {
    const v = await (token.read as any).version?.();
    if (typeof v === "string") version = v;
  } catch {}

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: token.address,
  } as const;

  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  } as const;

  const message = { owner, spender, value, nonce, deadline } as const;

  const [wallet] = await hre.viem.getWalletClients();
  return (await wallet.signTypedData({
    account: owner,
    domain,
    types,
    primaryType: "Permit",
    message,
  })) as Hex;
}

let OracleImpl: ContractTypesMap["DataFeed"] | undefined;

async function deployTokenAndOracle(
  owner: WalletClient,
  tokenConfig?: AddToken
) {
  let WETH: ContractTypesMap["WETHMock"] | undefined;
  let Token: ContractTypesMap["ERC20Mock"] | undefined;
  let Oracle: ContractTypesMap["DataFeed"] | undefined;

  if (!tokenConfig) return;

  if (tokenConfig.symbol === "WETH") {
    // WETH
    if (!(await hasCode(tokenConfig.address))) {
      const WETHSupply = parseEther(String(tokenConfig.totalSupply || 10000));
      WETH = await hre.viem.deployContract("WETHMock", [WETHSupply]);
      await logDeploy("WETH", WETH.address);
      tokenConfig.address = WETH.address as string;
      WETH = await hre.viem.getContractAt("WETHMock", WETH.address);
    } else {
      WETH = await hre.viem.getContractAt(
        "WETHMock",
        tokenConfig.address as Address
      );
    }
  } else {
    // ERC20
    if (!(await hasCode(tokenConfig.address))) {
      const tokenSupply = parseUnits(
        String(tokenConfig.totalSupply),
        Number(tokenConfig.decimals || 18)
      );
      Token = await hre.viem.deployContract("ERC20Mock", [
        tokenConfig.name || "",
        tokenConfig.symbol || "",
        tokenConfig.decimals || 18,
        tokenSupply,
      ]);
      await logDeploy(tokenConfig.symbol as string, Token.address);

      tokenConfig.address = Token.address as string;
      Token = await hre.viem.getContractAt("ERC20Mock", Token.address);
    } else {
      Token = await hre.viem.getContractAt(
        "ERC20Mock",
        tokenConfig.address as Address
      );
    }
  }

  // Oracle
  if (!(await hasCode(tokenConfig.oracle)) && tokenConfig.mockUsdPrice) {
    if (!OracleImpl) {
      OracleImpl = await hre.viem.deployContract("DataFeed", []);
      await logDeploy("OracleImpl", OracleImpl.address);
    }

    const OracleProxy = await hre.viem.deployContract("InitializableProxy", []);
    await logDeploy(`${tokenConfig.symbol}Oracle`, OracleProxy.address);

    const initData = encodeFunctionData({
      abi: OracleImpl.abi!,
      functionName: "initializeFeed",
      args: [
        owner.account!.address,
        tokenConfig.address as Address,
        `${tokenConfig.symbol} / USD`,
        parseUnits(String(tokenConfig.mockUsdPrice), 8),
      ],
    });


    await logTx(
      `Initialize ${tokenConfig.symbol}Oracle`,
      OracleProxy.write.initializeProxy(
        [
          `${tokenConfig.symbol} / USD DataFeed`,
          owner.account!.address,
          OracleImpl.address,
          initData,
        ],
        { account: owner.account }
      )
    );

    Oracle = await hre.viem.getContractAt("DataFeed", OracleProxy.address);

    tokenConfig.oracle = Oracle.address as string;
  } else {
    Oracle = await hre.viem.getContractAt(
      "DataFeed",
      tokenConfig.oracle as Address
    );
  }

  if (WETH) return { WETH, WETHOracle: Oracle };
  if (Token) return { Token, Oracle: Oracle };
}

async function deployTokens(owner: WalletClient, config: AddConfig) {
  const { WETH, WETHOracle } = (await deployTokenAndOracle(
    owner,
    config.WETH
  )) as {
    WETH: ContractTypesMap["WETHMock"];
    WETHOracle: ContractTypesMap["DataFeed"];
  };

  const { Token: RewardToken, Oracle: RewardOracle } =
    (await deployTokenAndOracle(owner, config.rewardToken)) as {
      Token: ContractTypesMap["ERC20Mock"];
      Oracle: ContractTypesMap["DataFeed"];
    };

  const Tokens: Record<
    number,
    ContractTypesMap["ERC20Mock"] | ContractTypesMap["WETHMock"]
  > = {};
  const Oracles: Record<number, ContractTypesMap["DataFeed"]> = {};

  for (const pool of config.pools || []) {
    if (pool.symbol && pool.symbol === config.rewardToken?.symbol) {
        pool.address = config.rewardToken.address;
        pool.oracle = config.rewardToken.oracle;

        Tokens[pool.pid as number] = RewardToken;
        Oracles[pool.pid as number] = RewardOracle;

        continue;
    }
    if (pool.symbol && pool.symbol === config.WETH?.symbol) {
        pool.address = config.WETH.address;
        pool.oracle = config.WETH.oracle;

        Tokens[pool.pid as number] = WETH;
        Oracles[pool.pid as number] = WETHOracle;

        continue;
    }

    const { Token, Oracle } = (await deployTokenAndOracle(owner, pool)) as {
      Token: ContractTypesMap["ERC20Mock"];
      Oracle: ContractTypesMap["DataFeed"];
    };
    Tokens[pool.pid as number] = Token;
    Oracles[pool.pid as number] = Oracle;
  }

  return {
    WETH,
    WETHOracle,
    RewardToken,
    RewardOracle,
    Tokens,
    Oracles,
    OracleImpl,
  };
}

async function deployRewardVault(
  owner: WalletClient,
  config: AddConfig,
  timestamp: number,
  RewardToken: ContractTypesMap["ERC20Mock"]
) {
  const { totalRewards } = getTotalRewards(config, timestamp);

  let RewardVaultImpl: ContractTypesMap["RewardVault"] | undefined;
  let RewardVault: ContractTypesMap["RewardVault"] | undefined;

  if (!(await hasCode(config.rewardVault))) {
    RewardVaultImpl = await hre.viem.deployContract("RewardVault", []);
    await logDeploy("RewardVaultImpl", RewardVaultImpl.address);

    const RewardVaultProxy = await hre.viem.deployContract("InitializableProxy", []);
    await logDeploy("RewardVault", RewardVaultProxy.address);

    const initData = encodeFunctionData({
      abi: RewardVaultImpl.abi!,
      functionName: "initializeVault",
      args: [owner.account!.address],
    });

    await logTx(
      "Initialize RewardVault",
      RewardVaultProxy.write.initializeProxy(
        [
          "RewardVault",
          owner.account!.address,
          RewardVaultImpl.address,
          initData,
        ],
        { account: owner.account }
      )
    );

    RewardVault = await hre.viem.getContractAt("RewardVault", RewardVaultProxy.address);

    await logTx(
      `Transfer ${totalRewards} Rewards To RewardVault`,
      RewardToken.write.transfer(
        [RewardVault.address, parseEther(String(totalRewards))],
        { account: owner.account }
      )
    );
  } else {
    RewardVault = await hre.viem.getContractAt(
      "RewardVault",
      config.rewardVault as Address
    );
  }

  config.rewardVault = RewardVault.address as string;
  return { RewardVault, RewardVaultImpl };
}

async function deployMasterPool(
  owner: WalletClient,
  config: AddConfig,
  timestamp: number,
  RewardVault: ContractTypesMap["RewardVault"]
) {
  const PoolTokenImplementation = await hre.viem.deployContract("ERC4626Pool", []);
  await logDeploy("PoolTokenImplementation", PoolTokenImplementation.address);

  const MasterPoolImplementation = await hre.viem.deployContract("MasterPool", []);
  await logDeploy("MasterPoolImplementation", MasterPoolImplementation.address);

  const MasterPoolProxy = await hre.viem.deployContract("InitializableProxy", []);
  await logDeploy("MasterPoolProxy", MasterPoolProxy.address);

  const { initRewardsPerSec, rewardFromTimestamp, rewardToTimestamp, halvingRate, halvingInterval } =
        getTotalRewards(config, timestamp);

  const initData = encodeFunctionData({
    abi: MasterPoolImplementation.abi!,
    functionName: "initializePool",
    args: [
      owner.account!.address,
      config.WETH?.address as string,
      PoolTokenImplementation.address,
      config.rewardToken?.address as string,
      RewardVault.address,
      parseEther(String(initRewardsPerSec)),
      halvingRate,
      halvingInterval,
      rewardFromTimestamp,
      rewardToTimestamp,
      false,
    ],
  });

  await logTx(
    "MasterPool: Initializing MasterPool",
    MasterPoolProxy.write.initializeProxy(
      [
        "MasterPool",
        owner.account!.address,
        MasterPoolImplementation.address,
        initData,
      ],
      { account: owner.account }
    )
  );


  const MasterPool = await hre.viem.getContractAt("MasterPool", MasterPoolProxy.address);

  await logTx(
    "MasterPool: Adding MasterPool to RewardVault",
    RewardVault.write.addSpender([MasterPool.address], {
      account: owner.account,
    })
  );

  config.masterChef = MasterPool.address as string;
  return { MasterPool, MasterPoolImplementation, PoolTokenImplementation };
}

async function addPools(
  config: AddConfig,
  timestamp: number,
  MasterPool: ContractTypesMap["MasterPool"]
) {
  const { rewardFromTimestamp, rewardToTimestamp } = getTotalRewards(config, timestamp);

  for (const pool of config.pools || []) {
    await logTx(
      `MasterPool: Adding pool${pool.pid}`,
      MasterPool.write.add([
        pool.address as Address,
        pool.allocPoint ?? 0,
        BigInt(pool.rewardFromTimestamp ?? rewardFromTimestamp),
        BigInt(pool.rewardToTimestamp ?? rewardToTimestamp),
        false,
      ])
    );
  }
}

async function depositMasterPool(
  config: AddConfig,
  deadline: number,
  MasterPool: ContractTypesMap["MasterPool"],
  Tokens: Record<
    number,
    ContractTypesMap["ERC20Mock"] | ContractTypesMap["WETHMock"]
  >
) {
  const [deployer] = await hre.viem.getWalletClients();

  // deposit
  for (const pool of config.pools || []) {
    const Token = Tokens[pool.pid as number];
    const deposit = parseUnits(String(pool.deposit), Number(pool.decimals));

    const sig = await signPermitERC2612({
      token: Token as ContractTypesMap["ERC20Mock"],
      owner: deployer.account.address as Address,
      spender: MasterPool.address as Address,
      value: deposit,
      deadline: BigInt(deadline),
    });

    await logTx(
      `Deposit token${pool.pid}`,
      MasterPool.write.depositPermit([
        pool.pid as number,
        deposit,
        BigInt(deadline),
        sig,
      ])
    );
  }

  // withdraw
  for (const pool of config.pools || []) {
    const withdraw = parseUnits(String(pool.withdraw), Number(pool.decimals));
    await logTx(
      `Withdraw token${pool.pid}`,
      MasterPool.write.withdraw([pool.pid as number, withdraw])
    );
  }
}

async function lookupPool(config: AddConfig, owner: WalletClient) {
  const contractConfig = getContractConfig(
    config as unknown as FrontConfig,
    owner
  );
  const farmData = await getFarms(contractConfig, owner);
  console.log(farmData);
}

async function deploy() {
  const [owner] = await hre.viem.getWalletClients();

  const config = await readConfig();
  const { timestamp } = await checkConfig(config, owner);

  const { WETH, WETHOracle, RewardToken, RewardOracle, Tokens, OracleImpl } =
    await deployTokens(owner, config);

  const { RewardVault, RewardVaultImpl } = await deployRewardVault(
    owner,
    config,
    timestamp,
    RewardToken
  );

  const { MasterPool, MasterPoolImplementation, PoolTokenImplementation } =
    await deployMasterPool(owner, config, timestamp, RewardVault);

  await addPools(config, timestamp, MasterPool);
  await depositMasterPool(config, timestamp + 3600, MasterPool, Tokens);
  await lookupPool(config, owner);

  const tokens: Record<string, string> = {
    OracleImpl: OracleImpl?.address || "",
    WETH: WETH.address,
    WETHOracle: WETHOracle.address,
    RewardToken: RewardToken.address,
    RewardOracle: RewardOracle.address,
    RewardVault: RewardVault.address,
    RewardVaultImpl: RewardVaultImpl?.address || "",
    MasterPool: MasterPool.address,
    MasterPoolImplementation: MasterPoolImplementation.address,
    PoolTokenImplementation: PoolTokenImplementation.address,
  };

  (config.pools || []).forEach((pool) => {
    tokens[pool.symbol as string] = pool.address as string;
    if (pool.oracle) tokens[`${pool.symbol}Oracle`] = pool.oracle as string;
  });

  console.log(tokens);
  await writeConfig(config);
}

deploy().catch((e) => {
  console.error(e);
  process.exit(1);
});
