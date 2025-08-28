import { parseEther, parseUnits, BaseContract, ContractTransactionResponse, Addressable } from 'ethers';
import { permit, type SignerWithAddress } from 'ethers-opt';
import { getSigners } from 'ethers-opt/hardhat/fixtures';
import { Logger } from 'logger-chain';
import {
    ERC20Mock,
    ERC20Mock__factory,
    ERC4626Pool__factory,
    InitializableProxy__factory,
    MasterPool__factory,
    RewardVault__factory,
    WETHMock__factory,
    DataFeed__factory,
    WETH,
    DataFeed,
    WETHMock,
    RewardVault,
    MasterPool,
} from '../typechain-types/index.js';
import { type AddConfig, type AddToken, FrontConfig, getContractConfig, getFarms, getTotalRewards } from '../src/index.js';
import { readConfig, writeConfig, checkConfig } from './common/readConfig.js';

const logger = new Logger();

async function logDeploy(contractName: string, contract: BaseContract) {
    logger.debug(
        'Deploy',
        `${contractName}: ${contract.target} (hash: ${(await contract.deploymentTransaction()?.wait())?.hash})`,
    );
}

async function logTx(txName: string, tx: Promise<ContractTransactionResponse>) {
    logger.debug('Tx', `${txName} (hash: ${(await (await tx).wait())?.hash})`);
}

async function hasCode(owner: SignerWithAddress, address?: string) {
    if (!address) {
        return false;
    }

    const code = await owner.provider?.getCode(address);

    return code && code !== '0x' ? true : false;
}

async function deployTokenAndOracle(owner: SignerWithAddress, tokenConfig?: AddToken) {
    let WETH: undefined | WETH;
    let Token: undefined | ERC20Mock;
    let Oracle: undefined | DataFeed;

    if (tokenConfig) {
        if (tokenConfig.symbol === 'WETH') {
            // Deploy WETH
            if (!(await hasCode(owner, tokenConfig.address))) {
                const WETHSupply = parseEther(String(tokenConfig.totalSupply || 10000));
                WETH = await new WETHMock__factory(owner).deploy(WETHSupply);
                await logDeploy('WETH', WETH);

                tokenConfig.address = WETH.target as string;
            } else {
                WETH = WETHMock__factory.connect(tokenConfig.address as string, owner);
            }
        } else {
            // Deploy Token
            if (!(await hasCode(owner, tokenConfig.address))) {
                const TokenSupply = parseUnits(
                    String(tokenConfig.totalSupply),
                    Number(tokenConfig.decimals || 18),
                );
                Token = await new ERC20Mock__factory(owner).deploy(
                    tokenConfig.name || '',
                    tokenConfig.symbol || '',
                    tokenConfig.decimals || 18,
                    TokenSupply,
                );
                await logDeploy(tokenConfig.symbol as string, Token);

                tokenConfig.address = Token.target as string;
            } else {
                Token = ERC20Mock__factory.connect(tokenConfig.address as string, owner);
            }
        }

        // Deploy Token oracle
        if (!(await hasCode(owner, tokenConfig.oracle)) && tokenConfig.mockUsdPrice) {
            Oracle = await new DataFeed__factory(owner).deploy();
            await logDeploy(`${tokenConfig.symbol}Oracle`, Oracle);
            await logTx(
                `Initialize ${tokenConfig.symbol}Oracle`,
                Oracle.initializeFeed(
                    owner.address,
                    tokenConfig.address as string,
                    `${tokenConfig.symbol} / USD`,
                    parseUnits(String(tokenConfig.mockUsdPrice), 8),
                ),
            );

            tokenConfig.oracle = Oracle.target as string;
        } else {
            Oracle = DataFeed__factory.connect(tokenConfig.oracle as string, owner);
        }

        if (WETH) {
            return {
                WETH,
                WETHOracle: Oracle,
            };
        } else if (Token) {
            return {
                Token,
                Oracle,
            };
        }
    }
}

async function deployTokens(owner: SignerWithAddress, config: AddConfig) {
    const { WETH, WETHOracle } = (await deployTokenAndOracle(owner, config.WETH)) as {
        WETH: WETHMock;
        WETHOracle: DataFeed;
    };

    const { Token: RewardToken, Oracle: RewardOracle } = (await deployTokenAndOracle(
        owner,
        config.rewardToken,
    )) as { Token: ERC20Mock; Oracle: DataFeed };

    const Tokens: Record<number, ERC20Mock | WETHMock> = {};
    const Oracles: Record<number, DataFeed> = {};

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
            Token: ERC20Mock;
            Oracle: DataFeed;
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
    };
}

async function deployRewardVault(
    owner: SignerWithAddress,
    config: AddConfig,
    timestamp: number,
    RewardToken: ERC20Mock,
) {
    const { totalRewards } = getTotalRewards(config, timestamp);

    let RewardVault: RewardVault | undefined;

    if (!(await hasCode(owner, config.rewardVault))) {
        RewardVault = await new RewardVault__factory(owner).deploy();
        await logDeploy('RewardVault', RewardVault);

        await logTx('Initialize RewardVault', RewardVault.initializeVault(owner.address));

        await logTx(
            `Transfer ${totalRewards} Rewards To RewardVault`,
            RewardToken.transfer(RewardVault.target, parseEther(String(totalRewards))),
        );
    } else {
        RewardVault = RewardVault__factory.connect(config.rewardVault as string, owner);
    }

    config.rewardVault = RewardVault.target as string;

    return RewardVault;
}

