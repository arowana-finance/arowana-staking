import { readFile, stat, writeFile } from 'fs/promises';
import { Logger } from 'logger-chain';
import { type Provider } from 'ethers';
import { type SignerWithAddress } from 'ethers-opt';
import { type AddConfig, getTotalRewards } from '../../src/index.js';

const logger = new Logger();

export async function existsAsync(fileOrDir: string): Promise<boolean> {
    try {
        await stat(fileOrDir);

        return true;
    } catch {
        return false;
    }
}

export async function readConfig() {
    let configFile = process.env.CONFIG_FILE;

    if (!configFile) {
        configFile = './config.json';
    }

    if (!(await existsAsync(configFile))) {
        configFile = './config.example.json';
    }

    const config = JSON.parse(await readFile(configFile, { encoding: 'utf8' })) as AddConfig;

    console.log(configFile, config, getTotalRewards(config));

    return config;
}

export async function checkConfig(config: AddConfig, signer: SignerWithAddress) {
    const provider = signer.provider as Provider;

    const [chainId, timestamp] = await Promise.all([
        provider.getNetwork().then((n) => Number(n.chainId)),
        provider.getBlock('latest').then((b) => Number(b?.timestamp)),
    ]);

    // Audit chainid
    if (config.chainId && config.chainId !== chainId) {
        throw new Error(`Wrong config ${config.chainId} for wrong chain ${chainId}`);
    }

    config.chainId = chainId;

    logger.debug(`Deploying for chain ${chainId}`);

    return {
        chainId,
        timestamp,
    };
}

export async function writeConfig(config: AddConfig) {
    const CONFIG_OUTPUT_FILE = process.env.CONFIG_OUTPUT_FILE || './config.output.json';

    await writeFile(CONFIG_OUTPUT_FILE, JSON.stringify(config, null, 4));

    logger.debug(`Wrote ${CONFIG_OUTPUT_FILE}`);
}
