import { readFile, stat, writeFile } from "fs/promises";
import { Logger } from "logger-chain";
import type { PublicClient, WalletClient } from "viem";
import hre from "hardhat";
import { type AddConfig, getTotalRewards } from "../../src/index.js";

const logger = new Logger();

export async function existsAsync(fileOrDir: string): Promise<boolean> {
  try {
    await stat(fileOrDir);
    return true;
  } catch {
    return false;
  }
}

export async function readConfig(): Promise<AddConfig> {
  let configFile = process.env.CONFIG_FILE || "./config.json";

  if (!(await existsAsync(configFile))) {
    configFile = "./config.example.json";
  }

  const raw = await readFile(configFile, { encoding: "utf8" });
  const config = JSON.parse(raw) as AddConfig;

  console.log(configFile, config, getTotalRewards(config));
  return config;
}

/**
 * checkConfig
 * - signerLike: viem WalletClient (권장). ethers Signer를 넘겨도 any로 받지만 내부는 viem 경로 사용.
 * - 내부에서 publicClient는 hardhat-viem으로 획득
 */
export async function checkConfig(
  config: AddConfig,
  signerLike?: WalletClient | { address?: string } | unknown
): Promise<{ chainId: number; timestamp: number }> {
  // hardhat-viem public client
  const publicClient: PublicClient = await hre.viem.getPublicClient();

  // 체인/블록 타임스탬프 조회
  const [chainId, latestBlock] = await Promise.all([
    publicClient.getChainId(),
    publicClient.getBlock({ blockTag: "latest" }),
  ]);

  const timestamp =
    typeof latestBlock.timestamp === "bigint"
      ? Number(latestBlock.timestamp)
      : Number(latestBlock.timestamp ?? 0);

  // config의 chainId 검증
  if (config.chainId && config.chainId !== chainId) {
    throw new Error(
      `Wrong config ${config.chainId} for wrong chain ${chainId}`
    );
  }

  // 동기화
  config.chainId = chainId;

  logger.debug(`Deploying for chain ${chainId}`);

  return { chainId, timestamp };
}

export async function writeConfig(config: AddConfig): Promise<void> {
  const CONFIG_OUTPUT_FILE =
    process.env.CONFIG_OUTPUT_FILE || "./config.output.json";
  await writeFile(CONFIG_OUTPUT_FILE, JSON.stringify(config, null, 4));
  logger.debug(`Wrote ${CONFIG_OUTPUT_FILE}`);
}
