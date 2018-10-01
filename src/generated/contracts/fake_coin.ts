// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
import BigNumber from "bignumber.js";
import { TxData, TxDataPayable, CallData, BlockParamLiteral, DecodedLogArgs, EventFilterObject, EventFilterResult } from "web3";
import { DeployedContract, TransactionResult, Request } from 'truffle-contract';
// tslint:enable:no-unused-variable


declare namespace FakeCoinInstanceInternal {

    
    namespace balanceOf {
    
    	interface TransactionCallable<T> {
    		(index_0: string, tx?: CallData): Promise<T>;
    		call(index_0: string, tx?: CallData): Promise<T>;
    		sendTransaction(index_0: string, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(index_0: string, tx?: TxData): Promise<number>;
    		request(index_0: string, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace mint {
    
    	interface TransactionCallable<T> {
    		(_to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		call(_to: string, _value: BigNumber, tx?: CallData): Promise<T>;
    		sendTransaction(_to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(_to: string, _value: BigNumber, tx?: TxData): Promise<number>;
    		request(_to: string, _value: BigNumber, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace totalSupply {
    
    	interface TransactionCallable<T> {
    		(tx?: CallData): Promise<T>;
    		call(tx?: CallData): Promise<T>;
    		sendTransaction(tx?: TxData): Promise<TransactionResult>;
    		estimateGas(tx?: TxData): Promise<number>;
    		request(tx?: TxData): Promise<Request>;
    	}
    }    
    namespace symbol {
    
    	interface TransactionCallable<T> {
    		(tx?: CallData): Promise<T>;
    		call(tx?: CallData): Promise<T>;
    		sendTransaction(tx?: TxData): Promise<TransactionResult>;
    		estimateGas(tx?: TxData): Promise<number>;
    		request(tx?: TxData): Promise<Request>;
    	}
    }    
    namespace decimals {
    
    	interface TransactionCallable<T> {
    		(tx?: CallData): Promise<T>;
    		call(tx?: CallData): Promise<T>;
    		sendTransaction(tx?: TxData): Promise<TransactionResult>;
    		estimateGas(tx?: TxData): Promise<number>;
    		request(tx?: TxData): Promise<Request>;
    	}
    }    
    namespace transfer {
    
    	interface TransactionCallable<T> {
    		(_to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		call(_to: string, _value: BigNumber, tx?: CallData): Promise<T>;
    		sendTransaction(_to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(_to: string, _value: BigNumber, tx?: TxData): Promise<number>;
    		request(_to: string, _value: BigNumber, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace transferFrom {
    
    	interface TransactionCallable<T> {
    		(_from: string, _to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		call(_from: string, _to: string, _value: BigNumber, tx?: CallData): Promise<T>;
    		sendTransaction(_from: string, _to: string, _value: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(_from: string, _to: string, _value: BigNumber, tx?: TxData): Promise<number>;
    		request(_from: string, _to: string, _value: BigNumber, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace getAccount {
    
    	interface TransactionCallable<T> {
    		(account: string, tx?: CallData): Promise<T>;
    		call(account: string, tx?: CallData): Promise<T>;
    		sendTransaction(account: string, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(account: string, tx?: TxData): Promise<number>;
    		request(account: string, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace balanceEth {
    
    	interface TransactionCallable<T> {
    		(_address: string, tx?: CallData): Promise<T>;
    		call(_address: string, tx?: CallData): Promise<T>;
    		sendTransaction(_address: string, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(_address: string, tx?: TxData): Promise<number>;
    		request(_address: string, tx?: TxData): Promise<Request>;
    	}
    }}

export type FakeCoinEventArgs =
    | FakeCoinTransferEventArgs;

export enum FakeCoinEvents {
    Transfer = 'Transfer',
}

export interface FakeCoinTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BigNumber;
}

export interface FakeCoinInstance extends DeployedContract { 
    balanceOf: FakeCoinInstanceInternal.balanceOf.TransactionCallable<BigNumber>;
    mint: FakeCoinInstanceInternal.mint.TransactionCallable<void>;
    totalSupply: FakeCoinInstanceInternal.totalSupply.TransactionCallable<BigNumber>;
    symbol: FakeCoinInstanceInternal.symbol.TransactionCallable<string>;
    decimals: FakeCoinInstanceInternal.decimals.TransactionCallable<BigNumber>;
    transfer: FakeCoinInstanceInternal.transfer.TransactionCallable<boolean>;
    transferFrom: FakeCoinInstanceInternal.transferFrom.TransactionCallable<boolean>;
    getAccount: FakeCoinInstanceInternal.getAccount.TransactionCallable<[string, BigNumber]
>;
    balanceEth: FakeCoinInstanceInternal.balanceEth.TransactionCallable<BigNumber>;

    Transfer(value: BlockParamLiteral | EventFilterObject): EventFilterResult<FakeCoinTransferEventArgs>;
}

// tslint:disable:max-file-line-count
