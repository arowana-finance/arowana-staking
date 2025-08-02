import { AddressLike, BaseContract, BigNumberish, BytesLike, ContractDeployTransaction, ContractFactory, ContractMethod, ContractRunner, ContractTransaction, ContractTransactionResponse, DeferredTopicFilter, EventFragment, EventLog, FunctionFragment, Interface, Listener, LogDescription, Result, Signer, TransactionRequest, Typed } from 'ethers';

export interface TypedDeferredTopicFilter<_TCEvent extends TypedContractEvent> extends DeferredTopicFilter {
}
export interface TypedContractEvent<InputTuple extends Array<any> = any, OutputTuple extends Array<any> = any, OutputObject = any> {
	(...args: Partial<InputTuple>): TypedDeferredTopicFilter<TypedContractEvent<InputTuple, OutputTuple, OutputObject>>;
	name: string;
	fragment: EventFragment;
	getFragment(...args: Partial<InputTuple>): EventFragment;
}
export type __TypechainAOutputTuple<T> = T extends TypedContractEvent<infer _U, infer W> ? W : never;
export type __TypechainOutputObject<T> = T extends TypedContractEvent<infer _U, infer _W, infer V> ? V : never;
export interface TypedEventLog<TCEvent extends TypedContractEvent> extends Omit<EventLog, "args"> {
	args: __TypechainAOutputTuple<TCEvent> & __TypechainOutputObject<TCEvent>;
}
export interface TypedLogDescription<TCEvent extends TypedContractEvent> extends Omit<LogDescription, "args"> {
	args: __TypechainAOutputTuple<TCEvent> & __TypechainOutputObject<TCEvent>;
}
export type TypedListener<TCEvent extends TypedContractEvent> = (...listenerArg: [
	...__TypechainAOutputTuple<TCEvent>,
	TypedEventLog<TCEvent>,
	...undefined[]
]) => void;
export type StateMutability = "nonpayable" | "payable" | "view";
export type BaseOverrides = Omit<TransactionRequest, "to" | "data">;
export type NonPayableOverrides = Omit<BaseOverrides, "value" | "blockTag" | "enableCcipRead">;
export type PayableOverrides = Omit<BaseOverrides, "blockTag" | "enableCcipRead">;
export type ViewOverrides = Omit<TransactionRequest, "to" | "data">;
export type Overrides<S extends StateMutability> = S extends "nonpayable" ? NonPayableOverrides : S extends "payable" ? PayableOverrides : ViewOverrides;
export type PostfixOverrides<A extends Array<any>, S extends StateMutability> = A | [
	...A,
	Overrides<S>
];
export type ContractMethodArgs<A extends Array<any>, S extends StateMutability> = PostfixOverrides<{
	[I in keyof A]-?: A[I] | Typed;
}, S>;
export type DefaultReturnType<R> = R extends Array<any> ? R[0] : R;
export interface TypedContractMethod<A extends Array<any> = Array<any>, R = any, S extends StateMutability = "payable"> {
	(...args: ContractMethodArgs<A, S>): S extends "view" ? Promise<DefaultReturnType<R>> : Promise<ContractTransactionResponse>;
	name: string;
	fragment: FunctionFragment;
	getFragment(...args: ContractMethodArgs<A, S>): FunctionFragment;
	populateTransaction(...args: ContractMethodArgs<A, S>): Promise<ContractTransaction>;
	staticCall(...args: ContractMethodArgs<A, "view">): Promise<DefaultReturnType<R>>;
	send(...args: ContractMethodArgs<A, S>): Promise<ContractTransactionResponse>;
	estimateGas(...args: ContractMethodArgs<A, S>): Promise<bigint>;
	staticCallResult(...args: ContractMethodArgs<A, "view">): Promise<R>;
}
export interface OwnableInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace OwnershipTransferredEvent {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface Ownable extends BaseContract {
	connect(runner?: ContractRunner | null): Ownable;
	waitForDeployment(): Promise<this>;
	interface: OwnableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
	filters: {
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
	};
}
export interface IERC1363Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "approveAndCall(address,uint256)" | "approveAndCall(address,uint256,bytes)" | "balanceOf" | "supportsInterface" | "totalSupply" | "transfer" | "transferAndCall(address,uint256)" | "transferAndCall(address,uint256,bytes)" | "transferFrom" | "transferFromAndCall(address,address,uint256,bytes)" | "transferFromAndCall(address,address,uint256)"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "approveAndCall(address,uint256)", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "approveAndCall(address,uint256,bytes)", values: [
		AddressLike,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "supportsInterface", values: [
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferAndCall(address,uint256)", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferAndCall(address,uint256,bytes)", values: [
		AddressLike,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFromAndCall(address,address,uint256,bytes)", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "transferFromAndCall(address,address,uint256)", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approveAndCall(address,uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approveAndCall(address,uint256,bytes)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferAndCall(address,uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferAndCall(address,uint256,bytes)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFromAndCall(address,address,uint256,bytes)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFromAndCall(address,address,uint256)", data: BytesLike): Result;
}
declare namespace ApprovalEvent {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC1363 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC1363;
	waitForDeployment(): Promise<this>;
	interface: IERC1363Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	"approveAndCall(address,uint256)": TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	"approveAndCall(address,uint256,bytes)": TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	supportsInterface: TypedContractMethod<[
		interfaceId: BytesLike
	], [
		boolean
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	"transferAndCall(address,uint256)": TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	"transferAndCall(address,uint256,bytes)": TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	"transferFromAndCall(address,address,uint256,bytes)": TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	"transferFromAndCall(address,address,uint256)": TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "approveAndCall(address,uint256)"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "approveAndCall(address,uint256,bytes)"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[
		interfaceId: BytesLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferAndCall(address,uint256)"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferAndCall(address,uint256,bytes)"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFromAndCall(address,address,uint256,bytes)"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish,
		data: BytesLike
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFromAndCall(address,address,uint256)"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
	};
}
export interface IERC1967Interface extends Interface {
	getEvent(nameOrSignatureOrTopic: "AdminChanged" | "BeaconUpgraded" | "Upgraded"): EventFragment;
}
declare namespace AdminChangedEvent {
	type InputTuple = [
		previousAdmin: AddressLike,
		newAdmin: AddressLike
	];
	type OutputTuple = [
		previousAdmin: string,
		newAdmin: string
	];
	interface OutputObject {
		previousAdmin: string;
		newAdmin: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace BeaconUpgradedEvent {
	type InputTuple = [
		beacon: AddressLike
	];
	type OutputTuple = [
		beacon: string
	];
	interface OutputObject {
		beacon: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace UpgradedEvent {
	type InputTuple = [
		implementation: AddressLike
	];
	type OutputTuple = [
		implementation: string
	];
	interface OutputObject {
		implementation: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC1967 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC1967;
	waitForDeployment(): Promise<this>;
	interface: IERC1967Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "AdminChanged"): TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
	getEvent(key: "BeaconUpgraded"): TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
	getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
	filters: {
		"AdminChanged(address,address)": TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
		AdminChanged: TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
		"BeaconUpgraded(address)": TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
		BeaconUpgraded: TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
		"Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
		Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
	};
}
export interface IERC4626Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "Transfer" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "convertToAssets", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "convertToShares", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxDeposit", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxRedeem", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxWithdraw", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "mint", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "previewDeposit", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewMint", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewRedeem", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewWithdraw", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "redeem", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$1 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent {
	type InputTuple = [
		sender: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$1 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC4626 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC4626;
	waitForDeployment(): Promise<this>;
	interface: IERC4626Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	convertToAssets: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	convertToShares: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	maxDeposit: TypedContractMethod<[
		receiver: AddressLike
	], [
		bigint
	], "view">;
	maxMint: TypedContractMethod<[
		receiver: AddressLike
	], [
		bigint
	], "view">;
	maxRedeem: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxWithdraw: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	previewDeposit: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	previewMint: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewRedeem: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewWithdraw: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	redeem: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalAssets: TypedContractMethod<[
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[
		receiver: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[
		receiver: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$1.InputTuple, ApprovalEvent$1.OutputTuple, ApprovalEvent$1.OutputObject>;
		"Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$1.InputTuple, TransferEvent$1.OutputTuple, TransferEvent$1.OutputObject>;
		"Withdraw(address,address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
	};
}
export interface IERC5267Interface extends Interface {
	getFunction(nameOrSignature: "eip712Domain"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
}
declare namespace EIP712DomainChangedEvent {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC5267 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC5267;
	waitForDeployment(): Promise<this>;
	interface: IERC5267Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
	filters: {
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent.InputTuple, EIP712DomainChangedEvent.OutputTuple, EIP712DomainChangedEvent.OutputObject>;
	};
}
export interface IERC1155ErrorsInterface extends Interface {
}
export interface IERC1155Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC1155Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC1155ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IERC20ErrorsInterface extends Interface {
}
export interface IERC20Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC20ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IERC721ErrorsInterface extends Interface {
}
export interface IERC721Errors extends BaseContract {
	connect(runner?: ContractRunner | null): IERC721Errors;
	waitForDeployment(): Promise<this>;
	interface: IERC721ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ClonesInterface extends Interface {
}
export interface Clones extends BaseContract {
	connect(runner?: ContractRunner | null): Clones;
	waitForDeployment(): Promise<this>;
	interface: ClonesInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ERC1967UtilsInterface extends Interface {
}
export interface ERC1967Utils extends BaseContract {
	connect(runner?: ContractRunner | null): ERC1967Utils;
	waitForDeployment(): Promise<this>;
	interface: ERC1967UtilsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ProxyInterface extends Interface {
}
interface Proxy$1 extends BaseContract {
	connect(runner?: ContractRunner | null): Proxy$1;
	waitForDeployment(): Promise<this>;
	interface: ProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface IBeaconInterface extends Interface {
	getFunction(nameOrSignature: "implementation"): FunctionFragment;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
}
export interface IBeacon extends BaseContract {
	connect(runner?: ContractRunner | null): IBeacon;
	waitForDeployment(): Promise<this>;
	interface: IBeaconInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	implementation: TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	filters: {};
}
export interface ERC20Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$2 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$2 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20 extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20;
	waitForDeployment(): Promise<this>;
	interface: ERC20Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$2.InputTuple, ApprovalEvent$2.OutputTuple, ApprovalEvent$2.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$2.InputTuple, TransferEvent$2.OutputTuple, TransferEvent$2.OutputObject>;
	};
}
export interface IERC20Interface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$3 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$3 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20;
	waitForDeployment(): Promise<this>;
	interface: IERC20Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$3.InputTuple, ApprovalEvent$3.OutputTuple, ApprovalEvent$3.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$3.InputTuple, TransferEvent$3.OutputTuple, TransferEvent$3.OutputObject>;
	};
}
export interface ERC20BurnableInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$4 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$4 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Burnable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Burnable;
	waitForDeployment(): Promise<this>;
	interface: ERC20BurnableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$4.InputTuple, ApprovalEvent$4.OutputTuple, ApprovalEvent$4.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$4.InputTuple, TransferEvent$4.OutputTuple, TransferEvent$4.OutputObject>;
	};
}
export interface ERC20PermitInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "eip712Domain" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$5 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$1 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$5 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Permit extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Permit;
	waitForDeployment(): Promise<this>;
	interface: ERC20PermitInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$5.InputTuple, ApprovalEvent$5.OutputTuple, ApprovalEvent$5.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$1.InputTuple, EIP712DomainChangedEvent$1.OutputTuple, EIP712DomainChangedEvent$1.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$5.InputTuple, TransferEvent$5.OutputTuple, TransferEvent$5.OutputObject>;
	};
}
export interface IERC20MetadataInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$6 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$6 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Metadata extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Metadata;
	waitForDeployment(): Promise<this>;
	interface: IERC20MetadataInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$6.InputTuple, ApprovalEvent$6.OutputTuple, ApprovalEvent$6.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$6.InputTuple, TransferEvent$6.OutputTuple, TransferEvent$6.OutputObject>;
	};
}
export interface IERC20PermitInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "nonces" | "permit"): FunctionFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
}
export interface IERC20Permit extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Permit;
	waitForDeployment(): Promise<this>;
	interface: IERC20PermitInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface SafeERC20Interface extends Interface {
}
export interface SafeERC20 extends BaseContract {
	connect(runner?: ContractRunner | null): SafeERC20;
	waitForDeployment(): Promise<this>;
	interface: SafeERC20Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface AddressInterface extends Interface {
}
export interface Address extends BaseContract {
	connect(runner?: ContractRunner | null): Address;
	waitForDeployment(): Promise<this>;
	interface: AddressInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface Create2Interface extends Interface {
}
export interface Create2 extends BaseContract {
	connect(runner?: ContractRunner | null): Create2;
	waitForDeployment(): Promise<this>;
	interface: Create2Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ErrorsInterface extends Interface {
}
export interface Errors extends BaseContract {
	connect(runner?: ContractRunner | null): Errors;
	waitForDeployment(): Promise<this>;
	interface: ErrorsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface NoncesInterface extends Interface {
	getFunction(nameOrSignature: "nonces"): FunctionFragment;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
}
export interface Nonces extends BaseContract {
	connect(runner?: ContractRunner | null): Nonces;
	waitForDeployment(): Promise<this>;
	interface: NoncesInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	filters: {};
}
export interface ShortStringsInterface extends Interface {
}
export interface ShortStrings extends BaseContract {
	connect(runner?: ContractRunner | null): ShortStrings;
	waitForDeployment(): Promise<this>;
	interface: ShortStringsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface StringsInterface extends Interface {
}
export interface Strings extends BaseContract {
	connect(runner?: ContractRunner | null): Strings;
	waitForDeployment(): Promise<this>;
	interface: StringsInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface ECDSAInterface extends Interface {
}
export interface ECDSA extends BaseContract {
	connect(runner?: ContractRunner | null): ECDSA;
	waitForDeployment(): Promise<this>;
	interface: ECDSAInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface EIP712Interface extends Interface {
	getFunction(nameOrSignature: "eip712Domain"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
}
declare namespace EIP712DomainChangedEvent$2 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface EIP712 extends BaseContract {
	connect(runner?: ContractRunner | null): EIP712;
	waitForDeployment(): Promise<this>;
	interface: EIP712Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
	filters: {
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$2.InputTuple, EIP712DomainChangedEvent$2.OutputTuple, EIP712DomainChangedEvent$2.OutputObject>;
	};
}
export interface IERC165Interface extends Interface {
	getFunction(nameOrSignature: "supportsInterface"): FunctionFragment;
	encodeFunctionData(functionFragment: "supportsInterface", values: [
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
}
export interface IERC165 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC165;
	waitForDeployment(): Promise<this>;
	interface: IERC165Interface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	supportsInterface: TypedContractMethod<[
		interfaceId: BytesLike
	], [
		boolean
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[
		interfaceId: BytesLike
	], [
		boolean
	], "view">;
	filters: {};
}
export interface SafeCastInterface extends Interface {
}
export interface SafeCast extends BaseContract {
	connect(runner?: ContractRunner | null): SafeCast;
	waitForDeployment(): Promise<this>;
	interface: SafeCastInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface OwnableUpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace InitializedEvent {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$1 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface OwnableUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): OwnableUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: OwnableUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$1.InputTuple, OwnershipTransferredEvent$1.OutputTuple, OwnershipTransferredEvent$1.OutputObject>;
	};
}
export interface InitializableInterface extends Interface {
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
declare namespace InitializedEvent$1 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface Initializable extends BaseContract {
	connect(runner?: ContractRunner | null): Initializable;
	waitForDeployment(): Promise<this>;
	interface: InitializableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$1.InputTuple, InitializedEvent$1.OutputTuple, InitializedEvent$1.OutputObject>;
	};
}
export interface ERC20UpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Initialized" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$7 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$2 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$7 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Upgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Upgradeable;
	waitForDeployment(): Promise<this>;
	interface: ERC20UpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$7.InputTuple, ApprovalEvent$7.OutputTuple, ApprovalEvent$7.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$2.InputTuple, InitializedEvent$2.OutputTuple, InitializedEvent$2.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$7.InputTuple, TransferEvent$7.OutputTuple, TransferEvent$7.OutputObject>;
	};
}
export interface ERC20PermitUpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "eip712Domain" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "Initialized" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$8 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$3 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$3 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$8 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20PermitUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20PermitUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: ERC20PermitUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$8.InputTuple, ApprovalEvent$8.OutputTuple, ApprovalEvent$8.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$8.InputTuple, TransferEvent$8.OutputTuple, TransferEvent$8.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$8.InputTuple, ApprovalEvent$8.OutputTuple, ApprovalEvent$8.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$8.InputTuple, ApprovalEvent$8.OutputTuple, ApprovalEvent$8.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$3.InputTuple, EIP712DomainChangedEvent$3.OutputTuple, EIP712DomainChangedEvent$3.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$3.InputTuple, InitializedEvent$3.OutputTuple, InitializedEvent$3.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$8.InputTuple, TransferEvent$8.OutputTuple, TransferEvent$8.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$8.InputTuple, TransferEvent$8.OutputTuple, TransferEvent$8.OutputObject>;
	};
}
export interface ERC4626UpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "Initialized" | "Transfer" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "convertToAssets", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "convertToShares", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxDeposit", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxRedeem", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxWithdraw", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "mint", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "previewDeposit", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewMint", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewRedeem", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewWithdraw", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "redeem", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$9 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$1 {
	type InputTuple = [
		sender: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$4 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$9 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$1 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC4626Upgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC4626Upgradeable;
	waitForDeployment(): Promise<this>;
	interface: ERC4626UpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	convertToAssets: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	convertToShares: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	maxDeposit: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	maxMint: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	maxRedeem: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxWithdraw: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	previewDeposit: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	previewMint: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewRedeem: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewWithdraw: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	redeem: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalAssets: TypedContractMethod<[
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$9.InputTuple, ApprovalEvent$9.OutputTuple, ApprovalEvent$9.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$1.InputTuple, DepositEvent$1.OutputTuple, DepositEvent$1.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$9.InputTuple, TransferEvent$9.OutputTuple, TransferEvent$9.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$1.InputTuple, WithdrawEvent$1.OutputTuple, WithdrawEvent$1.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$9.InputTuple, ApprovalEvent$9.OutputTuple, ApprovalEvent$9.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$9.InputTuple, ApprovalEvent$9.OutputTuple, ApprovalEvent$9.OutputObject>;
		"Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent$1.InputTuple, DepositEvent$1.OutputTuple, DepositEvent$1.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$1.InputTuple, DepositEvent$1.OutputTuple, DepositEvent$1.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$4.InputTuple, InitializedEvent$4.OutputTuple, InitializedEvent$4.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$9.InputTuple, TransferEvent$9.OutputTuple, TransferEvent$9.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$9.InputTuple, TransferEvent$9.OutputTuple, TransferEvent$9.OutputObject>;
		"Withdraw(address,address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent$1.InputTuple, WithdrawEvent$1.OutputTuple, WithdrawEvent$1.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$1.InputTuple, WithdrawEvent$1.OutputTuple, WithdrawEvent$1.OutputObject>;
	};
}
export interface ContextUpgradeableInterface extends Interface {
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
declare namespace InitializedEvent$5 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ContextUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ContextUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: ContextUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$5.InputTuple, InitializedEvent$5.OutputTuple, InitializedEvent$5.OutputObject>;
	};
}
export interface NoncesUpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "nonces"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
}
declare namespace InitializedEvent$6 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface NoncesUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): NoncesUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: NoncesUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$6.InputTuple, InitializedEvent$6.OutputTuple, InitializedEvent$6.OutputObject>;
	};
}
export interface ReentrancyGuardUpgradeableInterface extends Interface {
	getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
declare namespace InitializedEvent$7 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ReentrancyGuardUpgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): ReentrancyGuardUpgradeable;
	waitForDeployment(): Promise<this>;
	interface: ReentrancyGuardUpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
	filters: {
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$7.InputTuple, InitializedEvent$7.OutputTuple, InitializedEvent$7.OutputObject>;
	};
}
export interface EIP712UpgradeableInterface extends Interface {
	getFunction(nameOrSignature: "eip712Domain"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged" | "Initialized"): EventFragment;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
}
declare namespace EIP712DomainChangedEvent$4 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$8 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface EIP712Upgradeable extends BaseContract {
	connect(runner?: ContractRunner | null): EIP712Upgradeable;
	waitForDeployment(): Promise<this>;
	interface: EIP712UpgradeableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$4.InputTuple, EIP712DomainChangedEvent$4.OutputTuple, EIP712DomainChangedEvent$4.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
	filters: {
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$4.InputTuple, EIP712DomainChangedEvent$4.OutputTuple, EIP712DomainChangedEvent$4.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$4.InputTuple, EIP712DomainChangedEvent$4.OutputTuple, EIP712DomainChangedEvent$4.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$8.InputTuple, InitializedEvent$8.OutputTuple, InitializedEvent$8.OutputObject>;
	};
}
export interface LockInterface extends Interface {
	getFunction(nameOrSignature: "owner" | "unlockTime" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "unlockTime", values?: undefined): string;
	encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace WithdrawalEvent {
	type InputTuple = [
		amount: BigNumberish,
		when: BigNumberish
	];
	type OutputTuple = [
		amount: bigint,
		when: bigint
	];
	interface OutputObject {
		amount: bigint;
		when: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
interface Lock$1 extends BaseContract {
	connect(runner?: ContractRunner | null): Lock$1;
	waitForDeployment(): Promise<this>;
	interface: LockInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	unlockTime: TypedContractMethod<[
	], [
		bigint
	], "view">;
	withdraw: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "unlockTime"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
	filters: {
		"Withdrawal(uint256,uint256)": TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
		Withdrawal: TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
	};
}
export interface IERC20ExpInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$10 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$10 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Exp extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Exp;
	waitForDeployment(): Promise<this>;
	interface: IERC20ExpInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$10.InputTuple, ApprovalEvent$10.OutputTuple, ApprovalEvent$10.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$10.InputTuple, TransferEvent$10.OutputTuple, TransferEvent$10.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$10.InputTuple, ApprovalEvent$10.OutputTuple, ApprovalEvent$10.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$10.InputTuple, ApprovalEvent$10.OutputTuple, ApprovalEvent$10.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$10.InputTuple, TransferEvent$10.OutputTuple, TransferEvent$10.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$10.InputTuple, TransferEvent$10.OutputTuple, TransferEvent$10.OutputObject>;
	};
}
export interface IERC20MintableInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "mint" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "mint", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$11 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$11 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC20Mintable extends BaseContract {
	connect(runner?: ContractRunner | null): IERC20Mintable;
	waitForDeployment(): Promise<this>;
	interface: IERC20MintableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$11.InputTuple, ApprovalEvent$11.OutputTuple, ApprovalEvent$11.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$11.InputTuple, TransferEvent$11.OutputTuple, TransferEvent$11.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$11.InputTuple, ApprovalEvent$11.OutputTuple, ApprovalEvent$11.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$11.InputTuple, ApprovalEvent$11.OutputTuple, ApprovalEvent$11.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$11.InputTuple, TransferEvent$11.OutputTuple, TransferEvent$11.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$11.InputTuple, TransferEvent$11.OutputTuple, TransferEvent$11.OutputObject>;
	};
}
interface IERC4626Interface$1 extends Interface {
	getFunction(nameOrSignature: "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "deposit" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "Transfer" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "convertToAssets", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "convertToShares", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxDeposit", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxRedeem", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxWithdraw", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "mint", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "previewDeposit", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewMint", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewRedeem", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewWithdraw", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "redeem", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$12 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$2 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$12 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$2 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
interface IERC4626$1 extends BaseContract {
	connect(runner?: ContractRunner | null): IERC4626$1;
	waitForDeployment(): Promise<this>;
	interface: IERC4626Interface$1;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	convertToAssets: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	convertToShares: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	maxDeposit: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxMint: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxRedeem: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxWithdraw: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	previewDeposit: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	previewMint: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewRedeem: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewWithdraw: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	redeem: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	totalAssets: TypedContractMethod<[
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$12.InputTuple, ApprovalEvent$12.OutputTuple, ApprovalEvent$12.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$2.InputTuple, DepositEvent$2.OutputTuple, DepositEvent$2.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$12.InputTuple, TransferEvent$12.OutputTuple, TransferEvent$12.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$2.InputTuple, WithdrawEvent$2.OutputTuple, WithdrawEvent$2.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$12.InputTuple, ApprovalEvent$12.OutputTuple, ApprovalEvent$12.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$12.InputTuple, ApprovalEvent$12.OutputTuple, ApprovalEvent$12.OutputObject>;
		"Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent$2.InputTuple, DepositEvent$2.OutputTuple, DepositEvent$2.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$2.InputTuple, DepositEvent$2.OutputTuple, DepositEvent$2.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$12.InputTuple, TransferEvent$12.OutputTuple, TransferEvent$12.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$12.InputTuple, TransferEvent$12.OutputTuple, TransferEvent$12.OutputObject>;
		"Withdraw(address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent$2.InputTuple, WithdrawEvent$2.OutputTuple, WithdrawEvent$2.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$2.InputTuple, WithdrawEvent$2.OutputTuple, WithdrawEvent$2.OutputObject>;
	};
}
export interface IERC4626PoolInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "initialize" | "masterBurn" | "masterMint" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "nonces" | "permit" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "Transfer" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "convertToAssets", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "convertToShares", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "masterBurn", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "masterMint", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "maxDeposit", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxRedeem", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxWithdraw", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "mint", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "previewDeposit", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewMint", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewRedeem", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewWithdraw", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "redeem", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "masterBurn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "masterMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$13 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$3 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$13 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$3 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface IERC4626Pool extends BaseContract {
	connect(runner?: ContractRunner | null): IERC4626Pool;
	waitForDeployment(): Promise<this>;
	interface: IERC4626PoolInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	convertToAssets: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	convertToShares: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	initialize: TypedContractMethod<[
		_masterPool: AddressLike,
		_pid: BigNumberish,
		_asset: AddressLike,
		_rewardToken: AddressLike
	], [
		void
	], "nonpayable">;
	masterBurn: TypedContractMethod<[
		from: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	masterMint: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	maxDeposit: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxMint: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxRedeem: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxWithdraw: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	previewDeposit: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	previewMint: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewRedeem: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewWithdraw: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	redeem: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalAssets: TypedContractMethod<[
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_masterPool: AddressLike,
		_pid: BigNumberish,
		_asset: AddressLike,
		_rewardToken: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "masterBurn"): TypedContractMethod<[
		from: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "masterMint"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$13.InputTuple, ApprovalEvent$13.OutputTuple, ApprovalEvent$13.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$3.InputTuple, DepositEvent$3.OutputTuple, DepositEvent$3.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$13.InputTuple, TransferEvent$13.OutputTuple, TransferEvent$13.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$3.InputTuple, WithdrawEvent$3.OutputTuple, WithdrawEvent$3.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$13.InputTuple, ApprovalEvent$13.OutputTuple, ApprovalEvent$13.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$13.InputTuple, ApprovalEvent$13.OutputTuple, ApprovalEvent$13.OutputObject>;
		"Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent$3.InputTuple, DepositEvent$3.OutputTuple, DepositEvent$3.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$3.InputTuple, DepositEvent$3.OutputTuple, DepositEvent$3.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$13.InputTuple, TransferEvent$13.OutputTuple, TransferEvent$13.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$13.InputTuple, TransferEvent$13.OutputTuple, TransferEvent$13.OutputObject>;
		"Withdraw(address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent$3.InputTuple, WithdrawEvent$3.OutputTuple, WithdrawEvent$3.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$3.InputTuple, WithdrawEvent$3.OutputTuple, WithdrawEvent$3.OutputObject>;
	};
}
export interface IInitializableProxyInterface extends Interface {
	getFunction(nameOrSignature: "admin" | "changeAdmin" | "implementation" | "initializeProxy" | "upgradeToAndCall"): FunctionFragment;
	encodeFunctionData(functionFragment: "admin", values?: undefined): string;
	encodeFunctionData(functionFragment: "changeAdmin", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeProxy", values: [
		AddressLike,
		AddressLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "upgradeToAndCall", values: [
		AddressLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
export interface IInitializableProxy extends BaseContract {
	connect(runner?: ContractRunner | null): IInitializableProxy;
	waitForDeployment(): Promise<this>;
	interface: IInitializableProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	admin: TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	changeAdmin: TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	implementation: TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	initializeProxy: TypedContractMethod<[
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	upgradeToAndCall: TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "admin"): TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "nonpayable">;
	getFunction(nameOrSignature: "initializeProxy"): TypedContractMethod<[
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	filters: {};
}
export declare namespace IMasterChef {
	type PoolInfoStruct = {
		lpToken: AddressLike;
		allocPoint: BigNumberish;
		startBlock: BigNumberish;
		endBlock: BigNumberish;
		lastRewardBlock: BigNumberish;
		accRewardPerShare: BigNumberish;
	};
	type PoolInfoStructOutput = [
		lpToken: string,
		allocPoint: bigint,
		startBlock: bigint,
		endBlock: bigint,
		lastRewardBlock: bigint,
		accRewardPerShare: bigint
	] & {
		lpToken: string;
		allocPoint: bigint;
		startBlock: bigint;
		endBlock: bigint;
		lastRewardBlock: bigint;
		accRewardPerShare: bigint;
	};
	type UserInfoStruct = {
		amount: BigNumberish;
		rewardDebt: BigNumberish;
	};
	type UserInfoStructOutput = [
		amount: bigint,
		rewardDebt: bigint
	] & {
		amount: bigint;
		rewardDebt: bigint;
	};
}
export interface IMasterChefInterface extends Interface {
	getFunction(nameOrSignature: "WETH" | "add" | "deposit" | "getBlockRewardPerShare" | "getMultiplier" | "hasPool" | "initialize" | "massUpdatePools" | "pendingRewards" | "poolId" | "poolInfo" | "poolLength" | "rewardPerBlock" | "rewardToken" | "rewardVault" | "set" | "totalAllocPoint" | "updatePool" | "updateRewardPerBlock" | "userInfo" | "withdraw"): FunctionFragment;
	encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
	encodeFunctionData(functionFragment: "add", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getBlockRewardPerShare", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getMultiplier", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "hasPool", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
	encodeFunctionData(functionFragment: "pendingRewards", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolId", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolInfo", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardPerBlock", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardVault", values?: undefined): string;
	encodeFunctionData(functionFragment: "set", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
	encodeFunctionData(functionFragment: "updatePool", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "updateRewardPerBlock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "userInfo", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getBlockRewardPerShare", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardVault", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface IMasterChef extends BaseContract {
	connect(runner?: ContractRunner | null): IMasterChef;
	waitForDeployment(): Promise<this>;
	interface: IMasterChefInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	WETH: TypedContractMethod<[
	], [
		string
	], "view">;
	add: TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	deposit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getBlockRewardPerShare: TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getMultiplier: TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	hasPool: TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	initialize: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	massUpdatePools: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	pendingRewards: TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	poolId: TypedContractMethod<[
		pool: AddressLike
	], [
		bigint
	], "view">;
	poolInfo: TypedContractMethod<[
		pid: BigNumberish
	], [
		IMasterChef.PoolInfoStructOutput
	], "view">;
	poolLength: TypedContractMethod<[
	], [
		bigint
	], "view">;
	rewardPerBlock: TypedContractMethod<[
	], [
		bigint
	], "view">;
	rewardToken: TypedContractMethod<[
	], [
		string
	], "view">;
	rewardVault: TypedContractMethod<[
	], [
		string
	], "view">;
	set: TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	totalAllocPoint: TypedContractMethod<[
	], [
		bigint
	], "view">;
	updatePool: TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	updateRewardPerBlock: TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	userInfo: TypedContractMethod<[
		pid: BigNumberish,
		user: AddressLike
	], [
		IMasterChef.UserInfoStructOutput
	], "view">;
	withdraw: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "WETH"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "add"): TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "getBlockRewardPerShare"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getMultiplier"): TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "hasPool"): TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "massUpdatePools"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "pendingRewards"): TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolId"): TypedContractMethod<[
		pool: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolInfo"): TypedContractMethod<[
		pid: BigNumberish
	], [
		IMasterChef.PoolInfoStructOutput
	], "view">;
	getFunction(nameOrSignature: "poolLength"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "rewardPerBlock"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "rewardVault"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "set"): TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "totalAllocPoint"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "updatePool"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateRewardPerBlock"): TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "userInfo"): TypedContractMethod<[
		pid: BigNumberish,
		user: AddressLike
	], [
		IMasterChef.UserInfoStructOutput
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	filters: {};
}
declare namespace IMasterChef$1 {
	type PoolInfoStruct = {
		lpToken: AddressLike;
		allocPoint: BigNumberish;
		startBlock: BigNumberish;
		endBlock: BigNumberish;
		lastRewardBlock: BigNumberish;
		accRewardPerShare: BigNumberish;
	};
	type PoolInfoStructOutput = [
		lpToken: string,
		allocPoint: bigint,
		startBlock: bigint,
		endBlock: bigint,
		lastRewardBlock: bigint,
		accRewardPerShare: bigint
	] & {
		lpToken: string;
		allocPoint: bigint;
		startBlock: bigint;
		endBlock: bigint;
		lastRewardBlock: bigint;
		accRewardPerShare: bigint;
	};
	type UserInfoStruct = {
		amount: BigNumberish;
		rewardDebt: BigNumberish;
	};
	type UserInfoStructOutput = [
		amount: bigint,
		rewardDebt: bigint
	] & {
		amount: bigint;
		rewardDebt: bigint;
	};
}
export interface IMasterPoolInterface extends Interface {
	getFunction(nameOrSignature: "WETH" | "add" | "deposit" | "depositPermit" | "getBlockRewardPerShare" | "getMultiplier" | "hasPool" | "hasPoolToken" | "initialize" | "initializePool" | "massUpdatePools" | "pendingRewards" | "poolDeposit" | "poolId" | "poolIdByTokens" | "poolInfo" | "poolLength" | "poolMint" | "poolTokenImplementation" | "poolTokens" | "poolTransfer" | "poolWithdraw" | "rewardPerBlock" | "rewardToken" | "rewardVault" | "set" | "totalAllocPoint" | "updatePool" | "updateRewardPerBlock" | "userInfo" | "withdraw"): FunctionFragment;
	encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
	encodeFunctionData(functionFragment: "add", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "depositPermit", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "getBlockRewardPerShare", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getMultiplier", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "hasPool", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "hasPoolToken", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "initializePool", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
	encodeFunctionData(functionFragment: "pendingRewards", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolDeposit", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolId", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolIdByTokens", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolInfo", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
	encodeFunctionData(functionFragment: "poolMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolTokenImplementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "poolTokens", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolTransfer", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolWithdraw", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "rewardPerBlock", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardVault", values?: undefined): string;
	encodeFunctionData(functionFragment: "set", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
	encodeFunctionData(functionFragment: "updatePool", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "updateRewardPerBlock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "userInfo", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "depositPermit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getBlockRewardPerShare", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPoolToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolIdByTokens", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTokenImplementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTokens", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTransfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardVault", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface IMasterPool extends BaseContract {
	connect(runner?: ContractRunner | null): IMasterPool;
	waitForDeployment(): Promise<this>;
	interface: IMasterPoolInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	WETH: TypedContractMethod<[
	], [
		string
	], "view">;
	add: TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	deposit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	depositPermit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish,
		_deadline: BigNumberish,
		_signature: BytesLike
	], [
		void
	], "nonpayable">;
	getBlockRewardPerShare: TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getMultiplier: TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	hasPool: TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	hasPoolToken: TypedContractMethod<[
		_poolToken: AddressLike
	], [
		boolean
	], "view">;
	initialize: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	initializePool: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_poolTokenImplementation: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	massUpdatePools: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	pendingRewards: TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	poolDeposit: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	poolId: TypedContractMethod<[
		pool: AddressLike
	], [
		bigint
	], "view">;
	poolIdByTokens: TypedContractMethod<[
		token: AddressLike
	], [
		bigint
	], "view">;
	poolInfo: TypedContractMethod<[
		pid: BigNumberish
	], [
		IMasterChef$1.PoolInfoStructOutput
	], "view">;
	poolLength: TypedContractMethod<[
	], [
		bigint
	], "view">;
	poolMint: TypedContractMethod<[
		_from: AddressLike
	], [
		void
	], "nonpayable">;
	poolTokenImplementation: TypedContractMethod<[
	], [
		string
	], "view">;
	poolTokens: TypedContractMethod<[
		pid: BigNumberish
	], [
		string
	], "view">;
	poolTransfer: TypedContractMethod<[
		_from: AddressLike,
		_to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	poolWithdraw: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	rewardPerBlock: TypedContractMethod<[
	], [
		bigint
	], "view">;
	rewardToken: TypedContractMethod<[
	], [
		string
	], "view">;
	rewardVault: TypedContractMethod<[
	], [
		string
	], "view">;
	set: TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	totalAllocPoint: TypedContractMethod<[
	], [
		bigint
	], "view">;
	updatePool: TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	updateRewardPerBlock: TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	userInfo: TypedContractMethod<[
		pid: BigNumberish,
		user: AddressLike
	], [
		IMasterChef$1.UserInfoStructOutput
	], "view">;
	withdraw: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "WETH"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "add"): TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "depositPermit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish,
		_deadline: BigNumberish,
		_signature: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "getBlockRewardPerShare"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getMultiplier"): TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "hasPool"): TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "hasPoolToken"): TypedContractMethod<[
		_poolToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializePool"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_poolTokenImplementation: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "massUpdatePools"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "pendingRewards"): TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolDeposit"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolId"): TypedContractMethod<[
		pool: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolIdByTokens"): TypedContractMethod<[
		token: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolInfo"): TypedContractMethod<[
		pid: BigNumberish
	], [
		IMasterChef$1.PoolInfoStructOutput
	], "view">;
	getFunction(nameOrSignature: "poolLength"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolMint"): TypedContractMethod<[
		_from: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolTokenImplementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "poolTokens"): TypedContractMethod<[
		pid: BigNumberish
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "poolTransfer"): TypedContractMethod<[
		_from: AddressLike,
		_to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolWithdraw"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "rewardPerBlock"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "rewardVault"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "set"): TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "totalAllocPoint"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "updatePool"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateRewardPerBlock"): TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "userInfo"): TypedContractMethod<[
		pid: BigNumberish,
		user: AddressLike
	], [
		IMasterChef$1.UserInfoStructOutput
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface IRewardVaultInterface extends Interface {
	getFunction(nameOrSignature: "sendTo"): FunctionFragment;
	encodeFunctionData(functionFragment: "sendTo", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "sendTo", data: BytesLike): Result;
}
export interface IRewardVault extends BaseContract {
	connect(runner?: ContractRunner | null): IRewardVault;
	waitForDeployment(): Promise<this>;
	interface: IRewardVaultInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	sendTo: TypedContractMethod<[
		token: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "sendTo"): TypedContractMethod<[
		token: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface IWETHInterface extends Interface {
	getFunction(nameOrSignature: "deposit" | "withdraw"): FunctionFragment;
	encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface IWETH extends BaseContract {
	connect(runner?: ContractRunner | null): IWETH;
	waitForDeployment(): Promise<this>;
	interface: IWETHInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	deposit: TypedContractMethod<[
	], [
		void
	], "payable">;
	withdraw: TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	filters: {};
}
export interface SigLibInterface extends Interface {
}
export interface SigLib extends BaseContract {
	connect(runner?: ContractRunner | null): SigLib;
	waitForDeployment(): Promise<this>;
	interface: SigLibInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	filters: {};
}
export interface MasterChefInterface extends Interface {
	getFunction(nameOrSignature: "WETH" | "add" | "deposit" | "getBlockRewardPerShare" | "getMultiplier" | "hasPool" | "initialize" | "massUpdatePools" | "owner" | "pendingRewards" | "poolId" | "poolInfo" | "poolLength" | "renounceOwnership" | "rewardPerBlock" | "rewardToken" | "rewardVault" | "set" | "totalAllocPoint" | "transferOwnership" | "updatePool" | "updateRewardPerBlock" | "userInfo" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Deposit" | "Initialized" | "InitializedChef" | "OwnershipTransferred" | "SetPool" | "SetReward" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
	encodeFunctionData(functionFragment: "add", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getBlockRewardPerShare", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getMultiplier", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "hasPool", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "pendingRewards", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolId", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolInfo", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardPerBlock", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardVault", values?: undefined): string;
	encodeFunctionData(functionFragment: "set", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "updatePool", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "updateRewardPerBlock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "userInfo", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getBlockRewardPerShare", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardVault", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace DepositEvent$4 {
	type InputTuple = [
		user: AddressLike,
		pid: BigNumberish,
		amount: BigNumberish
	];
	type OutputTuple = [
		user: string,
		pid: bigint,
		amount: bigint
	];
	interface OutputObject {
		user: string;
		pid: bigint;
		amount: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$9 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedChefEvent {
	type InputTuple = [
		WETH: AddressLike,
		rewardToken: AddressLike,
		rewardVault: AddressLike
	];
	type OutputTuple = [
		WETH: string,
		rewardToken: string,
		rewardVault: string
	];
	interface OutputObject {
		WETH: string;
		rewardToken: string;
		rewardVault: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$2 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetPoolEvent {
	type InputTuple = [
		pid: BigNumberish,
		lpToken: AddressLike,
		newAllocPoint: BigNumberish,
		startBlock: BigNumberish,
		endBlock: BigNumberish
	];
	type OutputTuple = [
		pid: bigint,
		lpToken: string,
		newAllocPoint: bigint,
		startBlock: bigint,
		endBlock: bigint
	];
	interface OutputObject {
		pid: bigint;
		lpToken: string;
		newAllocPoint: bigint;
		startBlock: bigint;
		endBlock: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetRewardEvent {
	type InputTuple = [
		newReward: BigNumberish
	];
	type OutputTuple = [
		newReward: bigint
	];
	interface OutputObject {
		newReward: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$4 {
	type InputTuple = [
		user: AddressLike,
		pid: BigNumberish,
		amount: BigNumberish
	];
	type OutputTuple = [
		user: string,
		pid: bigint,
		amount: bigint
	];
	interface OutputObject {
		user: string;
		pid: bigint;
		amount: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface MasterChef extends BaseContract {
	connect(runner?: ContractRunner | null): MasterChef;
	waitForDeployment(): Promise<this>;
	interface: MasterChefInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	WETH: TypedContractMethod<[
	], [
		string
	], "view">;
	add: TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	deposit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getBlockRewardPerShare: TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getMultiplier: TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	hasPool: TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	initialize: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	massUpdatePools: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	pendingRewards: TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	poolId: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	poolInfo: TypedContractMethod<[
		arg0: BigNumberish
	], [
		[
			string,
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			lpToken: string;
			allocPoint: bigint;
			startBlock: bigint;
			endBlock: bigint;
			lastRewardBlock: bigint;
			accRewardPerShare: bigint;
		}
	], "view">;
	poolLength: TypedContractMethod<[
	], [
		bigint
	], "view">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	rewardPerBlock: TypedContractMethod<[
	], [
		bigint
	], "view">;
	rewardToken: TypedContractMethod<[
	], [
		string
	], "view">;
	rewardVault: TypedContractMethod<[
	], [
		string
	], "view">;
	set: TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	totalAllocPoint: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	updatePool: TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	updateRewardPerBlock: TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	userInfo: TypedContractMethod<[
		arg0: BigNumberish,
		arg1: AddressLike
	], [
		[
			bigint,
			bigint
		] & {
			amount: bigint;
			rewardDebt: bigint;
		}
	], "view">;
	withdraw: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "WETH"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "add"): TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "getBlockRewardPerShare"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getMultiplier"): TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "hasPool"): TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "massUpdatePools"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "pendingRewards"): TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolId"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolInfo"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		[
			string,
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			lpToken: string;
			allocPoint: bigint;
			startBlock: bigint;
			endBlock: bigint;
			lastRewardBlock: bigint;
			accRewardPerShare: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "poolLength"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "rewardPerBlock"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "rewardVault"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "set"): TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "totalAllocPoint"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updatePool"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateRewardPerBlock"): TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "userInfo"): TypedContractMethod<[
		arg0: BigNumberish,
		arg1: AddressLike
	], [
		[
			bigint,
			bigint
		] & {
			amount: bigint;
			rewardDebt: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$4.InputTuple, DepositEvent$4.OutputTuple, DepositEvent$4.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$9.InputTuple, InitializedEvent$9.OutputTuple, InitializedEvent$9.OutputObject>;
	getEvent(key: "InitializedChef"): TypedContractEvent<InitializedChefEvent.InputTuple, InitializedChefEvent.OutputTuple, InitializedChefEvent.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
	getEvent(key: "SetPool"): TypedContractEvent<SetPoolEvent.InputTuple, SetPoolEvent.OutputTuple, SetPoolEvent.OutputObject>;
	getEvent(key: "SetReward"): TypedContractEvent<SetRewardEvent.InputTuple, SetRewardEvent.OutputTuple, SetRewardEvent.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$4.InputTuple, WithdrawEvent$4.OutputTuple, WithdrawEvent$4.OutputObject>;
	filters: {
		"Deposit(address,uint256,uint256)": TypedContractEvent<DepositEvent$4.InputTuple, DepositEvent$4.OutputTuple, DepositEvent$4.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$4.InputTuple, DepositEvent$4.OutputTuple, DepositEvent$4.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$9.InputTuple, InitializedEvent$9.OutputTuple, InitializedEvent$9.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$9.InputTuple, InitializedEvent$9.OutputTuple, InitializedEvent$9.OutputObject>;
		"InitializedChef(address,address,address)": TypedContractEvent<InitializedChefEvent.InputTuple, InitializedChefEvent.OutputTuple, InitializedChefEvent.OutputObject>;
		InitializedChef: TypedContractEvent<InitializedChefEvent.InputTuple, InitializedChefEvent.OutputTuple, InitializedChefEvent.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$2.InputTuple, OwnershipTransferredEvent$2.OutputTuple, OwnershipTransferredEvent$2.OutputObject>;
		"SetPool(uint256,address,uint256,uint256,uint256)": TypedContractEvent<SetPoolEvent.InputTuple, SetPoolEvent.OutputTuple, SetPoolEvent.OutputObject>;
		SetPool: TypedContractEvent<SetPoolEvent.InputTuple, SetPoolEvent.OutputTuple, SetPoolEvent.OutputObject>;
		"SetReward(uint256)": TypedContractEvent<SetRewardEvent.InputTuple, SetRewardEvent.OutputTuple, SetRewardEvent.OutputObject>;
		SetReward: TypedContractEvent<SetRewardEvent.InputTuple, SetRewardEvent.OutputTuple, SetRewardEvent.OutputObject>;
		"Withdraw(address,uint256,uint256)": TypedContractEvent<WithdrawEvent$4.InputTuple, WithdrawEvent$4.OutputTuple, WithdrawEvent$4.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$4.InputTuple, WithdrawEvent$4.OutputTuple, WithdrawEvent$4.OutputObject>;
	};
}
export interface MasterPoolInterface extends Interface {
	getFunction(nameOrSignature: "WETH" | "add" | "deposit" | "depositPermit" | "getBlockRewardPerShare" | "getMultiplier" | "hasPool" | "hasPoolToken" | "initialize" | "initializePool" | "massUpdatePools" | "owner" | "pendingRewards" | "poolDeposit" | "poolId" | "poolIdByTokens" | "poolInfo" | "poolLength" | "poolMint" | "poolTokenImplementation" | "poolTokens" | "poolTransfer" | "poolWithdraw" | "renounceOwnership" | "rewardPerBlock" | "rewardToken" | "rewardVault" | "set" | "totalAllocPoint" | "transferOwnership" | "updatePool" | "updateRewardPerBlock" | "userInfo" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Deposit" | "Initialized" | "InitializedChef" | "OwnershipTransferred" | "SetPool" | "SetPoolToken" | "SetReward" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
	encodeFunctionData(functionFragment: "add", values: [
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "depositPermit", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "getBlockRewardPerShare", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "getMultiplier", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "hasPool", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "hasPoolToken", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "initializePool", values: [
		AddressLike,
		AddressLike,
		AddressLike,
		AddressLike,
		BigNumberish,
		AddressLike,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "massUpdatePools", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "pendingRewards", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolDeposit", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolId", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolIdByTokens", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolInfo", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
	encodeFunctionData(functionFragment: "poolMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "poolTokenImplementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "poolTokens", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolTransfer", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "poolWithdraw", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardPerBlock", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
	encodeFunctionData(functionFragment: "rewardVault", values?: undefined): string;
	encodeFunctionData(functionFragment: "set", values: [
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		boolean
	]): string;
	encodeFunctionData(functionFragment: "totalAllocPoint", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "updatePool", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "updateRewardPerBlock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "userInfo", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "depositPermit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getBlockRewardPerShare", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "getMultiplier", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "hasPoolToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "massUpdatePools", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pendingRewards", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolId", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolIdByTokens", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTokenImplementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTokens", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolTransfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardVault", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAllocPoint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "updateRewardPerBlock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace DepositEvent$5 {
	type InputTuple = [
		user: AddressLike,
		pid: BigNumberish,
		amount: BigNumberish
	];
	type OutputTuple = [
		user: string,
		pid: bigint,
		amount: bigint
	];
	interface OutputObject {
		user: string;
		pid: bigint;
		amount: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$10 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedChefEvent$1 {
	type InputTuple = [
		WETH: AddressLike,
		rewardToken: AddressLike,
		rewardVault: AddressLike
	];
	type OutputTuple = [
		WETH: string,
		rewardToken: string,
		rewardVault: string
	];
	interface OutputObject {
		WETH: string;
		rewardToken: string;
		rewardVault: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$3 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetPoolEvent$1 {
	type InputTuple = [
		pid: BigNumberish,
		lpToken: AddressLike,
		newAllocPoint: BigNumberish,
		startBlock: BigNumberish,
		endBlock: BigNumberish
	];
	type OutputTuple = [
		pid: bigint,
		lpToken: string,
		newAllocPoint: bigint,
		startBlock: bigint,
		endBlock: bigint
	];
	interface OutputObject {
		pid: bigint;
		lpToken: string;
		newAllocPoint: bigint;
		startBlock: bigint;
		endBlock: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetPoolTokenEvent {
	type InputTuple = [
		pid: BigNumberish,
		poolToken: AddressLike
	];
	type OutputTuple = [
		pid: bigint,
		poolToken: string
	];
	interface OutputObject {
		pid: bigint;
		poolToken: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace SetRewardEvent$1 {
	type InputTuple = [
		newReward: BigNumberish
	];
	type OutputTuple = [
		newReward: bigint
	];
	interface OutputObject {
		newReward: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$5 {
	type InputTuple = [
		user: AddressLike,
		pid: BigNumberish,
		amount: BigNumberish
	];
	type OutputTuple = [
		user: string,
		pid: bigint,
		amount: bigint
	];
	interface OutputObject {
		user: string;
		pid: bigint;
		amount: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface MasterPool extends BaseContract {
	connect(runner?: ContractRunner | null): MasterPool;
	waitForDeployment(): Promise<this>;
	interface: MasterPoolInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	WETH: TypedContractMethod<[
	], [
		string
	], "view">;
	add: TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	deposit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	depositPermit: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish,
		_deadline: BigNumberish,
		_signature: BytesLike
	], [
		void
	], "nonpayable">;
	getBlockRewardPerShare: TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getMultiplier: TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	hasPool: TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	hasPoolToken: TypedContractMethod<[
		_poolToken: AddressLike
	], [
		boolean
	], "view">;
	initialize: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	initializePool: TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_poolTokenImplementation: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	massUpdatePools: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	pendingRewards: TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	poolDeposit: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	poolId: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	poolIdByTokens: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	poolInfo: TypedContractMethod<[
		arg0: BigNumberish
	], [
		[
			string,
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			lpToken: string;
			allocPoint: bigint;
			startBlock: bigint;
			endBlock: bigint;
			lastRewardBlock: bigint;
			accRewardPerShare: bigint;
		}
	], "view">;
	poolLength: TypedContractMethod<[
	], [
		bigint
	], "view">;
	poolMint: TypedContractMethod<[
		from: AddressLike
	], [
		void
	], "nonpayable">;
	poolTokenImplementation: TypedContractMethod<[
	], [
		string
	], "view">;
	poolTokens: TypedContractMethod<[
		arg0: BigNumberish
	], [
		string
	], "view">;
	poolTransfer: TypedContractMethod<[
		_from: AddressLike,
		_to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	poolWithdraw: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	rewardPerBlock: TypedContractMethod<[
	], [
		bigint
	], "view">;
	rewardToken: TypedContractMethod<[
	], [
		string
	], "view">;
	rewardVault: TypedContractMethod<[
	], [
		string
	], "view">;
	set: TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	totalAllocPoint: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	updatePool: TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	updateRewardPerBlock: TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	userInfo: TypedContractMethod<[
		arg0: BigNumberish,
		arg1: AddressLike
	], [
		[
			bigint,
			bigint
		] & {
			amount: bigint;
			rewardDebt: bigint;
		}
	], "view">;
	withdraw: TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "WETH"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "add"): TypedContractMethod<[
		_lpToken: AddressLike,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "depositPermit"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish,
		_deadline: BigNumberish,
		_signature: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "getBlockRewardPerShare"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "getMultiplier"): TypedContractMethod<[
		_pid: BigNumberish,
		_fromBlock: BigNumberish,
		_toBlock: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "hasPool"): TypedContractMethod<[
		_lpToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "hasPoolToken"): TypedContractMethod<[
		_poolToken: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initializePool"): TypedContractMethod<[
		_owner: AddressLike,
		_WETH: AddressLike,
		_poolTokenImplementation: AddressLike,
		_rewardToken: AddressLike,
		_rewardPerBlock: BigNumberish,
		_rewardVault: AddressLike,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		addPool: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "massUpdatePools"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "pendingRewards"): TypedContractMethod<[
		_pid: BigNumberish,
		_user: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolDeposit"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolId"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolIdByTokens"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolInfo"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		[
			string,
			bigint,
			bigint,
			bigint,
			bigint,
			bigint
		] & {
			lpToken: string;
			allocPoint: bigint;
			startBlock: bigint;
			endBlock: bigint;
			lastRewardBlock: bigint;
			accRewardPerShare: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "poolLength"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "poolMint"): TypedContractMethod<[
		from: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolTokenImplementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "poolTokens"): TypedContractMethod<[
		arg0: BigNumberish
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "poolTransfer"): TypedContractMethod<[
		_from: AddressLike,
		_to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "poolWithdraw"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "rewardPerBlock"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "rewardVault"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "set"): TypedContractMethod<[
		_pid: BigNumberish,
		_allocPoint: BigNumberish,
		_startBlock: BigNumberish,
		_endBlock: BigNumberish,
		_withUpdate: boolean
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "totalAllocPoint"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updatePool"): TypedContractMethod<[
		_pid: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "updateRewardPerBlock"): TypedContractMethod<[
		newBlockReward: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "userInfo"): TypedContractMethod<[
		arg0: BigNumberish,
		arg1: AddressLike
	], [
		[
			bigint,
			bigint
		] & {
			amount: bigint;
			rewardDebt: bigint;
		}
	], "view">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		_pid: BigNumberish,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$5.InputTuple, DepositEvent$5.OutputTuple, DepositEvent$5.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$10.InputTuple, InitializedEvent$10.OutputTuple, InitializedEvent$10.OutputObject>;
	getEvent(key: "InitializedChef"): TypedContractEvent<InitializedChefEvent$1.InputTuple, InitializedChefEvent$1.OutputTuple, InitializedChefEvent$1.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
	getEvent(key: "SetPool"): TypedContractEvent<SetPoolEvent$1.InputTuple, SetPoolEvent$1.OutputTuple, SetPoolEvent$1.OutputObject>;
	getEvent(key: "SetPoolToken"): TypedContractEvent<SetPoolTokenEvent.InputTuple, SetPoolTokenEvent.OutputTuple, SetPoolTokenEvent.OutputObject>;
	getEvent(key: "SetReward"): TypedContractEvent<SetRewardEvent$1.InputTuple, SetRewardEvent$1.OutputTuple, SetRewardEvent$1.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$5.InputTuple, WithdrawEvent$5.OutputTuple, WithdrawEvent$5.OutputObject>;
	filters: {
		"Deposit(address,uint256,uint256)": TypedContractEvent<DepositEvent$5.InputTuple, DepositEvent$5.OutputTuple, DepositEvent$5.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$5.InputTuple, DepositEvent$5.OutputTuple, DepositEvent$5.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$10.InputTuple, InitializedEvent$10.OutputTuple, InitializedEvent$10.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$10.InputTuple, InitializedEvent$10.OutputTuple, InitializedEvent$10.OutputObject>;
		"InitializedChef(address,address,address)": TypedContractEvent<InitializedChefEvent$1.InputTuple, InitializedChefEvent$1.OutputTuple, InitializedChefEvent$1.OutputObject>;
		InitializedChef: TypedContractEvent<InitializedChefEvent$1.InputTuple, InitializedChefEvent$1.OutputTuple, InitializedChefEvent$1.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$3.InputTuple, OwnershipTransferredEvent$3.OutputTuple, OwnershipTransferredEvent$3.OutputObject>;
		"SetPool(uint256,address,uint256,uint256,uint256)": TypedContractEvent<SetPoolEvent$1.InputTuple, SetPoolEvent$1.OutputTuple, SetPoolEvent$1.OutputObject>;
		SetPool: TypedContractEvent<SetPoolEvent$1.InputTuple, SetPoolEvent$1.OutputTuple, SetPoolEvent$1.OutputObject>;
		"SetPoolToken(uint256,address)": TypedContractEvent<SetPoolTokenEvent.InputTuple, SetPoolTokenEvent.OutputTuple, SetPoolTokenEvent.OutputObject>;
		SetPoolToken: TypedContractEvent<SetPoolTokenEvent.InputTuple, SetPoolTokenEvent.OutputTuple, SetPoolTokenEvent.OutputObject>;
		"SetReward(uint256)": TypedContractEvent<SetRewardEvent$1.InputTuple, SetRewardEvent$1.OutputTuple, SetRewardEvent$1.OutputObject>;
		SetReward: TypedContractEvent<SetRewardEvent$1.InputTuple, SetRewardEvent$1.OutputTuple, SetRewardEvent$1.OutputObject>;
		"Withdraw(address,uint256,uint256)": TypedContractEvent<WithdrawEvent$5.InputTuple, WithdrawEvent$5.OutputTuple, WithdrawEvent$5.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$5.InputTuple, WithdrawEvent$5.OutputTuple, WithdrawEvent$5.OutputObject>;
	};
}
export interface RewardVaultInterface extends Interface {
	getFunction(nameOrSignature: "addSpender" | "initialize" | "owner" | "removeSpender" | "renounceOwnership" | "sendTo" | "spenders" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AddSpender" | "Initialized" | "OwnershipTransferred" | "RemoveSpender" | "Rewarded"): EventFragment;
	encodeFunctionData(functionFragment: "addSpender", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "removeSpender", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "sendTo", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "spenders", values?: undefined): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "addSpender", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "removeSpender", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sendTo", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "spenders", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace AddSpenderEvent {
	type InputTuple = [
		newSpender: AddressLike
	];
	type OutputTuple = [
		newSpender: string
	];
	interface OutputObject {
		newSpender: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$11 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$4 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RemoveSpenderEvent {
	type InputTuple = [
		oldSpender: AddressLike
	];
	type OutputTuple = [
		oldSpender: string
	];
	interface OutputObject {
		oldSpender: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace RewardedEvent {
	type InputTuple = [
		token: AddressLike,
		spender: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		token: string,
		spender: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		token: string;
		spender: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface RewardVault extends BaseContract {
	connect(runner?: ContractRunner | null): RewardVault;
	waitForDeployment(): Promise<this>;
	interface: RewardVaultInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	addSpender: TypedContractMethod<[
		_spender: AddressLike
	], [
		void
	], "nonpayable">;
	initialize: TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	removeSpender: TypedContractMethod<[
		_spender: AddressLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	sendTo: TypedContractMethod<[
		token: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	spenders: TypedContractMethod<[
	], [
		string[]
	], "view">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "addSpender"): TypedContractMethod<[
		_spender: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_initOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "removeSpender"): TypedContractMethod<[
		_spender: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "sendTo"): TypedContractMethod<[
		token: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "spenders"): TypedContractMethod<[
	], [
		string[]
	], "view">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "AddSpender"): TypedContractEvent<AddSpenderEvent.InputTuple, AddSpenderEvent.OutputTuple, AddSpenderEvent.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$11.InputTuple, InitializedEvent$11.OutputTuple, InitializedEvent$11.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
	getEvent(key: "RemoveSpender"): TypedContractEvent<RemoveSpenderEvent.InputTuple, RemoveSpenderEvent.OutputTuple, RemoveSpenderEvent.OutputObject>;
	getEvent(key: "Rewarded"): TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
	filters: {
		"AddSpender(address)": TypedContractEvent<AddSpenderEvent.InputTuple, AddSpenderEvent.OutputTuple, AddSpenderEvent.OutputObject>;
		AddSpender: TypedContractEvent<AddSpenderEvent.InputTuple, AddSpenderEvent.OutputTuple, AddSpenderEvent.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$11.InputTuple, InitializedEvent$11.OutputTuple, InitializedEvent$11.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$11.InputTuple, InitializedEvent$11.OutputTuple, InitializedEvent$11.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$4.InputTuple, OwnershipTransferredEvent$4.OutputTuple, OwnershipTransferredEvent$4.OutputObject>;
		"RemoveSpender(address)": TypedContractEvent<RemoveSpenderEvent.InputTuple, RemoveSpenderEvent.OutputTuple, RemoveSpenderEvent.OutputObject>;
		RemoveSpender: TypedContractEvent<RemoveSpenderEvent.InputTuple, RemoveSpenderEvent.OutputTuple, RemoveSpenderEvent.OutputObject>;
		"Rewarded(address,address,address,uint256)": TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
		Rewarded: TypedContractEvent<RewardedEvent.InputTuple, RewardedEvent.OutputTuple, RewardedEvent.OutputObject>;
	};
}
export interface InitializableProxyInterface extends Interface {
	getFunction(nameOrSignature: "admin" | "changeAdmin" | "implementation" | "initializeProxy" | "upgradeToAndCall"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "AdminChanged" | "Upgraded"): EventFragment;
	encodeFunctionData(functionFragment: "admin", values?: undefined): string;
	encodeFunctionData(functionFragment: "changeAdmin", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
	encodeFunctionData(functionFragment: "initializeProxy", values: [
		AddressLike,
		AddressLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "upgradeToAndCall", values: [
		AddressLike,
		BytesLike
	]): string;
	decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}
declare namespace AdminChangedEvent$1 {
	type InputTuple = [
		previousAdmin: AddressLike,
		newAdmin: AddressLike
	];
	type OutputTuple = [
		previousAdmin: string,
		newAdmin: string
	];
	interface OutputObject {
		previousAdmin: string;
		newAdmin: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace UpgradedEvent$1 {
	type InputTuple = [
		implementation: AddressLike
	];
	type OutputTuple = [
		implementation: string
	];
	interface OutputObject {
		implementation: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface InitializableProxy extends BaseContract {
	connect(runner?: ContractRunner | null): InitializableProxy;
	waitForDeployment(): Promise<this>;
	interface: InitializableProxyInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	admin: TypedContractMethod<[
	], [
		string
	], "view">;
	changeAdmin: TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	implementation: TypedContractMethod<[
	], [
		string
	], "view">;
	initializeProxy: TypedContractMethod<[
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	upgradeToAndCall: TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "admin"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[
		newAdmin: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "implementation"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "initializeProxy"): TypedContractMethod<[
		newAdmin: AddressLike,
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
		newImplementation: AddressLike,
		data: BytesLike
	], [
		void
	], "payable">;
	getEvent(key: "AdminChanged"): TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
	getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
	filters: {
		"AdminChanged(address,address)": TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
		AdminChanged: TypedContractEvent<AdminChangedEvent$1.InputTuple, AdminChangedEvent$1.OutputTuple, AdminChangedEvent$1.OutputObject>;
		"Upgraded(address)": TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
		Upgraded: TypedContractEvent<UpgradedEvent$1.InputTuple, UpgradedEvent$1.OutputTuple, UpgradedEvent$1.OutputObject>;
	};
}
export interface ERC20LockableInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "eip712Domain" | "isLocked" | "isLockedUntil" | "lock" | "lockPermit" | "lockedUntil" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "Initialized" | "Lock" | "LockedBy" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "isLocked", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "isLockedUntil", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "lock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "lockPermit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "lockedUntil", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isLockedUntil", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lockPermit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lockedUntil", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
declare namespace ApprovalEvent$14 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$5 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$12 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace LockEvent {
	type InputTuple = [
		owner: AddressLike,
		until: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		until: bigint
	];
	interface OutputObject {
		owner: string;
		until: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace LockedByEvent {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		until: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		until: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$14 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Lockable extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Lockable;
	waitForDeployment(): Promise<this>;
	interface: ERC20LockableInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	isLocked: TypedContractMethod<[
		owner: AddressLike
	], [
		boolean
	], "view">;
	isLockedUntil: TypedContractMethod<[
		owner: AddressLike,
		until: BigNumberish
	], [
		boolean
	], "view">;
	lock: TypedContractMethod<[
		until: BigNumberish
	], [
		void
	], "nonpayable">;
	lockPermit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish,
		deadline: BigNumberish,
		signature: BytesLike
	], [
		void
	], "nonpayable">;
	lockedUntil: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "isLocked"): TypedContractMethod<[
		owner: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "isLockedUntil"): TypedContractMethod<[
		owner: AddressLike,
		until: BigNumberish
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "lock"): TypedContractMethod<[
		until: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lockPermit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish,
		deadline: BigNumberish,
		signature: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lockedUntil"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$14.InputTuple, ApprovalEvent$14.OutputTuple, ApprovalEvent$14.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$5.InputTuple, EIP712DomainChangedEvent$5.OutputTuple, EIP712DomainChangedEvent$5.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$12.InputTuple, InitializedEvent$12.OutputTuple, InitializedEvent$12.OutputObject>;
	getEvent(key: "Lock"): TypedContractEvent<LockEvent.InputTuple, LockEvent.OutputTuple, LockEvent.OutputObject>;
	getEvent(key: "LockedBy"): TypedContractEvent<LockedByEvent.InputTuple, LockedByEvent.OutputTuple, LockedByEvent.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$14.InputTuple, TransferEvent$14.OutputTuple, TransferEvent$14.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$14.InputTuple, ApprovalEvent$14.OutputTuple, ApprovalEvent$14.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$14.InputTuple, ApprovalEvent$14.OutputTuple, ApprovalEvent$14.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$5.InputTuple, EIP712DomainChangedEvent$5.OutputTuple, EIP712DomainChangedEvent$5.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$5.InputTuple, EIP712DomainChangedEvent$5.OutputTuple, EIP712DomainChangedEvent$5.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$12.InputTuple, InitializedEvent$12.OutputTuple, InitializedEvent$12.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$12.InputTuple, InitializedEvent$12.OutputTuple, InitializedEvent$12.OutputObject>;
		"Lock(address,uint256)": TypedContractEvent<LockEvent.InputTuple, LockEvent.OutputTuple, LockEvent.OutputObject>;
		Lock: TypedContractEvent<LockEvent.InputTuple, LockEvent.OutputTuple, LockEvent.OutputObject>;
		"LockedBy(address,address,uint256)": TypedContractEvent<LockedByEvent.InputTuple, LockedByEvent.OutputTuple, LockedByEvent.OutputObject>;
		LockedBy: TypedContractEvent<LockedByEvent.InputTuple, LockedByEvent.OutputTuple, LockedByEvent.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$14.InputTuple, TransferEvent$14.OutputTuple, TransferEvent$14.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$14.InputTuple, TransferEvent$14.OutputTuple, TransferEvent$14.OutputObject>;
	};
}
export interface ERC20MockInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "decimals" | "eip712Domain" | "mint(address,uint256)" | "mint(uint256)" | "name" | "nonces" | "owner" | "permit" | "renounceOwnership" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "EIP712DomainChanged" | "OwnershipTransferred" | "Transfer"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "burn", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "burnFrom", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "mint(address,uint256)", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "mint(uint256)", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferOwnership", values: [
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint(address,uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint(uint256)", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
declare namespace ApprovalEvent$15 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$6 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace OwnershipTransferredEvent$5 {
	type InputTuple = [
		previousOwner: AddressLike,
		newOwner: AddressLike
	];
	type OutputTuple = [
		previousOwner: string,
		newOwner: string
	];
	interface OutputObject {
		previousOwner: string;
		newOwner: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$15 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC20Mock extends BaseContract {
	connect(runner?: ContractRunner | null): ERC20Mock;
	waitForDeployment(): Promise<this>;
	interface: ERC20MockInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	burn: TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	burnFrom: TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	"mint(address,uint256)": TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	"mint(uint256)": TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	owner: TypedContractMethod<[
	], [
		string
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	renounceOwnership: TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferOwnership: TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "burn"): TypedContractMethod<[
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
		account: AddressLike,
		value: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "mint(address,uint256)"): TypedContractMethod<[
		to: AddressLike,
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "mint(uint256)"): TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "owner"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[
		newOwner: AddressLike
	], [
		void
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$15.InputTuple, ApprovalEvent$15.OutputTuple, ApprovalEvent$15.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$6.InputTuple, EIP712DomainChangedEvent$6.OutputTuple, EIP712DomainChangedEvent$6.OutputObject>;
	getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$15.InputTuple, TransferEvent$15.OutputTuple, TransferEvent$15.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$15.InputTuple, ApprovalEvent$15.OutputTuple, ApprovalEvent$15.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$15.InputTuple, ApprovalEvent$15.OutputTuple, ApprovalEvent$15.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$6.InputTuple, EIP712DomainChangedEvent$6.OutputTuple, EIP712DomainChangedEvent$6.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$6.InputTuple, EIP712DomainChangedEvent$6.OutputTuple, EIP712DomainChangedEvent$6.OutputObject>;
		"OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
		OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent$5.InputTuple, OwnershipTransferredEvent$5.OutputTuple, OwnershipTransferredEvent$5.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$15.InputTuple, TransferEvent$15.OutputTuple, TransferEvent$15.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$15.InputTuple, TransferEvent$15.OutputTuple, TransferEvent$15.OutputObject>;
	};
}
export interface ERC4626PoolInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "deposit" | "eip712Domain" | "initialize" | "isLocked" | "isLockedUntil" | "isRewardNative" | "lock" | "lockPermit" | "lockedUntil" | "masterBurn" | "masterMint" | "masterPool" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "nonces" | "permit" | "pid" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "rewardToken" | "sharesOf" | "symbol" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "EIP712DomainChanged" | "Initialized" | "InitializedPool" | "Lock" | "LockedBy" | "Transfer" | "Withdraw"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "asset", values?: undefined): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "convertToAssets", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "convertToShares", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "initialize", values: [
		AddressLike,
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "isLocked", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "isLockedUntil", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "isRewardNative", values?: undefined): string;
	encodeFunctionData(functionFragment: "lock", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "lockPermit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "lockedUntil", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "masterBurn", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "masterMint", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "masterPool", values?: undefined): string;
	encodeFunctionData(functionFragment: "maxDeposit", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxMint", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxRedeem", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "maxWithdraw", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "mint", values: [
		BigNumberish,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "pid", values?: undefined): string;
	encodeFunctionData(functionFragment: "previewDeposit", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewMint", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewRedeem", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "previewWithdraw", values: [
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "redeem", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
	encodeFunctionData(functionFragment: "sharesOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish,
		AddressLike,
		AddressLike
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isLockedUntil", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isRewardNative", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lockPermit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "lockedUntil", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "masterBurn", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "masterMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "masterPool", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pid", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "sharesOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$16 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$6 {
	type InputTuple = [
		sender: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$7 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedEvent$13 {
	type InputTuple = [
		version: BigNumberish
	];
	type OutputTuple = [
		version: bigint
	];
	interface OutputObject {
		version: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace InitializedPoolEvent {
	type InputTuple = [
		masterPool: AddressLike,
		pid: BigNumberish,
		asset: AddressLike,
		rewardToken: AddressLike
	];
	type OutputTuple = [
		masterPool: string,
		pid: bigint,
		asset: string,
		rewardToken: string
	];
	interface OutputObject {
		masterPool: string;
		pid: bigint;
		asset: string;
		rewardToken: string;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace LockEvent$1 {
	type InputTuple = [
		owner: AddressLike,
		until: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		until: bigint
	];
	interface OutputObject {
		owner: string;
		until: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace LockedByEvent$1 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		until: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		until: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$16 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawEvent$6 {
	type InputTuple = [
		sender: AddressLike,
		receiver: AddressLike,
		owner: AddressLike,
		assets: BigNumberish,
		shares: BigNumberish
	];
	type OutputTuple = [
		sender: string,
		receiver: string,
		owner: string,
		assets: bigint,
		shares: bigint
	];
	interface OutputObject {
		sender: string;
		receiver: string;
		owner: string;
		assets: bigint;
		shares: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface ERC4626Pool extends BaseContract {
	connect(runner?: ContractRunner | null): ERC4626Pool;
	waitForDeployment(): Promise<this>;
	interface: ERC4626PoolInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	asset: TypedContractMethod<[
	], [
		string
	], "view">;
	balanceOf: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	convertToAssets: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	convertToShares: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	initialize: TypedContractMethod<[
		_masterPool: AddressLike,
		_pid: BigNumberish,
		_asset: AddressLike,
		_rewardToken: AddressLike
	], [
		void
	], "nonpayable">;
	isLocked: TypedContractMethod<[
		owner: AddressLike
	], [
		boolean
	], "view">;
	isLockedUntil: TypedContractMethod<[
		owner: AddressLike,
		until: BigNumberish
	], [
		boolean
	], "view">;
	isRewardNative: TypedContractMethod<[
	], [
		boolean
	], "view">;
	lock: TypedContractMethod<[
		until: BigNumberish
	], [
		void
	], "nonpayable">;
	lockPermit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish,
		deadline: BigNumberish,
		signature: BytesLike
	], [
		void
	], "nonpayable">;
	lockedUntil: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	masterBurn: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	masterMint: TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	masterPool: TypedContractMethod<[
	], [
		string
	], "view">;
	maxDeposit: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	maxMint: TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	maxRedeem: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	maxWithdraw: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	mint: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	pid: TypedContractMethod<[
	], [
		bigint
	], "view">;
	previewDeposit: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	previewMint: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewRedeem: TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	previewWithdraw: TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	redeem: TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	rewardToken: TypedContractMethod<[
	], [
		string
	], "view">;
	sharesOf: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalAssets: TypedContractMethod<[
	], [
		bigint
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "asset"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
		_masterPool: AddressLike,
		_pid: BigNumberish,
		_asset: AddressLike,
		_rewardToken: AddressLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "isLocked"): TypedContractMethod<[
		owner: AddressLike
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "isLockedUntil"): TypedContractMethod<[
		owner: AddressLike,
		until: BigNumberish
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "isRewardNative"): TypedContractMethod<[
	], [
		boolean
	], "view">;
	getFunction(nameOrSignature: "lock"): TypedContractMethod<[
		until: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lockPermit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		until: BigNumberish,
		deadline: BigNumberish,
		signature: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "lockedUntil"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "masterBurn"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "masterMint"): TypedContractMethod<[
		_user: AddressLike,
		_amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "masterPool"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[
		arg0: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "mint"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "pid"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[
		shares: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[
		assets: BigNumberish
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
		shares: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "sharesOf"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		assets: BigNumberish,
		receiver: AddressLike,
		owner: AddressLike
	], [
		bigint
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$16.InputTuple, ApprovalEvent$16.OutputTuple, ApprovalEvent$16.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$6.InputTuple, DepositEvent$6.OutputTuple, DepositEvent$6.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$7.InputTuple, EIP712DomainChangedEvent$7.OutputTuple, EIP712DomainChangedEvent$7.OutputObject>;
	getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent$13.InputTuple, InitializedEvent$13.OutputTuple, InitializedEvent$13.OutputObject>;
	getEvent(key: "InitializedPool"): TypedContractEvent<InitializedPoolEvent.InputTuple, InitializedPoolEvent.OutputTuple, InitializedPoolEvent.OutputObject>;
	getEvent(key: "Lock"): TypedContractEvent<LockEvent$1.InputTuple, LockEvent$1.OutputTuple, LockEvent$1.OutputObject>;
	getEvent(key: "LockedBy"): TypedContractEvent<LockedByEvent$1.InputTuple, LockedByEvent$1.OutputTuple, LockedByEvent$1.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$16.InputTuple, TransferEvent$16.OutputTuple, TransferEvent$16.OutputObject>;
	getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent$6.InputTuple, WithdrawEvent$6.OutputTuple, WithdrawEvent$6.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$16.InputTuple, ApprovalEvent$16.OutputTuple, ApprovalEvent$16.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$16.InputTuple, ApprovalEvent$16.OutputTuple, ApprovalEvent$16.OutputObject>;
		"Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent$6.InputTuple, DepositEvent$6.OutputTuple, DepositEvent$6.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$6.InputTuple, DepositEvent$6.OutputTuple, DepositEvent$6.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$7.InputTuple, EIP712DomainChangedEvent$7.OutputTuple, EIP712DomainChangedEvent$7.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$7.InputTuple, EIP712DomainChangedEvent$7.OutputTuple, EIP712DomainChangedEvent$7.OutputObject>;
		"Initialized(uint64)": TypedContractEvent<InitializedEvent$13.InputTuple, InitializedEvent$13.OutputTuple, InitializedEvent$13.OutputObject>;
		Initialized: TypedContractEvent<InitializedEvent$13.InputTuple, InitializedEvent$13.OutputTuple, InitializedEvent$13.OutputObject>;
		"InitializedPool(address,uint256,address,address)": TypedContractEvent<InitializedPoolEvent.InputTuple, InitializedPoolEvent.OutputTuple, InitializedPoolEvent.OutputObject>;
		InitializedPool: TypedContractEvent<InitializedPoolEvent.InputTuple, InitializedPoolEvent.OutputTuple, InitializedPoolEvent.OutputObject>;
		"Lock(address,uint256)": TypedContractEvent<LockEvent$1.InputTuple, LockEvent$1.OutputTuple, LockEvent$1.OutputObject>;
		Lock: TypedContractEvent<LockEvent$1.InputTuple, LockEvent$1.OutputTuple, LockEvent$1.OutputObject>;
		"LockedBy(address,address,uint256)": TypedContractEvent<LockedByEvent$1.InputTuple, LockedByEvent$1.OutputTuple, LockedByEvent$1.OutputObject>;
		LockedBy: TypedContractEvent<LockedByEvent$1.InputTuple, LockedByEvent$1.OutputTuple, LockedByEvent$1.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$16.InputTuple, TransferEvent$16.OutputTuple, TransferEvent$16.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$16.InputTuple, TransferEvent$16.OutputTuple, TransferEvent$16.OutputObject>;
		"Withdraw(address,address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent$6.InputTuple, WithdrawEvent$6.OutputTuple, WithdrawEvent$6.OutputObject>;
		Withdraw: TypedContractEvent<WithdrawEvent$6.InputTuple, WithdrawEvent$6.OutputTuple, WithdrawEvent$6.OutputObject>;
	};
}
export interface WETHInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "deposit" | "eip712Domain" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "EIP712DomainChanged" | "Transfer" | "Withdrawal"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$17 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$7 {
	type InputTuple = [
		dst: AddressLike,
		wad: BigNumberish
	];
	type OutputTuple = [
		dst: string,
		wad: bigint
	];
	interface OutputObject {
		dst: string;
		wad: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$8 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$17 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawalEvent$1 {
	type InputTuple = [
		src: AddressLike,
		wad: BigNumberish
	];
	type OutputTuple = [
		src: string,
		wad: bigint
	];
	interface OutputObject {
		src: string;
		wad: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface WETH extends BaseContract {
	connect(runner?: ContractRunner | null): WETH;
	waitForDeployment(): Promise<this>;
	interface: WETHInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
	], [
		void
	], "payable">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$17.InputTuple, ApprovalEvent$17.OutputTuple, ApprovalEvent$17.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$7.InputTuple, DepositEvent$7.OutputTuple, DepositEvent$7.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$8.InputTuple, EIP712DomainChangedEvent$8.OutputTuple, EIP712DomainChangedEvent$8.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$17.InputTuple, TransferEvent$17.OutputTuple, TransferEvent$17.OutputObject>;
	getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent$1.InputTuple, WithdrawalEvent$1.OutputTuple, WithdrawalEvent$1.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$17.InputTuple, ApprovalEvent$17.OutputTuple, ApprovalEvent$17.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$17.InputTuple, ApprovalEvent$17.OutputTuple, ApprovalEvent$17.OutputObject>;
		"Deposit(address,uint256)": TypedContractEvent<DepositEvent$7.InputTuple, DepositEvent$7.OutputTuple, DepositEvent$7.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$7.InputTuple, DepositEvent$7.OutputTuple, DepositEvent$7.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$8.InputTuple, EIP712DomainChangedEvent$8.OutputTuple, EIP712DomainChangedEvent$8.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$8.InputTuple, EIP712DomainChangedEvent$8.OutputTuple, EIP712DomainChangedEvent$8.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$17.InputTuple, TransferEvent$17.OutputTuple, TransferEvent$17.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$17.InputTuple, TransferEvent$17.OutputTuple, TransferEvent$17.OutputObject>;
		"Withdrawal(address,uint256)": TypedContractEvent<WithdrawalEvent$1.InputTuple, WithdrawalEvent$1.OutputTuple, WithdrawalEvent$1.OutputObject>;
		Withdrawal: TypedContractEvent<WithdrawalEvent$1.InputTuple, WithdrawalEvent$1.OutputTuple, WithdrawalEvent$1.OutputObject>;
	};
}
export interface WETHMockInterface extends Interface {
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "decimals" | "deposit" | "eip712Domain" | "name" | "nonces" | "permit" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "withdraw"): FunctionFragment;
	getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "EIP712DomainChanged" | "Transfer" | "Withdrawal"): EventFragment;
	encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
	encodeFunctionData(functionFragment: "allowance", values: [
		AddressLike,
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "approve", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "balanceOf", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
	encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
	encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
	encodeFunctionData(functionFragment: "name", values?: undefined): string;
	encodeFunctionData(functionFragment: "nonces", values: [
		AddressLike
	]): string;
	encodeFunctionData(functionFragment: "permit", values: [
		AddressLike,
		AddressLike,
		BigNumberish,
		BigNumberish,
		BigNumberish,
		BytesLike,
		BytesLike
	]): string;
	encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
	encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
	encodeFunctionData(functionFragment: "transfer", values: [
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "transferFrom", values: [
		AddressLike,
		AddressLike,
		BigNumberish
	]): string;
	encodeFunctionData(functionFragment: "withdraw", values: [
		BigNumberish
	]): string;
	decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
declare namespace ApprovalEvent$18 {
	type InputTuple = [
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		owner: string,
		spender: string,
		value: bigint
	];
	interface OutputObject {
		owner: string;
		spender: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace DepositEvent$8 {
	type InputTuple = [
		dst: AddressLike,
		wad: BigNumberish
	];
	type OutputTuple = [
		dst: string,
		wad: bigint
	];
	interface OutputObject {
		dst: string;
		wad: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace EIP712DomainChangedEvent$9 {
	type InputTuple = [
	];
	type OutputTuple = [
	];
	interface OutputObject {
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace TransferEvent$18 {
	type InputTuple = [
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	];
	type OutputTuple = [
		from: string,
		to: string,
		value: bigint
	];
	interface OutputObject {
		from: string;
		to: string;
		value: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
declare namespace WithdrawalEvent$2 {
	type InputTuple = [
		src: AddressLike,
		wad: BigNumberish
	];
	type OutputTuple = [
		src: string,
		wad: bigint
	];
	interface OutputObject {
		src: string;
		wad: bigint;
	}
	type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
	type Filter = TypedDeferredTopicFilter<Event>;
	type Log = TypedEventLog<Event>;
	type LogDescription = TypedLogDescription<Event>;
}
export interface WETHMock extends BaseContract {
	connect(runner?: ContractRunner | null): WETHMock;
	waitForDeployment(): Promise<this>;
	interface: WETHMockInterface;
	queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
	on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
	once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
	listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
	listeners(eventName?: string): Promise<Array<Listener>>;
	removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
	DOMAIN_SEPARATOR: TypedContractMethod<[
	], [
		string
	], "view">;
	allowance: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	approve: TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	balanceOf: TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	decimals: TypedContractMethod<[
	], [
		bigint
	], "view">;
	deposit: TypedContractMethod<[
	], [
		void
	], "payable">;
	eip712Domain: TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	name: TypedContractMethod<[
	], [
		string
	], "view">;
	nonces: TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	permit: TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	symbol: TypedContractMethod<[
	], [
		string
	], "view">;
	totalSupply: TypedContractMethod<[
	], [
		bigint
	], "view">;
	transfer: TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	transferFrom: TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	withdraw: TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
	getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "approve"): TypedContractMethod<[
		spender: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
		account: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "decimals"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
	], [
		void
	], "payable">;
	getFunction(nameOrSignature: "eip712Domain"): TypedContractMethod<[
	], [
		[
			string,
			string,
			string,
			bigint,
			string,
			string,
			bigint[]
		] & {
			fields: string;
			name: string;
			version: string;
			chainId: bigint;
			verifyingContract: string;
			salt: string;
			extensions: bigint[];
		}
	], "view">;
	getFunction(nameOrSignature: "name"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "nonces"): TypedContractMethod<[
		owner: AddressLike
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "permit"): TypedContractMethod<[
		owner: AddressLike,
		spender: AddressLike,
		value: BigNumberish,
		deadline: BigNumberish,
		v: BigNumberish,
		r: BytesLike,
		s: BytesLike
	], [
		void
	], "nonpayable">;
	getFunction(nameOrSignature: "symbol"): TypedContractMethod<[
	], [
		string
	], "view">;
	getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[
	], [
		bigint
	], "view">;
	getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
		from: AddressLike,
		to: AddressLike,
		value: BigNumberish
	], [
		boolean
	], "nonpayable">;
	getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
		amount: BigNumberish
	], [
		void
	], "nonpayable">;
	getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent$18.InputTuple, ApprovalEvent$18.OutputTuple, ApprovalEvent$18.OutputObject>;
	getEvent(key: "Deposit"): TypedContractEvent<DepositEvent$8.InputTuple, DepositEvent$8.OutputTuple, DepositEvent$8.OutputObject>;
	getEvent(key: "EIP712DomainChanged"): TypedContractEvent<EIP712DomainChangedEvent$9.InputTuple, EIP712DomainChangedEvent$9.OutputTuple, EIP712DomainChangedEvent$9.OutputObject>;
	getEvent(key: "Transfer"): TypedContractEvent<TransferEvent$18.InputTuple, TransferEvent$18.OutputTuple, TransferEvent$18.OutputObject>;
	getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent$2.InputTuple, WithdrawalEvent$2.OutputTuple, WithdrawalEvent$2.OutputObject>;
	filters: {
		"Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent$18.InputTuple, ApprovalEvent$18.OutputTuple, ApprovalEvent$18.OutputObject>;
		Approval: TypedContractEvent<ApprovalEvent$18.InputTuple, ApprovalEvent$18.OutputTuple, ApprovalEvent$18.OutputObject>;
		"Deposit(address,uint256)": TypedContractEvent<DepositEvent$8.InputTuple, DepositEvent$8.OutputTuple, DepositEvent$8.OutputObject>;
		Deposit: TypedContractEvent<DepositEvent$8.InputTuple, DepositEvent$8.OutputTuple, DepositEvent$8.OutputObject>;
		"EIP712DomainChanged()": TypedContractEvent<EIP712DomainChangedEvent$9.InputTuple, EIP712DomainChangedEvent$9.OutputTuple, EIP712DomainChangedEvent$9.OutputObject>;
		EIP712DomainChanged: TypedContractEvent<EIP712DomainChangedEvent$9.InputTuple, EIP712DomainChangedEvent$9.OutputTuple, EIP712DomainChangedEvent$9.OutputObject>;
		"Transfer(address,address,uint256)": TypedContractEvent<TransferEvent$18.InputTuple, TransferEvent$18.OutputTuple, TransferEvent$18.OutputObject>;
		Transfer: TypedContractEvent<TransferEvent$18.InputTuple, TransferEvent$18.OutputTuple, TransferEvent$18.OutputObject>;
		"Withdrawal(address,uint256)": TypedContractEvent<WithdrawalEvent$2.InputTuple, WithdrawalEvent$2.OutputTuple, WithdrawalEvent$2.OutputObject>;
		Withdrawal: TypedContractEvent<WithdrawalEvent$2.InputTuple, WithdrawalEvent$2.OutputTuple, WithdrawalEvent$2.OutputObject>;
	};
}
export declare class Ownable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): OwnableInterface;
	static connect(address: string, runner?: ContractRunner | null): Ownable;
}
export declare class IERC1363__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approveAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "approveAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes4";
					readonly name: "interfaceId";
					readonly type: "bytes4";
				}
			];
			readonly name: "supportsInterface";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "transferAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "transferFromAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFromAndCall";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC1363Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC1363;
}
export declare class IERC1967__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "previousAdmin";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "AdminChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "beacon";
					readonly type: "address";
				}
			];
			readonly name: "BeaconUpgraded";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "Upgraded";
			readonly type: "event";
		}
	];
	static createInterface(): IERC1967Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC1967;
}
declare class IERC4626__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "assetTokenAddress";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToShares";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "maxDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "maxMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "redeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "totalManagedAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC4626Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC4626;
}
export declare class IERC5267__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IERC5267Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC5267;
}
export declare class IERC1155Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC1155InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "idsLength";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "valuesLength";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC1155InvalidArrayLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidOperator";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC1155MissingApprovalForAll";
			readonly type: "error";
		}
	];
	static createInterface(): IERC1155ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC1155Errors;
}
export declare class IERC20Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		}
	];
	static createInterface(): IERC20ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Errors;
}
export declare class IERC721Errors__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC721IncorrectOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC721InsufficientApproval";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "operator";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidOperator";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC721InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "tokenId";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC721NonexistentToken";
			readonly type: "error";
		}
	];
	static createInterface(): IERC721ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC721Errors;
}
export type ClonesConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Clones__factory extends ContractFactory {
	constructor(...args: ClonesConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Clones & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Clones__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122039e9346b8eebd598e8a95fceb2ff6d264881156657ef34276dd2d09e1d933f1a64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "CloneArgumentsTooLong";
			readonly type: "error";
		}
	];
	static createInterface(): ClonesInterface;
	static connect(address: string, runner?: ContractRunner | null): Clones;
}
export type ERC1967UtilsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1967Utils__factory extends ContractFactory {
	constructor(...args: ERC1967UtilsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ERC1967Utils & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ERC1967Utils__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200157b0640511e14f579bbe52ffe7d75d1e4c8d72819a054c2c4b690db18e4b2564736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "admin";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidAdmin";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "beacon";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidBeacon";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidImplementation";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ERC1967NonPayable";
			readonly type: "error";
		}
	];
	static createInterface(): ERC1967UtilsInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC1967Utils;
}
export declare class Proxy__factory {
	static readonly abi: readonly [
		{
			readonly stateMutability: "payable";
			readonly type: "fallback";
		}
	];
	static createInterface(): ProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): Proxy$1;
}
export declare class IBeacon__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IBeaconInterface;
	static connect(address: string, runner?: ContractRunner | null): IBeacon;
}
export declare class ERC20__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20Interface;
	static connect(address: string, runner?: ContractRunner | null): ERC20;
}
export declare class IERC20__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC20;
}
export declare class ERC20Burnable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20BurnableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Burnable;
}
export declare class ERC20Permit__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20PermitInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Permit;
}
export declare class IERC20Metadata__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20MetadataInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Metadata;
}
export declare class IERC20Permit__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20PermitInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Permit;
}
export type SafeERC20ConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeERC20__factory extends ContractFactory {
	constructor(...args: SafeERC20ConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<SafeERC20 & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): SafeERC20__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206c464a7c65eaa243906b4e78cb62a8bd54bbb7be7f21bf08ec1bb71ec4d773d264736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentAllowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "requestedDecrease";
					readonly type: "uint256";
				}
			];
			readonly name: "SafeERC20FailedDecreaseAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "SafeERC20FailedOperation";
			readonly type: "error";
		}
	];
	static createInterface(): SafeERC20Interface;
	static connect(address: string, runner?: ContractRunner | null): SafeERC20;
}
export type AddressConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Address__factory extends ContractFactory {
	constructor(...args: AddressConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Address & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Address__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b431bded8d4310738b0960a7232e0993cb784585ff96633fea8a8e670972989264736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "target";
					readonly type: "address";
				}
			];
			readonly name: "AddressEmptyCode";
			readonly type: "error";
		}
	];
	static createInterface(): AddressInterface;
	static connect(address: string, runner?: ContractRunner | null): Address;
}
export type Create2ConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Create2__factory extends ContractFactory {
	constructor(...args: Create2ConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Create2 & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Create2__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220edca4b88d78b50110d0cb08db3e692a46532ac38b866efd3ef98f2059df230e064736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "Create2EmptyBytecode";
			readonly type: "error";
		}
	];
	static createInterface(): Create2Interface;
	static connect(address: string, runner?: ContractRunner | null): Create2;
}
export type ErrorsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Errors__factory extends ContractFactory {
	constructor(...args: ErrorsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Errors & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Errors__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122058c7529d153477542a4ea14888faf624240303d75499d31fa05ac048ae69ebe464736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "FailedCall";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "FailedDeployment";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "MissingPrecompile";
			readonly type: "error";
		}
	];
	static createInterface(): ErrorsInterface;
	static connect(address: string, runner?: ContractRunner | null): Errors;
}
export declare class Nonces__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): NoncesInterface;
	static connect(address: string, runner?: ContractRunner | null): Nonces;
}
export type ShortStringsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ShortStrings__factory extends ContractFactory {
	constructor(...args: ShortStringsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ShortStrings & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ShortStrings__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220157ddc474d7d1d724783f12f40ae36c5173b34bab84ac91022185a7e2600b59864736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		}
	];
	static createInterface(): ShortStringsInterface;
	static connect(address: string, runner?: ContractRunner | null): ShortStrings;
}
export type StringsConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Strings__factory extends ContractFactory {
	constructor(...args: StringsConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<Strings & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Strings__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122062ba1422d890f5918591de650c3dd67443c14c2bb6fd372105365d22b9cfb4d364736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "StringsInsufficientHexLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "StringsInvalidAddressFormat";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "StringsInvalidChar";
			readonly type: "error";
		}
	];
	static createInterface(): StringsInterface;
	static connect(address: string, runner?: ContractRunner | null): Strings;
}
export type ECDSAConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ECDSA__factory extends ContractFactory {
	constructor(...args: ECDSAConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ECDSA & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ECDSA__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122056dcadb6d15742cad6468dd89174169713f63d317d129733ad4716b164a0041364736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		}
	];
	static createInterface(): ECDSAInterface;
	static connect(address: string, runner?: ContractRunner | null): ECDSA;
}
export declare class EIP712__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): EIP712Interface;
	static connect(address: string, runner?: ContractRunner | null): EIP712;
}
export declare class IERC165__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes4";
					readonly name: "interfaceId";
					readonly type: "bytes4";
				}
			];
			readonly name: "supportsInterface";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): IERC165Interface;
	static connect(address: string, runner?: ContractRunner | null): IERC165;
}
export type SafeCastConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeCast__factory extends ContractFactory {
	constructor(...args: SafeCastConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<SafeCast & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): SafeCast__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200fb3822217d46040f28b88745db7ae5d02c50736452cf773f126fd79237f4cc764736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "bits";
					readonly type: "uint8";
				},
				{
					readonly internalType: "int256";
					readonly name: "value";
					readonly type: "int256";
				}
			];
			readonly name: "SafeCastOverflowedIntDowncast";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "int256";
					readonly name: "value";
					readonly type: "int256";
				}
			];
			readonly name: "SafeCastOverflowedIntToUint";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "bits";
					readonly type: "uint8";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "SafeCastOverflowedUintDowncast";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "SafeCastOverflowedUintToInt";
			readonly type: "error";
		}
	];
	static createInterface(): SafeCastInterface;
	static connect(address: string, runner?: ContractRunner | null): SafeCast;
}
export declare class OwnableUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): OwnableUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): OwnableUpgradeable;
}
export declare class Initializable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		}
	];
	static createInterface(): InitializableInterface;
	static connect(address: string, runner?: ContractRunner | null): Initializable;
}
export declare class ERC20Upgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20UpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Upgradeable;
}
export declare class ERC20PermitUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20PermitUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20PermitUpgradeable;
}
export declare class ERC4626Upgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxDeposit";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxMint";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxRedeem";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxWithdraw";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "SafeERC20FailedOperation";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToShares";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "maxDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "maxMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "redeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC4626UpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC4626Upgradeable;
}
export declare class ContextUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		}
	];
	static createInterface(): ContextUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ContextUpgradeable;
}
export declare class NoncesUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): NoncesUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): NoncesUpgradeable;
}
export declare class ReentrancyGuardUpgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ReentrancyGuardReentrantCall";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		}
	];
	static createInterface(): ReentrancyGuardUpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): ReentrancyGuardUpgradeable;
}
export declare class EIP712Upgradeable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		}
	];
	static createInterface(): EIP712UpgradeableInterface;
	static connect(address: string, runner?: ContractRunner | null): EIP712Upgradeable;
}
export type LockConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class Lock__factory extends ContractFactory {
	constructor(...args: LockConstructorParams);
	getDeployTransaction(_unlockTime: BigNumberish, overrides?: PayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(_unlockTime: BigNumberish, overrides?: PayableOverrides & {
		from?: string;
	}): Promise<Lock$1 & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): Lock__factory;
	static readonly bytecode = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea2646970667358221220a1577f546d6c0a9e25a86cb8fda39eeca35b736d118aa835021e9dfe21efadfb64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_unlockTime";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "payable";
			readonly type: "constructor";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "when";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdrawal";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address payable";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "unlockTime";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): LockInterface;
	static connect(address: string, runner?: ContractRunner | null): Lock$1;
}
export declare class IERC20Exp__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20ExpInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Exp;
}
export declare class IERC20Mintable__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC20MintableInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC20Mintable;
}
declare class IERC4626__factory$1 {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToShares";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "redeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "totalAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC4626Interface$1;
	static connect(address: string, runner?: ContractRunner | null): IERC4626$1;
}
export declare class IERC4626Pool__factory {
	static readonly abi: readonly [
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToShares";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_masterPool";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "masterBurn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "masterMint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxShares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "maxAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "redeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "totalAssets";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IERC4626PoolInterface;
	static connect(address: string, runner?: ContractRunner | null): IERC4626Pool;
}
export declare class IInitializableProxy__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "admin";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "changeAdmin";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "initializeProxy";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "upgradeToAndCall";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		}
	];
	static createInterface(): IInitializableProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): IInitializableProxy;
}
export declare class IMasterChef__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "WETH";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "add";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "getBlockRewardPerShare";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "rewardPerShare";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_fromBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_toBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "getMultiplier";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPool";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "massUpdatePools";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				}
			];
			readonly name: "pendingRewards";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pendingReward";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "pool";
					readonly type: "address";
				}
			];
			readonly name: "poolId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly name: "poolInfo";
			readonly outputs: readonly [
				{
					readonly components: readonly [
						{
							readonly internalType: "address";
							readonly name: "lpToken";
							readonly type: "address";
						},
						{
							readonly internalType: "uint256";
							readonly name: "allocPoint";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "startBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "endBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "lastRewardBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "accRewardPerShare";
							readonly type: "uint256";
						}
					];
					readonly internalType: "struct IMasterChef.PoolInfo";
					readonly name: "";
					readonly type: "tuple";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolLength";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardPerBlock";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardToken";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardVault";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "set";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAllocPoint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "updatePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "newBlockReward";
					readonly type: "uint256";
				}
			];
			readonly name: "updateRewardPerBlock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				}
			];
			readonly name: "userInfo";
			readonly outputs: readonly [
				{
					readonly components: readonly [
						{
							readonly internalType: "uint256";
							readonly name: "amount";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "rewardDebt";
							readonly type: "uint256";
						}
					];
					readonly internalType: "struct IMasterChef.UserInfo";
					readonly name: "";
					readonly type: "tuple";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IMasterChefInterface;
	static connect(address: string, runner?: ContractRunner | null): IMasterChef;
}
export declare class IMasterPool__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "WETH";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "add";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "_signature";
					readonly type: "bytes";
				}
			];
			readonly name: "depositPermit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "getBlockRewardPerShare";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "rewardPerShare";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_fromBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_toBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "getMultiplier";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPool";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_poolToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPoolToken";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_poolTokenImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initializePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "massUpdatePools";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				}
			];
			readonly name: "pendingRewards";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pendingReward";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "poolDeposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "pool";
					readonly type: "address";
				}
			];
			readonly name: "poolId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "poolIdByTokens";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly name: "poolInfo";
			readonly outputs: readonly [
				{
					readonly components: readonly [
						{
							readonly internalType: "address";
							readonly name: "lpToken";
							readonly type: "address";
						},
						{
							readonly internalType: "uint256";
							readonly name: "allocPoint";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "startBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "endBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "lastRewardBlock";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "accRewardPerShare";
							readonly type: "uint256";
						}
					];
					readonly internalType: "struct IMasterChef.PoolInfo";
					readonly name: "";
					readonly type: "tuple";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolLength";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_from";
					readonly type: "address";
				}
			];
			readonly name: "poolMint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolTokenImplementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				}
			];
			readonly name: "poolTokens";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "poolTransfer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "poolWithdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardPerBlock";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardToken";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardVault";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "set";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAllocPoint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "updatePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "newBlockReward";
					readonly type: "uint256";
				}
			];
			readonly name: "updateRewardPerBlock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				}
			];
			readonly name: "userInfo";
			readonly outputs: readonly [
				{
					readonly components: readonly [
						{
							readonly internalType: "uint256";
							readonly name: "amount";
							readonly type: "uint256";
						},
						{
							readonly internalType: "uint256";
							readonly name: "rewardDebt";
							readonly type: "uint256";
						}
					];
					readonly internalType: "struct IMasterChef.UserInfo";
					readonly name: "";
					readonly type: "tuple";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IMasterPoolInterface;
	static connect(address: string, runner?: ContractRunner | null): IMasterPool;
}
export declare class IRewardVault__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "sendTo";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IRewardVaultInterface;
	static connect(address: string, runner?: ContractRunner | null): IRewardVault;
}
export declare class IWETH__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): IWETHInterface;
	static connect(address: string, runner?: ContractRunner | null): IWETH;
}
export type SigLibConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class SigLib__factory extends ContractFactory {
	constructor(...args: SigLibConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<SigLib & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): SigLib__factory;
	static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122016cd4f9d373628b43b9eb2be47e18b7f198be8786875ae3d6004579b6f510a2764736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidSignatureLength";
			readonly type: "error";
		}
	];
	static createInterface(): SigLibInterface;
	static connect(address: string, runner?: ContractRunner | null): SigLib;
}
export type MasterChefConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class MasterChef__factory extends ContractFactory {
	constructor(...args: MasterChefConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<MasterChef & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): MasterChef__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50611ccf8061001f6000396000f3fe60806040526004361061014f5760003560e01c80637bafb029116100b6578063d18df53c1161006f578063d18df53c14610476578063d7c5edf214610496578063e2bbb158146104b6578063f2fde38b146104c9578063f7c618c1146104e9578063ff51a2721461050957600080fd5b80637bafb0291461036f5780638ae39cac1461038f5780638da5cb5b146103a557806393f1a40b146103e2578063a17804b114610436578063ad5c46481461045657600080fd5b8063441a3e7011610108578063441a3e70146102c557806351eb05a6146102e55780635da7c1691461030557806360e4c4ce14610325578063630b5ba114610345578063715018a61461035a57600080fd5b806301f8a976146101ac578063081e3eda146101cc5780631246dbf5146101f05780631526fe271461022057806317caf6f1146102775780633a2c67771461028d57600080fd5b366101a7576000546001600160a01b0316330361016857005b60005461017d906001600160a01b0316610536565b156101a557600080546001600160a01b03168152600460205260409020546101a590346105a4565b005b600080fd5b3480156101b857600080fd5b506101a56101c73660046119e6565b610620565b3480156101d857600080fd5b506005545b6040519081526020015b60405180910390f35b3480156101fc57600080fd5b5061021061020b366004611a1b565b610536565b60405190151581526020016101e7565b34801561022c57600080fd5b5061024061023b3660046119e6565b610663565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c0016101e7565b34801561028357600080fd5b506101dd60075481565b34801561029957600080fd5b506003546102ad906001600160a01b031681565b6040516001600160a01b0390911681526020016101e7565b3480156102d157600080fd5b506101a56102e0366004611a36565b6106b3565b3480156102f157600080fd5b506101a56103003660046119e6565b6106f7565b34801561031157600080fd5b506101dd610320366004611a68565b610734565b34801561033157600080fd5b506101a5610340366004611ab8565b610953565b34801561035157600080fd5b506101a5610abf565b34801561036657600080fd5b506101a5610ade565b34801561037b57600080fd5b506101dd61038a366004611af5565b610af2565b34801561039b57600080fd5b506101dd60025481565b3480156103b157600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166102ad565b3480156103ee57600080fd5b506104216103fd366004611b21565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101e7565b34801561044257600080fd5b506101a5610451366004611b4d565b610c80565b34801561046257600080fd5b506000546102ad906001600160a01b031681565b34801561048257600080fd5b506101dd610491366004611b21565b610d8a565b3480156104a257600080fd5b506101dd6104b13660046119e6565b610de8565b6101a56104c4366004611a36565b6105a4565b3480156104d557600080fd5b506101a56104e4366004611a1b565b610f4b565b3480156104f557600080fd5b506001546102ad906001600160a01b031681565b34801561051557600080fd5b506101dd610524366004611a1b565b60046020526000908152604090205481565b6001600160a01b03811660009081526004602052604081205415158061059e5750600554600114801561059e5750816001600160a01b0316600560008154811061058257610582611bcf565b60009182526020909120600690910201546001600160a01b0316145b92915050565b6105ac610f89565b60055482106105d65760405162461bcd60e51b81526004016105cd90611be5565b60405180910390fd5b6105e08233610fd3565b80156105f3576105f1823383611164565b505b61061c60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6106286113c4565b60028190556040518181527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a150565b6005818154811061067357600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b6106bb610f89565b60055482106106dc5760405162461bcd60e51b81526004016105cd90611be5565b6106e68233610fd3565b80156105f3576105f182338361141f565b60006005828154811061070c5761070c611bcf565b9060005260206000209060060201905061072582610de8565b60058201554360049091015550565b600061073e6113c4565b61074786610536565b156107865760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016105cd565b811561079457610794610abf565b50600554600780548691906000906107ad908490611c21565b90915550506001600160a01b038681166000818152600460209081526040808320869055805160c0810182528481528083018b81528183018b815260608084018c81526080850188815260a08601898152600580546001810182559a5295517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909a02998a0180546001600160a01b03191691909c1617909a5592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db188015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db287015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db386015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db4850155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db5909301929092558151898152908101889052908101869052909183917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a395945050505050565b61095b6113c4565b600554851061097c5760405162461bcd60e51b81526004016105cd90611be5565b801561098a5761098a610abf565b836005868154811061099e5761099e611bcf565b9060005260206000209060060201600101546007546109bd9190611c34565b6109c79190611c21565b60078190555083600586815481106109e1576109e1611bcf565b9060005260206000209060060201600101819055508260058681548110610a0a57610a0a611bcf565b9060005260206000209060060201600201819055508160058681548110610a3357610a33611bcf565b90600052602060002090600602016003018190555060058581548110610a5b57610a5b611bcf565b6000918252602091829020600690910201546040805187815292830186905282018490526001600160a01b03169086907fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c16319060600160405180910390a35050505050565b60055460005b8181101561061c57610ad6816106f7565b600101610ac5565b610ae66113c4565b610af060006114d9565b565b60008060058581548110610b0857610b08611bcf565b60009182526020918290206040805160c081018252600690930290910180546001600160a01b0316835260018101549383019390935260028084015491830191909152600383015460608301526004830154608083015260059092015460a082015290549091501580610b7d57506020810151155b80610b885750600754155b15610b97576000915050610c79565b828410610ba8576000915050610c79565b80604001518311610bbd576000915050610c79565b80604001518411158015610bd5575080606001518311155b15610bf1576040810151610be99084611c34565b915050610c79565b80604001518411158015610c085750806060015183115b15610c215780604001518160600151610be99190611c34565b806040015184118015610c38575080606001518311155b15610c4757610be98484611c34565b80606001518411158015610c5e5750806060015183115b15610c7357838160600151610be99190611c34565b60009150505b9392505050565b6000610c8a61154a565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610cb25750825b905060008267ffffffffffffffff166001148015610ccf5750303b155b905081158015610cdd575080155b15610cfb5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610d2557845460ff60401b1916600160401b1785555b610d358d8d8d8d8d8d8d8d611573565b8315610d7b57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b60008281526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a51000610dc086610de8565b8354610dcc9190611c47565b610dd69190611c5e565b610de09190611c34565b949350505050565b60008060058381548110610dfe57610dfe611bcf565b600091825260208083206040805160c08101825260069490940290910180546001600160a01b031680855260018201549385019390935260028101548483015260038101546060850152600480820154608086015260059091015460a0850181905291516370a0823160e01b8152309181019190915292945092916370a0823190602401602060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190611c80565b90506000610ed686856080015143610af2565b90508115801590610ee657508015155b15610f41576000600754856020015160025484610f039190611c47565b610f0d9190611c47565b610f179190611c5e565b905082610f298264e8d4a51000611c47565b610f339190611c5e565b610f3d9085611c21565b9350505b5090949350505050565b610f536113c4565b6001600160a01b038116610f7d57604051631e4fbdf760e01b8152600060048201526024016105cd565b610f86816114d9565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00805460011901610fcd57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058381548110610fe857610fe8611bcf565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091019150611022846106f7565b805415611154576000816001015464e8d4a510008460050154846000015461104a9190611c47565b6110549190611c5e565b61105e9190611c34565b90508015611152576003546001600160a01b03166110e1576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156110c457600080fd5b505af11580156110d8573d6000803e3d6000fd5b50505050611152565b60035460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561113957600080fd5b505af115801561114d573d6000803e3d6000fd5b505050505b505b61115e84846117f4565b50505050565b6000806005858154811061117a5761117a611bcf565b60009182526020808320888452600680835260408086206001600160a01b03808c1688529452852094549302018054909450811691161480156111bc57508334145b1561122d5760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561120f57600080fd5b505af1158015611223573d6000803e3d6000fd5b505050505061132c565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112999190611c80565b83549091506112b3906001600160a01b0316873088611868565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156112fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131e9190611c80565b6113289190611c34565b9450505b838160000160008282546113409190611c21565b90915550611350905086866117f4565b85856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158660405161138c91815260200190565b60405180910390a35091949350505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b336113f67f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610af05760405163118cdaa760e01b81523360048201526024016105cd565b6000806005858154811061143557611435611bcf565b60009182526020808320888452600680835260408086206001600160a01b038b168752909352918420805493909202019350918591839190611478908490611c34565b90915550508154611493906001600160a01b031686866118cf565b61149d86866117f4565b85856001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161138c91815260200190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0061059e565b61157c88611905565b611584611916565b600080546001600160a01b038981166001600160a01b03199283161790925560018054898416908316179055600287905560038054928716929091169190911790556040518581527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a1604080516001600160a01b038981168252888116602083015286168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a180156117ea576103e86007819055600580546001600160a01b038981166000818152600460209081526040808320869055805160c0810182528481528083018981528183018d815260608084018e81526080850188815260a0860189815260018d018e559c895294517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909c029b8c0180546001600160a01b03191691909b161790995591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18a0155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db289015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3880155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db487015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db590950194909455845186815293840189905293830187905292917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a3505b5050505050505050565b60006005838154811061180957611809611bcf565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091016005810154825491935064e8d4a51000916118539190611c47565b61185d9190611c5e565b600190910155505050565b6040516001600160a01b03848116602483015283811660448301526064820183905261115e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611926565b6040516001600160a01b0383811660248301526044820183905261190091859182169063a9059cbb9060640161189d565b505050565b61190d611997565b610f86816119bc565b61191e611997565b610af06119c4565b600080602060008451602086016000885af180611949576040513d6000823e3d81fd5b50506000513d9150811561196157806001141561196e565b6001600160a01b0384163b155b1561115e57604051635274afe760e01b81526001600160a01b03851660048201526024016105cd565b61199f6119cc565b610af057604051631afcd79f60e31b815260040160405180910390fd5b610f53611997565b61139e611997565b60006119d661154a565b54600160401b900460ff16919050565b6000602082840312156119f857600080fd5b5035919050565b80356001600160a01b0381168114611a1657600080fd5b919050565b600060208284031215611a2d57600080fd5b610c79826119ff565b60008060408385031215611a4957600080fd5b50508035926020909101359150565b80358015158114611a1657600080fd5b600080600080600060a08688031215611a8057600080fd5b611a89866119ff565b9450602086013593506040860135925060608601359150611aac60808701611a58565b90509295509295909350565b600080600080600060a08688031215611ad057600080fd5b85359450602086013593506040860135925060608601359150611aac60808701611a58565b600080600060608486031215611b0a57600080fd5b505081359360208301359350604090920135919050565b60008060408385031215611b3457600080fd5b82359150611b44602084016119ff565b90509250929050565b600080600080600080600080610100898b031215611b6a57600080fd5b611b73896119ff565b9750611b8160208a016119ff565b9650611b8f60408a016119ff565b955060608901359450611ba460808a016119ff565b935060a0890135925060c08901359150611bc060e08a01611a58565b90509295985092959890939650565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561059e5761059e611c0b565b8181038181111561059e5761059e611c0b565b808202811582820484141761059e5761059e611c0b565b600082611c7b57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611c9257600080fd5b505191905056fea26469706673582212209fbf19ae1bb324acf04b91a08112db64bbc01563f6de180caba02c3f5373c9df64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ReentrancyGuardReentrantCall";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "SafeERC20FailedOperation";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "WETH";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "rewardToken";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "rewardVault";
					readonly type: "address";
				}
			];
			readonly name: "InitializedChef";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "lpToken";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "newAllocPoint";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "startBlock";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "endBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "SetPool";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "newReward";
					readonly type: "uint256";
				}
			];
			readonly name: "SetReward";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "WETH";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IWETH";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "add";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "getBlockRewardPerShare";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_fromBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_toBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "getMultiplier";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPool";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "massUpdatePools";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				}
			];
			readonly name: "pendingRewards";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "poolId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "poolInfo";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC20";
					readonly name: "lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "lastRewardBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "accRewardPerShare";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolLength";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardPerBlock";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardToken";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC20Mintable";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardVault";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IRewardVault";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "set";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAllocPoint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "updatePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "newBlockReward";
					readonly type: "uint256";
				}
			];
			readonly name: "updateRewardPerBlock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "userInfo";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "rewardDebt";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): MasterChefInterface;
	static connect(address: string, runner?: ContractRunner | null): MasterChef;
}
export type MasterPoolConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class MasterPool__factory extends ContractFactory {
	constructor(...args: MasterPoolConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<MasterPool & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): MasterPool__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50612a5d8061001f6000396000f3fe6080604052600436106101fd5760003560e01c80637bafb0291161010d578063cd09525d116100a0578063dced1a5a1161006f578063dced1a5a14610691578063e2bbb158146106c7578063f2fde38b146106da578063f7c618c1146106fa578063ff51a2721461071a57600080fd5b8063cd09525d14610611578063d18df53c14610631578063d7c5edf214610651578063db2aa1271461067157600080fd5b80639b27e3dd116100dc5780639b27e3dd14610584578063a17804b1146105a4578063aa020654146105c4578063ad5c4648146105f157600080fd5b80637bafb029146104bd5780638ae39cac146104dd5780638da5cb5b146104f357806393f1a40b1461053057600080fd5b8063441a3e701161019057806360e4c4ce1161015f57806360e4c4ce14610433578063630b5ba11461045357806369ff74f114610468578063715018a61461048857806377ba79501461049d57600080fd5b8063441a3e70146103b35780634fb4bb8c146103d357806351eb05a6146103f35780635da7c1691461041357600080fd5b806317caf6f1116101cc57806317caf6f114610325578063192e30f81461033b5780631b6fabce1461035b5780633a2c67771461037b57600080fd5b806301f8a9761461025a578063081e3eda1461027a5780631246dbf51461029e5780631526fe27146102ce57600080fd5b36610255576000546001600160a01b0316330361021657005b60005461022b906001600160a01b0316610747565b1561025357600080546001600160a01b031681526004602052604090205461025390346107b5565b005b600080fd5b34801561026657600080fd5b5061025361027536600461256c565b610831565b34801561028657600080fd5b506005545b6040519081526020015b60405180910390f35b3480156102aa57600080fd5b506102be6102b93660046125a1565b610747565b6040519015158152602001610295565b3480156102da57600080fd5b506102ee6102e936600461256c565b610874565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001610295565b34801561033157600080fd5b5061028b60075481565b34801561034757600080fd5b506102536103563660046125bc565b6108c4565b34801561036757600080fd5b50610253610376366004612609565b610a22565b34801561038757600080fd5b5060035461039b906001600160a01b031681565b6040516001600160a01b039091168152602001610295565b3480156103bf57600080fd5b506102536103ce36600461269c565b610b48565b3480156103df57600080fd5b506102be6103ee3660046125a1565b610b8c565b3480156103ff57600080fd5b5061025361040e36600461256c565b610bea565b34801561041f57600080fd5b5061028b61042e3660046126be565b610c27565b34801561043f57600080fd5b5061025361044e36600461270e565b610d83565b34801561045f57600080fd5b50610253610eef565b34801561047457600080fd5b5060085461039b906001600160a01b031681565b34801561049457600080fd5b50610253610f0e565b3480156104a957600080fd5b506102536104b836600461274b565b610f22565b3480156104c957600080fd5b5061028b6104d8366004612775565b610f79565b3480156104e957600080fd5b5061028b60025481565b3480156104ff57600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661039b565b34801561053c57600080fd5b5061056f61054b3660046127a1565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610295565b34801561059057600080fd5b5061025361059f3660046127e3565b611107565b3480156105b057600080fd5b506102536105bf3660046128b9565b6111d7565b3480156105d057600080fd5b5061028b6105df3660046125a1565b600a6020526000908152604090205481565b3480156105fd57600080fd5b5060005461039b906001600160a01b031681565b34801561061d57600080fd5b5061025361062c3660046125a1565b6112e1565b34801561063d57600080fd5b5061028b61064c3660046127a1565b61136c565b34801561065d57600080fd5b5061028b61066c36600461256c565b6113ca565b34801561067d57600080fd5b5061025361068c36600461274b565b61152d565b34801561069d57600080fd5b5061039b6106ac36600461256c565b6009602052600090815260409020546001600160a01b031681565b6102536106d536600461269c565b6107b5565b3480156106e657600080fd5b506102536106f53660046125a1565b61157d565b34801561070657600080fd5b5060015461039b906001600160a01b031681565b34801561072657600080fd5b5061028b6107353660046125a1565b60046020526000908152604090205481565b6001600160a01b0381166000908152600460205260408120541515806107af575060055460011480156107af5750816001600160a01b031660056000815481106107935761079361293b565b60009182526020909120600690910201546001600160a01b0316145b92915050565b6107bd6115bb565b60055482106107e75760405162461bcd60e51b81526004016107de90612951565b60405180910390fd5b6107f18233611605565b801561080457610802823383611790565b505b61082d60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b610839611843565b60028190556040518181527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a150565b6005818154811061088457600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b6108cd33610b8c565b6108e95760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020908152604080832054808452600683528184206001600160a01b03888116808752919094528285209387168552919093209015801590610934575081548411155b156109a2578382600001600082825461094d91906129af565b9091555061095d9050838761189e565b82866001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161099991815260200190565b60405180910390a35b6001600160a01b03851615610a1a57838160000160008282546109c591906129c2565b909155506109d59050838661189e565b82856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a1586604051610a1191815260200190565b60405180910390a35b505050505050565b6000610a2c611912565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610a545750825b905060008267ffffffffffffffff166001148015610a715750303b155b905081158015610a7f575080155b15610a9d5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610ac757845460ff60401b1916600160401b1785555b610ad78e8e8d8d8d8d8d8d61193b565b600880546001600160a01b0319166001600160a01b038e161790558315610b3857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050505050505050565b610b506115bb565b6005548210610b715760405162461bcd60e51b81526004016107de90612951565b610b7b8233611605565b801561080457610802823383611bbc565b6001600160a01b0381166000908152600a60205260408120541515806107af5750506000805260096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b546001600160a01b0391821691161490565b600060058281548110610bff57610bff61293b565b90600052602060002090600602019050610c18826113ca565b60058201554360049091015550565b6000610c31611843565b610c3e8686868686611c12565b6008546040516bffffffffffffffffffffffff1960608a901b166020820152919250600091610c8f916001600160a01b03169060340160405160208183030381529060405280519060200120611e31565b6001546040516306b0729b60e31b8152306004820152602481018590526001600160a01b038a81166044830152918216606482015291925082919082169063358394d890608401600060405180830381600087803b158015610cf057600080fd5b505af1158015610d04573d6000803e3d6000fd5b505050600084815260096020908152604080832080546001600160a01b0319166001600160a01b03878116919091179091558616808452600a835292819020879055519182528592507f274ed179d8e71c36d126f361d97e5aa18d1ffc307ec6a33f2809e4a861ea89d3910160405180910390a2505095945050505050565b610d8b611843565b6005548510610dac5760405162461bcd60e51b81526004016107de90612951565b8015610dba57610dba610eef565b8360058681548110610dce57610dce61293b565b906000526020600020906006020160010154600754610ded91906129af565b610df791906129c2565b6007819055508360058681548110610e1157610e1161293b565b9060005260206000209060060201600101819055508260058681548110610e3a57610e3a61293b565b9060005260206000209060060201600201819055508160058681548110610e6357610e6361293b565b90600052602060002090600602016003018190555060058581548110610e8b57610e8b61293b565b6000918252602091829020600690910201546040805187815292830186905282018490526001600160a01b03169086907fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c16319060600160405180910390a35050505050565b60055460005b8181101561082d57610f0681610bea565b600101610ef5565b610f16611843565b610f206000611e3f565b565b610f2b33610b8c565b610f475760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020526040902054610f618184611605565b8115610f7457610f72818484611790565b505b505050565b60008060058581548110610f8f57610f8f61293b565b60009182526020918290206040805160c081018252600690930290910180546001600160a01b0316835260018101549383019390935260028084015491830191909152600383015460608301526004830154608083015260059092015460a08201529054909150158061100457506020810151155b8061100f5750600754155b1561101e576000915050611100565b82841061102f576000915050611100565b80604001518311611044576000915050611100565b8060400151841115801561105c575080606001518311155b1561107857604081015161107090846129af565b915050611100565b8060400151841115801561108f5750806060015183115b156110a8578060400151816060015161107091906129af565b8060400151841180156110bf575080606001518311155b156110ce5761107084846129af565b806060015184111580156110e55750806060015183115b156110fa5783816060015161107091906129af565b60009150505b9392505050565b600080600061111584611eb0565b9250925092506005878154811061112e5761112e61293b565b600091825260209091206006909102015460405163d505accf60e01b8152336004820152306024820152604481018890526064810187905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b1580156111ac57600080fd5b505af11580156111c0573d6000803e3d6000fd5b505050506111ce87876107b5565b50505050505050565b60006111e1611912565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156112095750825b905060008267ffffffffffffffff1660011480156112265750303b155b905081158015611234575080155b156112525760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561127c57845460ff60401b1916600160401b1785555b61128c8d8d8d8d8d8d8d8d61193b565b83156112d257845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b6112ea33610b8c565b6113065760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020526040902054600154600580546001600160a01b0390921691839081106113395761133961293b565b60009182526020909120600690910201546001600160a01b0316146113625761082d8183611605565b61082d8183611efa565b60008281526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a510006113a2866113ca565b83546113ae91906129d5565b6113b891906129ec565b6113c291906129af565b949350505050565b600080600583815481106113e0576113e061293b565b600091825260208083206040805160c08101825260069490940290910180546001600160a01b031680855260018201549385019390935260028101548483015260038101546060850152600480820154608086015260059091015460a0850181905291516370a0823160e01b8152309181019190915292945092916370a0823190602401602060405180830381865afa158015611481573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a59190612a0e565b905060006114b886856080015143610f79565b905081158015906114c857508015155b156115235760006007548560200151600254846114e591906129d5565b6114ef91906129d5565b6114f991906129ec565b90508261150b8264e8d4a510006129d5565b61151591906129ec565b61151f90856129c2565b9350505b5090949350505050565b61153633610b8c565b6115525760405162461bcd60e51b81526004016107de90612977565b336000908152600a602052604090205461156c8184611605565b8115610f7457610f72818484611bbc565b611585611843565b6001600160a01b0381166115af57604051631e4fbdf760e01b8152600060048201526024016107de565b6115b881611e3f565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016115ff57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b60006005838154811061161a5761161a61293b565b60009182526020808320868452600680835260408086206001600160a01b0389168752909352919093209102909101915061165484610bea565b805415611786576000816001015464e8d4a510008460050154846000015461167c91906129d5565b61168691906129ec565b61169091906129af565b90508015611784576003546001600160a01b0316611713576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156116f657600080fd5b505af115801561170a573d6000803e3d6000fd5b50505050611784565b60035460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561176b57600080fd5b505af115801561177f573d6000803e3d6000fd5b505050505b505b610f72848461189e565b60008061179e858585612068565b60008681526009602052604090819020549051631b96b2f960e01b81526001600160a01b03878116600483015260248201849052929350911690631b96b2f9906044015b600060405180830381600087803b1580156117fc57600080fd5b505af1158015611810573d6000803e3d6000fd5b5092979650505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b336118757f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610f205760405163118cdaa760e01b81523360048201526024016107de565b6000600583815481106118b3576118b361293b565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091016005810154825491935064e8d4a51000916118fd91906129d5565b61190791906129ec565b600190910155505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006107af565b611944886122a2565b61194c6122b3565b600080546001600160a01b038981166001600160a01b03199283161790925560018054898416908316179055600287905560038054928716929091169190911790556040518581527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a1604080516001600160a01b038981168252888116602083015286168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a18015611bb2576103e86007819055600580546001600160a01b038981166000818152600460209081526040808320869055805160c0810182528481528083018981528183018d815260608084018e81526080850188815260a0860189815260018d018e559c895294517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909c029b8c0180546001600160a01b03191691909b161790995591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18a0155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db289015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3880155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db487015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db590950194909455845186815293840189905293830187905292917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a3505b5050505050505050565b600080611bca8585856122c3565b60008681526009602052604090819020549051639fc8ae6d60e01b81526001600160a01b03878116600483015260248201849052929350911690639fc8ae6d906044016117e2565b6000611c1c611843565b611c2586610747565b15611c645760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016107de565b8115611c7257611c72610eef565b5060055460078054869190600090611c8b9084906129c2565b90915550506001600160a01b038681166000818152600460209081526040808320869055805160c0810182528481528083018b81528183018b815260608084018c81526080850188815260a08601898152600580546001810182559a5295517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909a02998a0180546001600160a01b03191691909c1617909a5592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db188015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db287015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db386015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db4850155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db5909301929092558151898152908101889052908101869052909183917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a395945050505050565b60006111008383600061237d565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60008060008351604103611eda5750505060208101516040820151606083015160001a9190611ef3565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b600060058381548110611f0f57611f0f61293b565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091019150611f4984610bea565b805415611786576000816001015464e8d4a5100084600501548460000154611f7191906129d5565b611f7b91906129ec565b611f8591906129af565b905080156117845780826000016000828254611fa191906129c2565b909155505060008581526009602052604090819020549051631b96b2f960e01b81526001600160a01b0386811660048301526024820184905290911690631b96b2f990604401600060405180830381600087803b15801561200157600080fd5b505af1158015612015573d6000803e3d6000fd5b5050505084846001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158360405161205591815260200190565b60405180910390a350610f72848461189e565b6000806005858154811061207e5761207e61293b565b60009182526020808320888452600680835260408086206001600160a01b03808c1688529452852094549302018054909450811691161480156120c057508334145b156121315760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561211357600080fd5b505af1158015612127573d6000803e3d6000fd5b5050505050612230565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015612179573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219d9190612a0e565b83549091506121b7906001600160a01b0316873088612414565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156121fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122229190612a0e565b61222c91906129af565b9450505b8381600001600082825461224491906129c2565b909155506122549050868661189e565b85856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158660405161229091815260200190565b60405180910390a35091949350505050565b6122aa61247b565b6115b8816124a0565b6122bb61247b565b610f206124a8565b600080600585815481106122d9576122d961293b565b60009182526020808320888452600680835260408086206001600160a01b038b16875290935291842080549390920201935091859183919061231c9084906129af565b90915550508154612337906001600160a01b031686866124b0565b612341868661189e565b85856001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161229091815260200190565b6000814710156123a95760405163cf47918160e01b8152476004820152602481018390526044016107de565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b0381166111005760405163b06ebf3d60e01b815260040160405180910390fd5b6040516001600160a01b038481166024830152838116604483015260648201839052610f729186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506124e1565b612483612552565b610f2057604051631afcd79f60e31b815260040160405180910390fd5b61158561247b565b61181d61247b565b6040516001600160a01b03838116602483015260448201839052610f7491859182169063a9059cbb90606401612449565b600080602060008451602086016000885af180612504576040513d6000823e3d81fd5b50506000513d9150811561251c578060011415612529565b6001600160a01b0384163b155b15610f7257604051635274afe760e01b81526001600160a01b03851660048201526024016107de565b600061255c611912565b54600160401b900460ff16919050565b60006020828403121561257e57600080fd5b5035919050565b80356001600160a01b038116811461259c57600080fd5b919050565b6000602082840312156125b357600080fd5b61110082612585565b6000806000606084860312156125d157600080fd5b6125da84612585565b92506125e860208501612585565b929592945050506040919091013590565b8035801515811461259c57600080fd5b60008060008060008060008060006101208a8c03121561262857600080fd5b6126318a612585565b985061263f60208b01612585565b975061264d60408b01612585565b965061265b60608b01612585565b955060808a0135945061267060a08b01612585565b935060c08a0135925060e08a0135915061268d6101008b016125f9565b90509295985092959850929598565b600080604083850312156126af57600080fd5b50508035926020909101359150565b600080600080600060a086880312156126d657600080fd5b6126df86612585565b9450602086013593506040860135925060608601359150612702608087016125f9565b90509295509295909350565b600080600080600060a0868803121561272657600080fd5b85359450602086013593506040860135925060608601359150612702608087016125f9565b6000806040838503121561275e57600080fd5b61276783612585565b946020939093013593505050565b60008060006060848603121561278a57600080fd5b505081359360208301359350604090920135919050565b600080604083850312156127b457600080fd5b823591506127c460208401612585565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156127f957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561282557600080fd5b8501601f8101871361283657600080fd5b803567ffffffffffffffff811115612850576128506127cd565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561287f5761287f6127cd565b60405281815282820160200189101561289757600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600080600080600080600080610100898b0312156128d657600080fd5b6128df89612585565b97506128ed60208a01612585565b96506128fb60408a01612585565b95506060890135945061291060808a01612585565b935060a0890135925060c0890135915061292c60e08a016125f9565b90509295985092959890939650565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b6020808252600890820152671393d517d413d3d360c21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156107af576107af612999565b808201808211156107af576107af612999565b80820281158282048414176107af576107af612999565b600082612a0957634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215612a2057600080fd5b505191905056fea26469706673582212202dc9e330af8b854869101c8cac9a0f7f94aaa72c9518db3fbb1f27e2b21c16fc64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "FailedDeployment";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ReentrancyGuardReentrantCall";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "SafeERC20FailedOperation";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "WETH";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "rewardToken";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "rewardVault";
					readonly type: "address";
				}
			];
			readonly name: "InitializedChef";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "lpToken";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "newAllocPoint";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "startBlock";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "endBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "SetPool";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "poolToken";
					readonly type: "address";
				}
			];
			readonly name: "SetPoolToken";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "newReward";
					readonly type: "uint256";
				}
			];
			readonly name: "SetReward";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "user";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "WETH";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IWETH";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "add";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "_signature";
					readonly type: "bytes";
				}
			];
			readonly name: "depositPermit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "getBlockRewardPerShare";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_fromBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_toBlock";
					readonly type: "uint256";
				}
			];
			readonly name: "getMultiplier";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_lpToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPool";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_poolToken";
					readonly type: "address";
				}
			];
			readonly name: "hasPoolToken";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_WETH";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_poolTokenImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_rewardPerBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardVault";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "addPool";
					readonly type: "bool";
				}
			];
			readonly name: "initializePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "massUpdatePools";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				}
			];
			readonly name: "pendingRewards";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "poolDeposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "poolId";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "poolIdByTokens";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "poolInfo";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC20";
					readonly name: "lpToken";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "lastRewardBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "accRewardPerShare";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolLength";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				}
			];
			readonly name: "poolMint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "poolTokenImplementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly name: "poolTokens";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC4626Pool";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "poolTransfer";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "poolWithdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardPerBlock";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardToken";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC20Mintable";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardVault";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IRewardVault";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_allocPoint";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_startBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_endBlock";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bool";
					readonly name: "_withUpdate";
					readonly type: "bool";
				}
			];
			readonly name: "set";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAllocPoint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				}
			];
			readonly name: "updatePool";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "newBlockReward";
					readonly type: "uint256";
				}
			];
			readonly name: "updateRewardPerBlock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "userInfo";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "rewardDebt";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): MasterPoolInterface;
	static connect(address: string, runner?: ContractRunner | null): MasterPool;
}
export type RewardVaultConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class RewardVault__factory extends ContractFactory {
	constructor(...args: RewardVaultConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<RewardVault & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): RewardVault__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b50610a5b8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063ae6393291161005b578063ae63932914610102578063c4d66de814610115578063e7e31e7a14610128578063f2fde38b1461013b57600080fd5b8063124180381461008d578063715018a6146100ab5780638ce5877c146100b55780638da5cb5b146100c8575b600080fd5b61009561014e565b6040516100a29190610919565b60405180910390f35b6100b361015f565b005b6100b36100c336600461097a565b610173565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020016100a2565b6100b3610110366004610997565b610215565b6100b361012336600461097a565b6102ce565b6100b361013636600461097a565b610424565b6100b361014936600461097a565b6104bd565b606061015a60006104fb565b905090565b61016761050f565b610171600061056a565b565b61017b61050f565b6101866000826105db565b6101c95760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064015b60405180910390fd5b6101d4600082610602565b506040516001600160a01b03821681527f508e01dc09a24291350cfc3ad6e6ee056cfa6df6780f82e57e60190be9f35524906020015b60405180910390a150565b6102206000336105db565b61025e5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064016101c0565b6102726001600160a01b0384168383610617565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa209447764afbca4d7c43c9962941f114f3465f7fde32167c76661eb75b3ef77846040516102c191815260200190565b60405180910390a4505050565b60006102d861066e565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156103005750825b905060008267ffffffffffffffff16600114801561031d5750303b155b90508115801561032b575080155b156103495760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561037357845460ff60401b1916600160401b1785555b6001600160a01b038616610385573395505b61038e86610697565b6103996000876106a8565b506040516001600160a01b03871681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200160405180910390a1831561041c57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61042c61050f565b6104376000826105db565b156104785760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a822a72222a960791b60448201526064016101c0565b6104836000826106a8565b506040516001600160a01b03821681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200161020a565b6104c561050f565b6001600160a01b0381166104ef57604051631e4fbdf760e01b8152600060048201526024016101c0565b6104f88161056a565b50565b60606000610508836106bd565b9392505050565b336105417f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b0316146101715760405163118cdaa760e01b81523360048201526024016101c0565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b60006105f9836001600160a01b038416610719565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261066990849061080c565b505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006105fc565b61069f610883565b6104f8816108a8565b60006105f9836001600160a01b0384166108b0565b60608160000180548060200260200160405190810160405280929190818152602001828054801561070d57602002820191906000526020600020905b8154815260200190600101908083116106f9575b50505050509050919050565b6000818152600183016020526040812054801561080257600061073d6001836109d8565b8554909150600090610751906001906109d8565b90508082146107b6576000866000018281548110610771576107716109f9565b9060005260206000200154905080876000018481548110610794576107946109f9565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806107c7576107c7610a0f565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105fc565b60009150506105fc565b600080602060008451602086016000885af18061082f576040513d6000823e3d81fd5b50506000513d91508115610847578060011415610854565b6001600160a01b0384163b155b1561087d57604051635274afe760e01b81526001600160a01b03851660048201526024016101c0565b50505050565b61088b6108ff565b61017157604051631afcd79f60e31b815260040160405180910390fd5b6104c5610883565b60008181526001830160205260408120546108f7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105fc565b5060006105fc565b600061090961066e565b54600160401b900460ff16919050565b602080825282518282018190526000918401906040840190835b8181101561095a5783516001600160a01b0316835260209384019390920191600101610933565b509095945050505050565b6001600160a01b03811681146104f857600080fd5b60006020828403121561098c57600080fd5b813561050881610965565b6000806000606084860312156109ac57600080fd5b83356109b781610965565b925060208401356109c781610965565b929592945050506040919091013590565b818103818111156105fc57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212200941bed44abebd8250e1934e3201e4334cd94326c856ffa662509897db7ddd5d64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				}
			];
			readonly name: "SafeERC20FailedOperation";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newSpender";
					readonly type: "address";
				}
			];
			readonly name: "AddSpender";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "oldSpender";
					readonly type: "address";
				}
			];
			readonly name: "RemoveSpender";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "token";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Rewarded";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_spender";
					readonly type: "address";
				}
			];
			readonly name: "addSpender";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_initOwner";
					readonly type: "address";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_spender";
					readonly type: "address";
				}
			];
			readonly name: "removeSpender";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "contract IERC20";
					readonly name: "token";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "sendTo";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "spenders";
			readonly outputs: readonly [
				{
					readonly internalType: "address[]";
					readonly name: "";
					readonly type: "address[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): RewardVaultInterface;
	static connect(address: string, runner?: ContractRunner | null): RewardVault;
}
export type InitializableProxyConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class InitializableProxy__factory extends ContractFactory {
	constructor(...args: InitializableProxyConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<InitializableProxy & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): InitializableProxy__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b506106f18061001f6000396000f3fe60806040526004361061004e5760003560e01c80634f1ef286146100655780635c60da1b146100785780638f283970146100a9578063dce95104146100c9578063f851a440146100dc5761005d565b3661005d5761005b6100f1565b005b61005b6100f1565b61005b6100733660046105be565b610103565b34801561008457600080fd5b5061008d61016a565b6040516001600160a01b03909116815260200160405180910390f35b3480156100b557600080fd5b5061005b6100c436600461060c565b610179565b61005b6100d736600461062e565b6101d9565b3480156100e857600080fd5b5061008d610263565b6101016100fc61026d565b610277565b565b61010b61029b565b6001600160a01b0316336001600160a01b03161461015c5760405162461bcd60e51b81526020600482015260096024820152682727aa2fa0a226a4a760b91b60448201526064015b60405180910390fd5b61016682826102a5565b5050565b600061017461026d565b905090565b61018161029b565b6001600160a01b0316336001600160a01b0316146101cd5760405162461bcd60e51b81526020600482015260096024820152682727aa2fa0a226a4a760b91b6044820152606401610153565b6101d681610364565b50565b60006101e361026d565b6001600160a01b0316148015610209575060006101fe61029b565b6001600160a01b0316145b61024b5760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b6044820152606401610153565b61025483610364565b61025e82826102a5565b505050565b600061017461029b565b60006101746103b8565b3660008037600080366000845af43d6000803e808015610296573d6000f35b3d6000fd5b60006101746103eb565b6102ae82610413565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561035c57600080836001600160a01b031683604051610304919061068c565b600060405180830381855af49150503d806000811461033f576040519150601f19603f3d011682016040523d82523d6000602084013e610344565b606091505b50915091508161035657805181602001fd5b50505050565b61016661048d565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61038d6103eb565b604080516001600160a01b03928316815291841660208301520160405180910390a16101d6816104ac565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b546001600160a01b0316919050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036103dc565b806001600160a01b03163b60000361044957604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610153565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b34156101015760405163b398979f60e01b815260040160405180910390fd5b6001600160a01b0381166104d657604051633173bdd160e11b815260006004820152602401610153565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610361046c565b80356001600160a01b038116811461051457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261054057600080fd5b813567ffffffffffffffff81111561055a5761055a610519565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561058957610589610519565b6040528181528382016020018510156105a157600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156105d157600080fd5b6105da836104fd565b9150602083013567ffffffffffffffff8111156105f657600080fd5b6106028582860161052f565b9150509250929050565b60006020828403121561061e57600080fd5b610627826104fd565b9392505050565b60008060006060848603121561064357600080fd5b61064c846104fd565b925061065a602085016104fd565b9150604084013567ffffffffffffffff81111561067657600080fd5b6106828682870161052f565b9150509250925092565b6000825160005b818110156106ad5760208186018101518583015201610693565b50600092019182525091905056fea2646970667358221220d8f3e575724754343ed4950d89a16f1d7aedf31b33867b821f1b427cfc554adc64736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "admin";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidAdmin";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "ERC1967InvalidImplementation";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ERC1967NonPayable";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "previousAdmin";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "AdminChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "implementation";
					readonly type: "address";
				}
			];
			readonly name: "Upgraded";
			readonly type: "event";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "fallback";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "admin";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				}
			];
			readonly name: "changeAdmin";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "implementation";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newAdmin";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "initializeProxy";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newImplementation";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes";
					readonly name: "data";
					readonly type: "bytes";
				}
			];
			readonly name: "upgradeToAndCall";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): InitializableProxyInterface;
	static connect(address: string, runner?: ContractRunner | null): InitializableProxy;
}
export declare class ERC20Lockable__factory {
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC20Locked";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "Lock";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "LockedBy";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "isLocked";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "isLockedUntil";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "lock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "signature";
					readonly type: "bytes";
				}
			];
			readonly name: "lockPermit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "lockedUntil";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20LockableInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Lockable;
}
export type ERC20MockConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Mock__factory extends ContractFactory {
	constructor(...args: ERC20MockConstructorParams);
	getDeployTransaction(name_: string, symbol_: string, decimals_: BigNumberish, supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(name_: string, symbol_: string, decimals_: BigNumberish, supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ERC20Mock & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ERC20Mock__factory;
	static readonly bytecode = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220143565bfd7ebabe28a38c0c71d05fbfa76b60b442df54b9ea16c5eda9980e30664736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "name_";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "symbol_";
					readonly type: "string";
				},
				{
					readonly internalType: "uint8";
					readonly name: "decimals_";
					readonly type: "uint8";
				},
				{
					readonly internalType: "uint256";
					readonly name: "supply_";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "constructor";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "OwnableInvalidOwner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "OwnableUnauthorizedAccount";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "previousOwner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "OwnershipTransferred";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "burnFrom";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "owner";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "renounceOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "newOwner";
					readonly type: "address";
				}
			];
			readonly name: "transferOwnership";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC20MockInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC20Mock;
}
export type ERC4626PoolConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC4626Pool__factory extends ContractFactory {
	constructor(...args: ERC4626PoolConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ERC4626Pool & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): ERC4626Pool__factory;
	static readonly bytecode = "0x6080604052348015600f57600080fd5b5061253d8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061025e5760003560e01c80638c7ab1d711610146578063c6e6f592116100c3578063dd62ed3e11610087578063dd62ed3e146104fc578063ef8b30f7146102a8578063f10684541461050f578063f5eb42dc14610518578063f7c618c11461052b578063f97d3d071461053e57600080fd5b8063c6e6f592146102a8578063ce96cb77146104b0578063d505accf146104c3578063d905777e146104d6578063dd467064146104e957600080fd5b8063a9059cbb1161010a578063a9059cbb14610477578063b3d7f6b9146102a8578063b460af941461048a578063ba0876521461049d578063c63d75b61461039257600080fd5b80638c7ab1d71461041657806394bf804d1461042957806395d89b411461043c5780639bc289f1146104445780639fc8ae6d1461046457600080fd5b8063358394d8116101df5780634cdad506116101a35780634cdad506146102a85780636bcfdc34146103ba5780636e553f65146103c257806370a08231146103d55780637ecebe00146103e857806384b0196e146103fb57600080fd5b8063358394d8146103455780633644e5151461035857806338d52e0f14610360578063402d267d146103925780634a4fbeec146103a757600080fd5b80630a28a477116102265780630a28a477146102a857806318160ddd146102de5780631b96b2f91461030557806323b872dd14610318578063313ce5671461032b57600080fd5b806301e1d1141461026357806302a19a9e1461027e57806306fdde031461029357806307a2d13a146102a8578063095ea7b3146102bb575b600080fd5b61026b61056c565b6040519081526020015b60405180910390f35b61029161028c366004611e7f565b61059b565b005b61029b610704565b6040516102759190611f84565b61026b6102b6366004611f97565b6107ad565b6102ce6102c9366004611fb0565b6107b7565b6040519015158152602001610275565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025461026b565b610291610313366004611fb0565b6107cf565b6102ce610326366004611fda565b61082a565b61033361084e565b60405160ff9091168152602001610275565b610291610353366004612017565b610858565b61026b610ab0565b6000805160206124e8833981519152546001600160a01b03165b6040516001600160a01b039091168152602001610275565b61026b6103a0366004612064565b5060001990565b6102ce6103b5366004612064565b610aba565b6102ce610adb565b61026b6103d036600461207f565b610b18565b61026b6103e3366004612064565b610b3e565b61026b6103f6366004612064565b610be3565b610403610bee565b60405161027597969594939291906120ab565b60015461037a906001600160a01b031681565b61026b61043736600461207f565b610c9a565b61029b610cb8565b61026b610452366004612064565b60006020819052908152604090205481565b610291610472366004611fb0565b610cf7565b6102ce610485366004611fb0565b610d4e565b61026b610498366004612143565b610d5c565b61026b6104ab366004612143565b610db4565b61026b6104be366004612064565b610e03565b6102916104d136600461217f565b610e14565b61026b6104e4366004612064565b610f30565b6102916104f7366004611f97565b610f3b565b61026b61050a3660046121f2565b610f48565b61026b60025481565b61026b610526366004612064565b610f92565b60035461037a906001600160a01b031681565b6102ce61054c366004611fb0565b6001600160a01b0391909116600090815260208190526040902054101590565b60006105967f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b905090565b814211156105c45760405163313c898160e11b8152600481018390526024015b60405180910390fd5b60007f35eff6d814ac6266dcac97b73c7e53eaf4dabccaded194ea1b0d8c021e5060a18686866105f38a610f9d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e001604051602081830303815290604052805190602001209050600061064e82610fdf565b9050600061065c828561100c565b9050876001600160a01b0316816001600160a01b0316146106a3576040516325c0072360e11b81526001600160a01b038083166004830152891660248201526044016105bb565b6106ad8887611036565b866001600160a01b0316886001600160a01b03167fa2d3a0f9c14b593023a7113a6db3582e73f8990cedd0d8bb222ab65e20b1a1f6886040516106f291815260200190565b60405180910390a35050505050505050565b606060006000805160206124a88339815191525b90508060030180546107299061221c565b80601f01602080910402602001604051908101604052809291908181526020018280546107559061221c565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b505050505091505090565b6000815b92915050565b6000336107c58185856110a7565b5060019392505050565b6001546001600160a01b0316331461081c5760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b60448201526064016105bb565b61082682826110b9565b5050565b6000336108388582856110ef565b610843858585611143565b506001949350505050565b60006105966111a2565b60006108626111d4565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561088a5750825b905060008267ffffffffffffffff1660011480156108a75750303b155b9050811580156108b5575080155b156108d35760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156108fd57845460ff60401b1916600160401b1785555b600180546001600160a01b03808c166001600160a01b03199283161790925560028a9055600380548984169216919091179055604080516395d89b4160e01b815290516000928a16916395d89b4191600480830192869291908290030181865afa15801561096f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109979190810190612256565b905060006109c460405180604001604052806007815260200166029ba30b5b2b2160cd1b815250836111fd565b905060006109ec604051806040016040528060028152602001611cdd60f21b815250846111fd565b90506109f88282611229565b610a018261123b565b610a0a8a611266565b604080516001600160a01b038e81168252602082018e90528c8116828401528b16606082015290517f4cbe1688aeaf2c1317c96624591bc5ddbd99724f79e47858bc85f24001dbee139181900360800190a15050508315610aa557845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b6000610596611277565b6001600160a01b0381166000908152602081905260408120544211156107b1565b6003546000906001600160a01b0316610b096000805160206124e8833981519152546001600160a01b031690565b6001600160a01b031614905090565b60006000196000610b28856107ad565b9050610b3633858784611281565b949350505050565b600080610b4a83611336565b9050610b54610adb565b156107b1576001546002546040516334637d4f60e21b815260048101919091526001600160a01b0385811660248301529091169063d18df53c90604401602060405180830381865afa158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd291906122e5565b610bdc9082612314565b9392505050565b60006107b182611369565b600060608082808083816000805160206124c88339815191528054909150158015610c1b57506001810154155b610c5f5760405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b60448201526064016105bb565b610c67611392565b610c6f6113d1565b60408051600080825260208201909252600f60f81b9c939b5091995046985030975095509350915050565b60006000196000610caa856107ad565b9050610b3633858388611281565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060916000805160206124a8833981519152916107299061221c565b6001546001600160a01b03163314610d445760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b60448201526064016105bb565b61082682826113e9565b6000336107c5818585611143565b600080610d6883610e03565b905080851115610d9157828582604051633fa733bb60e21b81526004016105bb939291906122c4565b6000610d9c866107ad565b9050610dab338686898561141f565b95945050505050565b600080610dc083610f30565b905080851115610de957828582604051632e52afbb60e21b81526004016105bb939291906122c4565b6000610df4866107ad565b9050610dab338686848a61141f565b60006107b1610e1183610b3e565b90565b83421115610e385760405163313c898160e11b8152600481018590526024016105bb565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610e678c610f9d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610ec282610fdf565b90506000610ed28287878761151e565b9050896001600160a01b0316816001600160a01b031614610f19576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016105bb565b610f248a8a8a6110a7565b50505050505050505050565b60006107b182610b3e565b610f453382611036565b50565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b60006107b182611336565b6001600160a01b031660009081527f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006020526040902080546001810190915590565b60006107b1610fec611277565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061101c868661154c565b92509250925061102c8282611599565b5090949350505050565b6001600160a01b038216600090815260208190526040902054811115610826576001600160a01b0382166000818152602081815260409182902084905590518381527f625fed9875dada8643f2418b838ae0bc78d9a148a18eee4ee1979ff0f3f5d427910160405180910390a25050565b6110b48383836001611652565b505050565b6001600160a01b0382166110e35760405163ec442f0560e01b8152600060048201526024016105bb565b6108266000838361173a565b60006110fb8484610f48565b905060001981101561113d578181101561112e57828183604051637dc7a0d960e11b81526004016105bb939291906122c4565b61113d84848484036000611652565b50505050565b6001600160a01b03831661116d57604051634b637e8f60e11b8152600060048201526024016105bb565b6001600160a01b0382166111975760405163ec442f0560e01b8152600060048201526024016105bb565b6110b483838361173a565b6000806000805160206124e88339815191529050600081546111ce9190600160a01b900460ff16612327565b91505090565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006107b1565b60608282604051602001611212929190612340565b604051602081830303815290604052905092915050565b611231611869565b6108268282611890565b611243611869565b610f4581604051806040016040528060018152602001603160f81b8152506118e1565b61126e611869565b610f4581611942565b60006105966119b4565b60015460405163077ba79560e41b81526001600160a01b03858116600483015260248201859052909116906377ba795090604401600060405180830381600087803b1580156112cf57600080fd5b505af11580156112e3573d6000803e3d6000fd5b505060408051858152602081018590526001600160a01b038088169450881692507fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a350505050565b6000806000805160206124a88339815191525b6001600160a01b0390931660009081526020939093525050604090205490565b6000807f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb00611349565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10280546060916000805160206124c8833981519152916107299061221c565b606060006000805160206124c8833981519152610718565b6001600160a01b03821661141357604051634b637e8f60e11b8152600060048201526024016105bb565b6108268260008361173a565b600061142a84610f92565b90506000611436610adb565b801561144157508183115b61144b578261144d565b815b60015460405163db2aa12760e01b81526001600160a01b0388811660048301526024820184905292935091169063db2aa12790604401600060405180830381600087803b15801561149d57600080fd5b505af11580156114b1573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db878760405161150d929190918252602082015260400190565b60405180910390a450505050505050565b60008060008061153088888888611a28565b9250925092506115408282611599565b50909695505050505050565b600080600083516041036115865760208401516040850151606086015160001a61157888828585611a28565b955095509550505050611592565b50508151600091506002905b9250925092565b60008260038111156115ad576115ad61236f565b036115b6575050565b60018260038111156115ca576115ca61236f565b036115e85760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156115fc576115fc61236f565b0361161d5760405163fce698f760e01b8152600481018290526024016105bb565b60038260038111156116315761163161236f565b03610826576040516335e2f38360e21b8152600481018290526024016105bb565b6000805160206124a88339815191526001600160a01b03851661168b5760405163e602df0560e01b8152600060048201526024016105bb565b6001600160a01b0384166116b557604051634a1406b160e11b8152600060048201526024016105bb565b6001600160a01b0380861660009081526001830160209081526040808320938816835292905220839055811561173357836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258560405161172a91815260200190565b60405180910390a35b5050505050565b611742610adb565b801561175657506001600160a01b03831615155b156117bb5760015460405163cd09525d60e01b81526001600160a01b0385811660048301529091169063cd09525d90602401600060405180830381600087803b1580156117a257600080fd5b505af11580156117b6573d6000803e3d6000fd5b505050505b6117c6838383611af7565b6001600160a01b038316158015906117e657506001600160a01b03821615155b80156117f157508015155b156110b457600154604051630325c61f60e31b81526001600160a01b0385811660048301528481166024830152604482018490529091169063192e30f890606401600060405180830381600087803b15801561184c57600080fd5b505af1158015611860573d6000803e3d6000fd5b50505050505050565b611871611b33565b61188e57604051631afcd79f60e31b815260040160405180910390fd5b565b611898611869565b6000805160206124a88339815191527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace036118d284826123cc565b506004810161113d83826123cc565b6118e9611869565b6000805160206124c88339815191527fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10261192384826123cc565b506003810161193283826123cc565b5060008082556001909101555050565b61194a611869565b6000805160206124e883398151915260008061196584611b4d565b9150915081611975576012611977565b805b83546001600160a81b031916600160a01b60ff92909216919091026001600160a01b031916176001600160a01b0394909416939093179091555050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6119df611c29565b6119e7611c93565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611a635750600091506003905082611aed565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611ab7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611ae357506000925060019150829050611aed565b9250600091508190505b9450945094915050565b611b0083610aba565b15611b28576040516233044d60e31b81526001600160a01b03841660048201526024016105bb565b6110b4838383611cd7565b6000611b3d6111d4565b54600160401b900460ff16919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000918291829182916001600160a01b03871691611b949161248b565b600060405180830381855afa9150503d8060008114611bcf576040519150601f19603f3d011682016040523d82523d6000602084013e611bd4565b606091505b5091509150818015611be857506020815110155b15611c1c57600081806020019051810190611c0391906122e5565b905060ff8111611c1a576001969095509350505050565b505b5060009485945092505050565b60006000805160206124c883398151915281611c43611392565b805190915015611c5b57805160209091012092915050565b81548015611c6a579392505050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470935050505090565b60006000805160206124c883398151915281611cad6113d1565b805190915015611cc557805160209091012092915050565b60018201548015611c6a579392505050565b6000805160206124a88339815191526001600160a01b038416611d135781816002016000828254611d089190612314565b90915550611d729050565b6001600160a01b03841660009081526020829052604090205482811015611d535784818460405163391434e360e21b81526004016105bb939291906122c4565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611d90576002810180548390039055611daf565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161132891815260200190565b80356001600160a01b0381168114611e0b57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611e4f57611e4f611e10565b604052919050565b600067ffffffffffffffff821115611e7157611e71611e10565b50601f01601f191660200190565b600080600080600060a08688031215611e9757600080fd5b611ea086611df4565b9450611eae60208701611df4565b93506040860135925060608601359150608086013567ffffffffffffffff811115611ed857600080fd5b8601601f81018813611ee957600080fd5b8035611efc611ef782611e57565b611e26565b818152896020838501011115611f1157600080fd5b816020840160208301376000602083830101528093505050509295509295909350565b60005b83811015611f4f578181015183820152602001611f37565b50506000910152565b60008151808452611f70816020860160208601611f34565b601f01601f19169290920160200192915050565b602081526000610bdc6020830184611f58565b600060208284031215611fa957600080fd5b5035919050565b60008060408385031215611fc357600080fd5b611fcc83611df4565b946020939093013593505050565b600080600060608486031215611fef57600080fd5b611ff884611df4565b925061200660208501611df4565b929592945050506040919091013590565b6000806000806080858703121561202d57600080fd5b61203685611df4565b93506020850135925061204b60408601611df4565b915061205960608601611df4565b905092959194509250565b60006020828403121561207657600080fd5b610bdc82611df4565b6000806040838503121561209257600080fd5b823591506120a260208401611df4565b90509250929050565b60ff60f81b8816815260e0602082015260006120ca60e0830189611f58565b82810360408401526120dc8189611f58565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015612132578351835260209384019390920191600101612114565b50909b9a5050505050505050505050565b60008060006060848603121561215857600080fd5b8335925061216860208501611df4565b915061217660408501611df4565b90509250925092565b600080600080600080600060e0888a03121561219a57600080fd5b6121a388611df4565b96506121b160208901611df4565b95506040880135945060608801359350608088013560ff811681146121d557600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561220557600080fd5b61220e83611df4565b91506120a260208401611df4565b600181811c9082168061223057607f821691505b60208210810361225057634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561226857600080fd5b815167ffffffffffffffff81111561227f57600080fd5b8201601f8101841361229057600080fd5b805161229e611ef782611e57565b8181528560208385010111156122b357600080fd5b610dab826020830160208601611f34565b6001600160a01b039390931683526020830191909152604082015260600190565b6000602082840312156122f757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156107b1576107b16122fe565b60ff81811683821601908111156107b1576107b16122fe565b60008351612352818460208801611f34565b835190830190612366818360208801611f34565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b601f8211156110b457806000526020600020601f840160051c810160208510156123ac5750805b601f840160051c820191505b8181101561173357600081556001016123b8565b815167ffffffffffffffff8111156123e6576123e6611e10565b6123fa816123f4845461221c565b84612385565b6020601f82116001811461242e57600083156124165750848201515b600019600385901b1c1916600184901b178455611733565b600084815260208120601f198516915b8281101561245e578785015182556020948501946001909201910161243e565b508482101561247c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6000825161249d818460208701611f34565b919091019291505056fe52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1000773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e00a2646970667358221220332f2eb8320e90bf750d257c99ac6bcf861b67723bfcb62a44bc25dd779f999664736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC20Locked";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxDeposit";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxMint";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxRedeem";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "max";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC4626ExceededMaxWithdraw";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidInitialization";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "NotInitializing";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "uint64";
					readonly name: "version";
					readonly type: "uint64";
				}
			];
			readonly name: "Initialized";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "masterPool";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "pid";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "asset";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "address";
					readonly name: "rewardToken";
					readonly type: "address";
				}
			];
			readonly name: "InitializedPool";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "Lock";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "LockedBy";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdraw";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "asset";
			readonly outputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "convertToShares";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "deposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_masterPool";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_pid";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "_asset";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "_rewardToken";
					readonly type: "address";
				}
			];
			readonly name: "initialize";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "isLocked";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "isLockedUntil";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "isRewardNative";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				}
			];
			readonly name: "lock";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "until";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "bytes";
					readonly name: "signature";
					readonly type: "bytes";
				}
			];
			readonly name: "lockPermit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "lockedUntil";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "masterBurn";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "_user";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "_amount";
					readonly type: "uint256";
				}
			];
			readonly name: "masterMint";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "masterPool";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IMasterPool";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "maxDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly name: "maxMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "maxWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "mint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "pid";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewDeposit";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewMint";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				}
			];
			readonly name: "previewRedeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				}
			];
			readonly name: "previewWithdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "shares";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "redeem";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "rewardToken";
			readonly outputs: readonly [
				{
					readonly internalType: "contract IERC20";
					readonly name: "";
					readonly type: "address";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "sharesOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalAssets";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "assets";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		}
	];
	static createInterface(): ERC4626PoolInterface;
	static connect(address: string, runner?: ContractRunner | null): ERC4626Pool;
}
export type WETHConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class WETH__factory extends ContractFactory {
	constructor(...args: WETHConstructorParams);
	getDeployTransaction(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<WETH & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): WETH__factory;
	static readonly bytecode = "0x61016060405234801561001157600080fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100a59190610286565b5060046100b28282610286565b506100c29150839050600561016d565b610120526100d181600661016d565b61014052815160208084019190912060e052815190820120610100524660a05261015e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506103b6565b600060208351101561018957610182836101a0565b905061019a565b816101948482610286565b5060ff90505b92915050565b600080829050601f815111156101d4578260405163305a27a960e01b81526004016101cb9190610344565b60405180910390fd5b80516101df82610392565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061021157607f821691505b60208210810361023157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028157806000526020600020601f840160051c8101602085101561025e5750805b601f840160051c820191505b8181101561027e576000815560010161026a565b50505b505050565b81516001600160401b0381111561029f5761029f6101e7565b6102b3816102ad84546101fd565b84610237565b6020601f8211600181146102e757600083156102cf5750848201515b600019600385901b1c1916600184901b17845561027e565b600084815260208120601f198516915b8281101561031757878501518255602094850194600190920191016102f7565b50848210156103355786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156103725760208186018101516040868401015201610355565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102315760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611131610410600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220cf936561a4791fd70b5dbaf6f63ad87ff88cfe8ebcc91389374956d3e199572464736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "dst";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "wad";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "src";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "wad";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdrawal";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): WETHInterface;
	static connect(address: string, runner?: ContractRunner | null): WETH;
}
export type WETHMockConstructorParams = [
	signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class WETHMock__factory extends ContractFactory {
	constructor(...args: WETHMockConstructorParams);
	getDeployTransaction(supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<ContractDeployTransaction>;
	deploy(supply_: BigNumberish, overrides?: NonPayableOverrides & {
		from?: string;
	}): Promise<WETHMock & {
		deploymentTransaction(): ContractTransactionResponse;
	}>;
	connect(runner: ContractRunner | null): WETHMock__factory;
	static readonly bytecode = "0x61016060405234801561001157600080fd5b5060405161170438038061170483398101604081905261003091610370565b6040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100c39190610428565b5060046100d08282610428565b506100e091508390506005610196565b610120526100ef816006610196565b61014052815160208084019190912060e052815190820120610100524660a05261017c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525061019033826101c9565b50610579565b60006020835110156101b2576101ab83610208565b90506101c3565b816101bd8482610428565b5060ff90505b92915050565b6001600160a01b0382166101f85760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b61020460008383610246565b5050565b600080829050601f81511115610233578260405163305a27a960e01b81526004016101ef91906104e6565b805161023e82610534565b179392505050565b6001600160a01b0383166102715780600260008282546102669190610558565b909155506102e39050565b6001600160a01b038316600090815260208190526040902054818110156102c45760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101ef565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166102ff5760028054829003905561031e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161036391815260200190565b60405180910390a3505050565b60006020828403121561038257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806103b357607f821691505b6020821081036103d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561042357806000526020600020601f840160051c810160208510156104005750805b601f840160051c820191505b81811015610420576000815560010161040c565b50505b505050565b81516001600160401b0381111561044157610441610389565b6104558161044f845461039f565b846103d9565b6020601f82116001811461048957600083156104715750848201515b600019600385901b1c1916600184901b178455610420565b600084815260208120601f198516915b828110156104b95787850151825560209485019460019092019101610499565b50848210156104d75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b8181101561051457602081860181015160408684010152016104f7565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103d35760001960209190910360031b1b16919050565b808201808211156101c357634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516111316105d3600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220acd411bf3a3dcc711d2b573137ff4425f7d50182ae51c5c35238e07c336c90c264736f6c634300081e0033";
	static readonly abi: readonly [
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "supply_";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "constructor";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "ECDSAInvalidSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "length";
					readonly type: "uint256";
				}
			];
			readonly name: "ECDSAInvalidSignatureLength";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "ECDSAInvalidSignatureS";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "allowance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientAllowance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "balance";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "needed";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC20InsufficientBalance";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "approver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidApprover";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "receiver";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidReceiver";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "sender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "ERC20InvalidSpender";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				}
			];
			readonly name: "ERC2612ExpiredSignature";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "signer";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "ERC2612InvalidSigner";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "currentNonce";
					readonly type: "uint256";
				}
			];
			readonly name: "InvalidAccountNonce";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "InvalidShortString";
			readonly type: "error";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "str";
					readonly type: "string";
				}
			];
			readonly name: "StringTooLong";
			readonly type: "error";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Approval";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "dst";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "wad";
					readonly type: "uint256";
				}
			];
			readonly name: "Deposit";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
			];
			readonly name: "EIP712DomainChanged";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "Transfer";
			readonly type: "event";
		},
		{
			readonly anonymous: false;
			readonly inputs: readonly [
				{
					readonly indexed: true;
					readonly internalType: "address";
					readonly name: "src";
					readonly type: "address";
				},
				{
					readonly indexed: false;
					readonly internalType: "uint256";
					readonly name: "wad";
					readonly type: "uint256";
				}
			];
			readonly name: "Withdrawal";
			readonly type: "event";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "DOMAIN_SEPARATOR";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes32";
					readonly name: "";
					readonly type: "bytes32";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				}
			];
			readonly name: "allowance";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "approve";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "account";
					readonly type: "address";
				}
			];
			readonly name: "balanceOf";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "decimals";
			readonly outputs: readonly [
				{
					readonly internalType: "uint8";
					readonly name: "";
					readonly type: "uint8";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "deposit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "payable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "eip712Domain";
			readonly outputs: readonly [
				{
					readonly internalType: "bytes1";
					readonly name: "fields";
					readonly type: "bytes1";
				},
				{
					readonly internalType: "string";
					readonly name: "name";
					readonly type: "string";
				},
				{
					readonly internalType: "string";
					readonly name: "version";
					readonly type: "string";
				},
				{
					readonly internalType: "uint256";
					readonly name: "chainId";
					readonly type: "uint256";
				},
				{
					readonly internalType: "address";
					readonly name: "verifyingContract";
					readonly type: "address";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "salt";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "uint256[]";
					readonly name: "extensions";
					readonly type: "uint256[]";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "name";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				}
			];
			readonly name: "nonces";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "owner";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "spender";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint256";
					readonly name: "deadline";
					readonly type: "uint256";
				},
				{
					readonly internalType: "uint8";
					readonly name: "v";
					readonly type: "uint8";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "r";
					readonly type: "bytes32";
				},
				{
					readonly internalType: "bytes32";
					readonly name: "s";
					readonly type: "bytes32";
				}
			];
			readonly name: "permit";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "symbol";
			readonly outputs: readonly [
				{
					readonly internalType: "string";
					readonly name: "";
					readonly type: "string";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
			];
			readonly name: "totalSupply";
			readonly outputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "";
					readonly type: "uint256";
				}
			];
			readonly stateMutability: "view";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transfer";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "address";
					readonly name: "from";
					readonly type: "address";
				},
				{
					readonly internalType: "address";
					readonly name: "to";
					readonly type: "address";
				},
				{
					readonly internalType: "uint256";
					readonly name: "value";
					readonly type: "uint256";
				}
			];
			readonly name: "transferFrom";
			readonly outputs: readonly [
				{
					readonly internalType: "bool";
					readonly name: "";
					readonly type: "bool";
				}
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly inputs: readonly [
				{
					readonly internalType: "uint256";
					readonly name: "amount";
					readonly type: "uint256";
				}
			];
			readonly name: "withdraw";
			readonly outputs: readonly [
			];
			readonly stateMutability: "nonpayable";
			readonly type: "function";
		},
		{
			readonly stateMutability: "payable";
			readonly type: "receive";
		}
	];
	static createInterface(): WETHMockInterface;
	static connect(address: string, runner?: ContractRunner | null): WETHMock;
}