async function deployMasterPool(
    owner: SignerWithAddress,
    config: AddConfig,
    timestamp: number,
    RewardVault: RewardVault,
) {
    const PoolTokenImplementation = await new ERC4626Pool__factory(owner).deploy();
    await logDeploy('PoolTokenImplementation', PoolTokenImplementation);

    const MasterPoolImplementation = await new MasterPool__factory(owner).deploy();
    await logDeploy('MasterPoolImplementation', MasterPoolImplementation);

    const MasterPoolProxy = await new InitializableProxy__factory(owner).deploy();
    await logDeploy('MasterPoolProxy', MasterPoolProxy);

    const MasterPool = MasterPool__factory.connect(MasterPoolProxy.target as string, owner);

    const { initRewardsPerSec, rewardFromTimestamp, rewardToTimestamp, halvingRate, halvingInterval } =
        getTotalRewards(config, timestamp);

    await logTx(
        'MasterPool: Initializing MasterPool',
        MasterPoolProxy.initializeProxy(
            'MasterPool',
            owner.address,
            MasterPoolImplementation.target,
            (
                await MasterPool.initializePool.populateTransaction(
                    owner.address,
                    config.WETH?.address as string,
                    PoolTokenImplementation.target,
                    config.rewardToken?.address as string,
                    RewardVault.target,
                    parseEther(String(initRewardsPerSec)),
                    halvingRate,
                    halvingInterval,
                    rewardFromTimestamp,
                    rewardToTimestamp,
                    false,
                )
            ).data,
        ),
    );

    await logTx('MasterPool: Adding MasterPool to RewardVault', RewardVault.addSpender(MasterPool.target));

    config.masterChef = MasterPool.target as string;

    return {
        MasterPool,
        MasterPoolImplementation,
        PoolTokenImplementation,
    };
}

async function addPools(config: AddConfig, timestamp: number, MasterPool: MasterPool) {
    const { rewardFromTimestamp, rewardToTimestamp } = getTotalRewards(config, timestamp);

    for (const pool of config.pools || []) {
        await logTx(
            `MasterPool: Adding pool${pool.pid}`,
            MasterPool.add(
                pool.address as string,
                pool.allocPoint || 0,
                pool.rewardFromTimestamp || rewardFromTimestamp,
                pool.rewardToTimestamp || rewardToTimestamp,
                false,
            ),
        );
    }
}

async function depositMasterPool(
    config: AddConfig,
    deadline: number,
    MasterPool: MasterPool,
    Tokens: Record<number, ERC20Mock | WETHMock>,
) {
    // Deposit tokens
    for (const pool of config.pools || []) {
        const Token = Tokens[pool.pid as number];

        const deposit = parseUnits(String(pool.deposit), pool.decimals);

        const sig1 = await permit(Token, MasterPool.target as string, deposit, deadline);

        await logTx(
            `Deposit token${pool.pid}`,
            MasterPool.depositPermit(pool.pid as number, deposit, deadline, sig1.serialized),
        );
    }

    // Withdraw tokens
    for (const pool of config.pools || []) {
        const withdraw = parseUnits(String(pool.withdraw), pool.decimals);

        await logTx(`Withdraw token${pool.pid}`, MasterPool.withdraw(pool.pid as number, withdraw));
    }
}

async function lookupPool(
    config: AddConfig,
    owner: SignerWithAddress
) {
    const contractConfig = getContractConfig(config as unknown as FrontConfig, owner);

    const farmData = await getFarms(contractConfig, owner);

    console.log(farmData);
}

async function deploy() {
    const [owner] = await getSigners();

    const config = await readConfig();

    const { timestamp } = await checkConfig(config, owner);

    const { WETH, WETHOracle, RewardToken, RewardOracle, Tokens } = await deployTokens(owner, config);

    const RewardVault = await deployRewardVault(owner, config, timestamp, RewardToken);

    const { MasterPool, MasterPoolImplementation, PoolTokenImplementation } = await deployMasterPool(
        owner,
        config,
        timestamp,
        RewardVault,
    );

    await addPools(config, timestamp, MasterPool);

    await depositMasterPool(config, timestamp + 3600, MasterPool, Tokens);

    await lookupPool(config, owner);

    const tokens: Record<string, string | Addressable> = {
        WETH: WETH.target,
        WETHOracle: WETHOracle.target,
        RewardToken: RewardToken.target,
        RewardOracle: RewardOracle.target,
        RewardVault: RewardVault.target,
        MasterPool: MasterPool.target,
        MasterPoolImplementation: MasterPoolImplementation.target,
        PoolTokenImplementation: PoolTokenImplementation.target,
    };

    (config.pools || []).forEach((pool) => {
        tokens[pool.symbol as string] = pool.address as string;

        if (pool.oracle) {
            tokens[`${pool.symbol}Oracle`] = pool.oracle;
        }
    });

    console.log(tokens);

    await writeConfig(config);
}

deploy();
