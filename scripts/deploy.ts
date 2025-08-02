import {
    parseEther,
    parseUnits,
    MaxUint256,
    BaseContract,
    ContractTransactionResponse,
    Addressable,
} from 'ethers';
import { permit } from 'ethers-opt';
import { getSigners, SignerWithAddress } from 'ethers-opt/hardhat/fixtures';
import { Logger } from 'logger-chain';
import {
    ERC20Mock,
    ERC20Mock__factory,
    ERC4626Pool__factory,
    InitializableProxy__factory,
    MasterPool__factory,
    RewardVault__factory,
    WETHMock__factory,
} from '../typechain-types/index.js';

const logger = new Logger();

interface Pool {
    name: string;
    symbol: string;
    decimals: number;
    totalSupply: string;
    allocPoint: number;
    deposit: string;
    withdraw: string;
}

const rewardBlocks = 86400 * 30;

const rewardPerBlock = parseEther('1');

const pools: Pool[] = [
    {
        name: 'Test',
        symbol: 'TST',
        decimals: 18,
        totalSupply: '100000000',
        allocPoint: 1000,
        deposit: '1',
        withdraw: '0.1',
    },
    {
        name: 'Test LP',
        symbol: 'TST-LP',
        decimals: 18,
        totalSupply: '100000',
        allocPoint: 1300,
        deposit: '1',
        withdraw: '0.1',
    },
    {
        name: 'Test USD',
        symbol: 'TUSD',
        decimals: 6,
        totalSupply: '1000000',
        allocPoint: 1000,
        deposit: '1',
        withdraw: '0.1',
    },
];

async function logDeploy(contractName: string, contract: BaseContract) {
    logger.debug(
        'Deploy',
        `${contractName}: ${contract.target} (hash: ${(await contract.deploymentTransaction()?.wait())?.hash})`,
    );
}

async function logTx(txName: string, tx: Promise<ContractTransactionResponse>) {
    logger.debug('Tx', `${txName} (hash: ${(await (await tx).wait())?.hash})`);
}

async function deployTokens(owner: SignerWithAddress) {
    const WETH = await new WETHMock__factory(owner).deploy(parseEther('100'));
    await logDeploy('WETH', WETH);

    const Tokens: ERC20Mock[] = [];

    for (const { name, symbol, decimals, totalSupply } of pools) {
        const Token = await new ERC20Mock__factory(owner).deploy(
            name,
            symbol,
            decimals,
            parseUnits(totalSupply, decimals),
        );
        await logDeploy(`Token${Tokens.length} (${symbol})`, Token);

        Tokens.push(Token);
    }

    const RewardVault = await new RewardVault__factory(owner).deploy();
    await logDeploy('RewardVault', RewardVault);

    await logTx('Initialize RewardVault', RewardVault.initialize(owner.address));

    await logTx(
        'Transfer Token To RewardVault',
        Tokens[0].transfer(RewardVault.target, parseEther('5000000')),
    );

    return {
        WETH,
        RewardVault,
        Tokens,
    };
}

async function deployMasterPool(owner: SignerWithAddress) {
    const { WETH, RewardVault, Tokens } = await deployTokens(owner);

    const PoolTokenImplementation = await new ERC4626Pool__factory(owner).deploy();
    await logDeploy('PoolTokenImplementation', PoolTokenImplementation);

    const MasterPoolImplementation = await new MasterPool__factory(owner).deploy();
    await logDeploy('MasterPoolImplementation', MasterPoolImplementation);

    const MasterPoolProxy = await new InitializableProxy__factory(owner).deploy();
    await logDeploy('MasterPoolProxy', MasterPoolProxy);

    const MasterPool = MasterPool__factory.connect(MasterPoolProxy.target as string, owner);

    await logTx('MasterPool: Adding MasterPool to RewardVault', RewardVault.addSpender(MasterPool.target));

    const currentBlock = (await owner.provider?.getBlockNumber()) || 0;

    const [startBlock, endBlock] = [currentBlock, currentBlock + rewardBlocks];

    const { data: initData } = await MasterPool.initializePool.populateTransaction(
        owner.address,
        WETH.target,
        PoolTokenImplementation.target,
        Tokens[0].target,
        rewardPerBlock,
        RewardVault.target,
        startBlock,
        endBlock,
        false,
    );

    await logTx(
        'MasterPool: Initializing MasterPool',
        MasterPoolProxy.initializeProxy(owner.address, MasterPoolImplementation.target, initData),
    );

    let index = 0;

    for (const Token of Tokens) {
        const config = pools[index];

        await logTx(
            `MasterPool: Adding pool${index}`,
            MasterPool.add(Token.target, config.allocPoint, startBlock, endBlock, false),
        );

        index++;
    }

    return {
        WETH,
        RewardVault,
        MasterPool,
        MasterPoolImplementation,
        PoolTokenImplementation,
        Tokens,
    };
}

async function depositMasterPool(owner: SignerWithAddress) {
    const { WETH, RewardVault, MasterPool, MasterPoolImplementation, PoolTokenImplementation, Tokens } =
        await deployMasterPool(owner);

    // Deposit tokens
    for (let index = 0; index < Tokens.length; ++index) {
        const Token = Tokens[index];
        const config = pools[index];

        const deposit = parseUnits(config.deposit, config.decimals);

        const sig1 = await permit(Token, MasterPool.target as string, deposit, MaxUint256);

        await logTx(
            `Deposit token${index}`,
            MasterPool.depositPermit(index, deposit, MaxUint256, sig1.serialized),
        );
    }

    // Withdraw tokens
    for (let index = 0; index < pools.length; ++index) {
        const config = pools[index];

        const withdraw = parseUnits(config.withdraw, config.decimals);

        await logTx(`Withdraw token${index}`, MasterPool.withdraw(index, withdraw));
    }

    const tokens: Record<string, string | Addressable> = {
        WETH: WETH.target,
        RewardVault: RewardVault.target,
        MasterPool: MasterPool.target,
        MasterPoolImplementation: MasterPoolImplementation.target,
        PoolTokenImplementation: PoolTokenImplementation.target,
    };

    pools.forEach((pool, index) => {
        tokens[pool.symbol] = Tokens[index].target;
    });

    console.log(tokens);
}

async function deploy() {
    const [owner] = await getSigners({ wrapProviderOptions: { pollingInterval: 500 } });

    await depositMasterPool(owner);
}

deploy();
