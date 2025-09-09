import hre from "hardhat";
import { parseUnits, parseEther, maxUint256, zeroAddress } from "viem";

export const getClients = async () => {
  const publicClient = await hre.viem.getPublicClient();
  const [owner, alice, bob, carol] = await hre.viem.getWalletClients();
  return { publicClient, owner, alice, bob, carol };
};

export const timeTravel = async (seconds: number) => {
  await hre.network.provider.send("evm_increaseTime", [seconds]);
  await hre.network.provider.send("evm_mine");
};

export { parseUnits, parseEther, maxUint256, zeroAddress };

/**
 * EIP-2612 Permit 서명 (ERC20Permit 표준)
 * - token: viem 컨트랙트 핸들 (ERC20Permit 지원)
 * - owner: 서명자(walletClient)
 * - spender: 허용받을 주소(컨트랙트)
 * - value: 허용량
 * - deadline: 만료(기본: maxUint256)
 */
export async function signPermitERC2612(params: {
  token: any;
  owner: any;
  spender: `0x${string}`;
  value: bigint;
  deadline?: bigint;
}) {
  const { token, owner, spender, value, deadline = maxUint256 } = params;

  const publicClient = await hre.viem.getPublicClient();
  const chainId = await publicClient.getChainId();

  const name = await token.read.name();
  const nonce = await token.read.nonces([owner.account.address]);
  const version = "1"; // OZ ERC20Permit 기본 버전

  const domain = {
    name,
    version,
    chainId,
    verifyingContract: token.address as `0x${string}`,
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

  const message = {
    owner: owner.account.address,
    spender,
    value,
    nonce,
    deadline,
  } as const;

  const signature = await owner.signTypedData({
    domain,
    types,
    primaryType: "Permit",
    message,
  });

  return signature;
}