declare namespace ownableSol {
	export { Ownable };
}
declare namespace utils {
	export { addressSol, create2Sol, cryptography, errorsSol, introspection, math, noncesSol, shortStringsSol, stringsSol };
}
declare namespace draftIerc6093Sol {
	export { IERC1155Errors, IERC20Errors, IERC721Errors };
}
declare namespace ierc1363Sol {
	export { IERC1363 };
}
declare namespace ierc1967Sol {
	export { IERC1967 };
}
declare namespace ierc4626Sol {
	export { IERC4626 };
}
declare namespace ierc5267Sol {
	export { IERC5267 };
}
declare namespace erc1967UtilsSol {
	export { ERC1967Utils };
}
declare namespace beacon {
	export { iBeaconSol };
}
declare namespace iBeaconSol {
	export { IBeacon };
}
declare namespace clonesSol {
	export { Clones };
}
declare namespace erc1967 {
	export { erc1967UtilsSol };
}
declare namespace proxySol {
	export { Proxy$1 as Proxy };
}
declare namespace ierc20PermitSol {
	export { IERC20Permit };
}
declare namespace erc20BurnableSol {
	export { ERC20Burnable };
}
declare namespace erc20PermitSol {
	export { ERC20Permit };
}
declare namespace ierc20MetadataSol {
	export { IERC20Metadata };
}
declare namespace utils$1 {
	export { safeErc20Sol };
}
declare namespace safeErc20Sol {
	export { SafeERC20 };
}
declare namespace erc20Sol {
	export { ERC20 };
}
declare namespace ierc20Sol {
	export { IERC20 };
}
declare namespace extensions {
	export { erc20BurnableSol, erc20PermitSol, ierc20MetadataSol, ierc20PermitSol };
}
declare namespace erc20 {
	export { erc20Sol, extensions, ierc20Sol, utils$1 as utils };
}
declare namespace eip712Sol {
	export { EIP712 };
}
declare namespace ecdsaSol {
	export { ECDSA };
}
declare namespace math {
	export { safeCastSol };
}
declare namespace ierc165Sol {
	export { IERC165 };
}
declare namespace safeCastSol {
	export { SafeCast };
}
declare namespace addressSol {
	export { Address };
}
declare namespace create2Sol {
	export { Create2 };
}
declare namespace errorsSol {
	export { Errors };
}
declare namespace noncesSol {
	export { Nonces };
}
declare namespace shortStringsSol {
	export { ShortStrings };
}
declare namespace stringsSol {
	export { Strings };
}
declare namespace cryptography {
	export { ecdsaSol, eip712Sol };
}
declare namespace introspection {
	export { ierc165Sol };
}
declare namespace access {
	export { ownableSol };
}
declare namespace interfaces {
	export { draftIerc6093Sol, ierc1363Sol, ierc1967Sol, ierc4626Sol, ierc5267Sol };
}
declare namespace proxy {
	export { beacon, clonesSol, erc1967, proxySol };
}
declare namespace token {
	export { erc20 };
}
declare namespace contractsUpgradeable {
	export { access$1 as access, proxy$1 as proxy, token$1 as token, utils$2 as utils };
}
declare namespace ownableUpgradeableSol {
	export { OwnableUpgradeable };
}
declare namespace utils$2 {
	export { contextUpgradeableSol, cryptography$1 as cryptography, noncesUpgradeableSol, reentrancyGuardUpgradeableSol };
}
declare namespace initializableSol {
	export { Initializable };
}
declare namespace utils$3 {
	export { initializableSol };
}
declare namespace erc4626UpgradeableSol {
	export { ERC4626Upgradeable };
}
declare namespace erc20PermitUpgradeableSol {
	export { ERC20PermitUpgradeable };
}
declare namespace extensions$1 {
	export { erc20PermitUpgradeableSol, erc4626UpgradeableSol };
}
declare namespace erc20UpgradeableSol {
	export { ERC20Upgradeable };
}
declare namespace erc20$1 {
	export { erc20UpgradeableSol, extensions$1 as extensions };
}
declare namespace eip712UpgradeableSol {
	export { EIP712Upgradeable };
}
declare namespace cryptography$1 {
	export { eip712UpgradeableSol };
}
declare namespace contextUpgradeableSol {
	export { ContextUpgradeable };
}
declare namespace noncesUpgradeableSol {
	export { NoncesUpgradeable };
}
declare namespace reentrancyGuardUpgradeableSol {
	export { ReentrancyGuardUpgradeable };
}
declare namespace access$1 {
	export { ownableUpgradeableSol };
}
declare namespace proxy$1 {
	export { utils$3 as utils };
}
declare namespace token$1 {
	export { erc20$1 as erc20 };
}
declare namespace contracts {
	export { access, interfaces, proxy, token, utils };
}
declare namespace factories {
	export { contracts$2 as contracts, openzeppelin };
}
declare namespace iwethSol {
	export { IWETH };
}
declare namespace ierc20Sol$1 {
	export { IERC20Exp, IERC20Mintable };
}
declare namespace ierc4626Sol$1 {
	export { IERC4626$1 as IERC4626 };
}
declare namespace ierc4626PoolSol {
	export { IERC4626Pool };
}
declare namespace iInitializableProxySol {
	export { IInitializableProxy };
}
declare namespace iMasterChefSol {
	export { IMasterChef };
}
declare namespace iMasterPoolSol {
	export { IMasterPool };
}
declare namespace iRewardVaultSol {
	export { IRewardVault };
}
declare namespace tokens {
	export { erc20LockableSol, erc20MockSol, erc4626PoolSol, wethMockSol, wethSol };
}
declare namespace sigLibSol {
	export { SigLib };
}
declare namespace rewardVaultSol {
	export { RewardVault };
}
declare namespace masterChefSol {
	export { MasterChef };
}
declare namespace masterPoolSol {
	export { MasterPool };
}
declare namespace initializableProxySol {
	export { InitializableProxy };
}
declare namespace wethMockSol {
	export { WETHMock };
}
declare namespace erc20LockableSol {
	export { ERC20Lockable };
}
declare namespace erc20MockSol {
	export { ERC20Mock };
}
declare namespace erc4626PoolSol {
	export { ERC4626Pool };
}
declare namespace wethSol {
	export { WETH };
}
declare namespace lockSol {
	export { Lock$1 as Lock };
}
declare namespace interfaces$1 {
	export { iInitializableProxySol, iMasterChefSol, iMasterPoolSol, iRewardVaultSol, ierc20Sol$1 as ierc20Sol, ierc4626PoolSol, ierc4626Sol$1 as ierc4626Sol, iwethSol };
}
declare namespace libraries {
	export { sigLibSol };
}
declare namespace pools {
	export { masterChefSol, masterPoolSol, rewardVaultSol };
}
declare namespace proxy$2 {
	export { initializableProxySol };
}
declare namespace ownableSol$1 {
	export { Ownable__factory };
}
declare namespace utils$4 {
	export { addressSol$1 as addressSol, create2Sol$1 as create2Sol, cryptography$2 as cryptography, errorsSol$1 as errorsSol, introspection$1 as introspection, math$1 as math, noncesSol$1 as noncesSol, shortStringsSol$1 as shortStringsSol, stringsSol$1 as stringsSol };
}
declare namespace draftIerc6093Sol$1 {
	export { IERC1155Errors__factory, IERC20Errors__factory, IERC721Errors__factory };
}
declare namespace ierc1363Sol$1 {
	export { IERC1363__factory };
}
declare namespace ierc1967Sol$1 {
	export { IERC1967__factory };
}
declare namespace ierc4626Sol$2 {
	export { IERC4626__factory };
}
declare namespace ierc5267Sol$1 {
	export { IERC5267__factory };
}
declare namespace erc1967UtilsSol$1 {
	export { ERC1967Utils__factory };
}
declare namespace beacon$1 {
	export { iBeaconSol$1 as iBeaconSol };
}
declare namespace iBeaconSol$1 {
	export { IBeacon__factory };
}
declare namespace clonesSol$1 {
	export { Clones__factory };
}
declare namespace erc1967$1 {
	export { erc1967UtilsSol$1 as erc1967UtilsSol };
}
declare namespace proxySol$1 {
	export { Proxy__factory };
}
declare namespace ierc20PermitSol$1 {
	export { IERC20Permit__factory };
}
declare namespace erc20BurnableSol$1 {
	export { ERC20Burnable__factory };
}
declare namespace erc20PermitSol$1 {
	export { ERC20Permit__factory };
}
declare namespace ierc20MetadataSol$1 {
	export { IERC20Metadata__factory };
}
declare namespace utils$5 {
	export { safeErc20Sol$1 as safeErc20Sol };
}
declare namespace safeErc20Sol$1 {
	export { SafeERC20__factory };
}
declare namespace erc20Sol$1 {
	export { ERC20__factory };
}
declare namespace ierc20Sol$2 {
	export { IERC20__factory };
}
declare namespace extensions$2 {
	export { erc20BurnableSol$1 as erc20BurnableSol, erc20PermitSol$1 as erc20PermitSol, ierc20MetadataSol$1 as ierc20MetadataSol, ierc20PermitSol$1 as ierc20PermitSol };
}
declare namespace erc20$2 {
	export { erc20Sol$1 as erc20Sol, extensions$2 as extensions, ierc20Sol$2 as ierc20Sol, utils$5 as utils };
}
declare namespace eip712Sol$1 {
	export { EIP712__factory };
}
declare namespace ecdsaSol$1 {
	export { ECDSA__factory };
}
declare namespace math$1 {
	export { safeCastSol$1 as safeCastSol };
}
declare namespace ierc165Sol$1 {
	export { IERC165__factory };
}
declare namespace safeCastSol$1 {
	export { SafeCast__factory };
}
declare namespace addressSol$1 {
	export { Address__factory };
}
declare namespace create2Sol$1 {
	export { Create2__factory };
}
declare namespace errorsSol$1 {
	export { Errors__factory };
}
declare namespace noncesSol$1 {
	export { Nonces__factory };
}
declare namespace shortStringsSol$1 {
	export { ShortStrings__factory };
}
declare namespace stringsSol$1 {
	export { Strings__factory };
}
declare namespace cryptography$2 {
	export { ecdsaSol$1 as ecdsaSol, eip712Sol$1 as eip712Sol };
}
declare namespace introspection$1 {
	export { ierc165Sol$1 as ierc165Sol };
}
declare namespace access$2 {
	export { ownableSol$1 as ownableSol };
}
declare namespace interfaces$2 {
	export { draftIerc6093Sol$1 as draftIerc6093Sol, ierc1363Sol$1 as ierc1363Sol, ierc1967Sol$1 as ierc1967Sol, ierc4626Sol$2 as ierc4626Sol, ierc5267Sol$1 as ierc5267Sol };
}
declare namespace proxy$3 {
	export { beacon$1 as beacon, clonesSol$1 as clonesSol, erc1967$1 as erc1967, proxySol$1 as proxySol };
}
declare namespace token$2 {
	export { erc20$2 as erc20 };
}
declare namespace contractsUpgradeable$1 {
	export { access$3 as access, proxy$4 as proxy, token$3 as token, utils$6 as utils };
}
declare namespace ownableUpgradeableSol$1 {
	export { OwnableUpgradeable__factory };
}
declare namespace utils$6 {
	export { contextUpgradeableSol$1 as contextUpgradeableSol, cryptography$3 as cryptography, noncesUpgradeableSol$1 as noncesUpgradeableSol, reentrancyGuardUpgradeableSol$1 as reentrancyGuardUpgradeableSol };
}
declare namespace initializableSol$1 {
	export { Initializable__factory };
}
declare namespace utils$7 {
	export { initializableSol$1 as initializableSol };
}
declare namespace erc4626UpgradeableSol$1 {
	export { ERC4626Upgradeable__factory };
}
declare namespace erc20PermitUpgradeableSol$1 {
	export { ERC20PermitUpgradeable__factory };
}
declare namespace extensions$3 {
	export { erc20PermitUpgradeableSol$1 as erc20PermitUpgradeableSol, erc4626UpgradeableSol$1 as erc4626UpgradeableSol };
}
declare namespace erc20UpgradeableSol$1 {
	export { ERC20Upgradeable__factory };
}
declare namespace erc20$3 {
	export { erc20UpgradeableSol$1 as erc20UpgradeableSol, extensions$3 as extensions };
}
declare namespace eip712UpgradeableSol$1 {
	export { EIP712Upgradeable__factory };
}
declare namespace cryptography$3 {
	export { eip712UpgradeableSol$1 as eip712UpgradeableSol };
}
declare namespace contextUpgradeableSol$1 {
	export { ContextUpgradeable__factory };
}
declare namespace noncesUpgradeableSol$1 {
	export { NoncesUpgradeable__factory };
}
declare namespace reentrancyGuardUpgradeableSol$1 {
	export { ReentrancyGuardUpgradeable__factory };
}
declare namespace access$3 {
	export { ownableUpgradeableSol$1 as ownableUpgradeableSol };
}
declare namespace proxy$4 {
	export { utils$7 as utils };
}
declare namespace token$3 {
	export { erc20$3 as erc20 };
}
declare namespace contracts$1 {
	export { access$2 as access, interfaces$2 as interfaces, proxy$3 as proxy, token$2 as token, utils$4 as utils };
}
declare namespace contracts$2 {
	export { interfaces$3 as interfaces, libraries$1 as libraries, lockSol$1 as lockSol, pools$1 as pools, proxy$5 as proxy, tokens$1 as tokens };
}
declare namespace iwethSol$1 {
	export { IWETH__factory };
}
declare namespace ierc20Sol$3 {
	export { IERC20Exp__factory, IERC20Mintable__factory };
}
declare namespace ierc4626Sol$3 {
	export { IERC4626__factory$1 as IERC4626__factory };
}
declare namespace ierc4626PoolSol$1 {
	export { IERC4626Pool__factory };
}
declare namespace iInitializableProxySol$1 {
	export { IInitializableProxy__factory };
}
declare namespace iMasterChefSol$1 {
	export { IMasterChef__factory };
}
declare namespace iMasterPoolSol$1 {
	export { IMasterPool__factory };
}
declare namespace iRewardVaultSol$1 {
	export { IRewardVault__factory };
}
declare namespace tokens$1 {
	export { erc20LockableSol$1 as erc20LockableSol, erc20MockSol$1 as erc20MockSol, erc4626PoolSol$1 as erc4626PoolSol, wethMockSol$1 as wethMockSol, wethSol$1 as wethSol };
}
declare namespace sigLibSol$1 {
	export { SigLib__factory };
}
declare namespace rewardVaultSol$1 {
	export { RewardVault__factory };
}
declare namespace masterChefSol$1 {
	export { MasterChef__factory };
}
declare namespace masterPoolSol$1 {
	export { MasterPool__factory };
}
declare namespace initializableProxySol$1 {
	export { InitializableProxy__factory };
}
declare namespace wethMockSol$1 {
	export { WETHMock__factory };
}
declare namespace erc20LockableSol$1 {
	export { ERC20Lockable__factory };
}
declare namespace erc20MockSol$1 {
	export { ERC20Mock__factory };
}
declare namespace erc4626PoolSol$1 {
	export { ERC4626Pool__factory };
}
declare namespace wethSol$1 {
	export { WETH__factory };
}
declare namespace lockSol$1 {
	export { Lock__factory };
}
declare namespace interfaces$3 {
	export { iInitializableProxySol$1 as iInitializableProxySol, iMasterChefSol$1 as iMasterChefSol, iMasterPoolSol$1 as iMasterPoolSol, iRewardVaultSol$1 as iRewardVaultSol, ierc20Sol$3 as ierc20Sol, ierc4626PoolSol$1 as ierc4626PoolSol, ierc4626Sol$3 as ierc4626Sol, iwethSol$1 as iwethSol };
}
declare namespace libraries$1 {
	export { sigLibSol$1 as sigLibSol };
}
declare namespace pools$1 {
	export { masterChefSol$1 as masterChefSol, masterPoolSol$1 as masterPoolSol, rewardVaultSol$1 as rewardVaultSol };
}
declare namespace proxy$5 {
	export { initializableProxySol$1 as initializableProxySol };
}
declare namespace openzeppelin {
	export { contracts$1 as contracts, contractsUpgradeable$1 as contractsUpgradeable };
}
declare namespace openzeppelin$1 {
	export { contracts, contractsUpgradeable };
}
declare namespace contracts$3 {
	export { interfaces$1 as interfaces, libraries, lockSol, pools, proxy$2 as proxy, tokens };
}

export {
	IERC4626$1 as IERC4626,
	IERC4626__factory$1 as IERC4626__factory,
	Lock$1 as Lock,
	Proxy$1 as Proxy,
	contracts$3 as contracts,
	factories,
	openzeppelin$1 as openzeppelin,
};

export {};
