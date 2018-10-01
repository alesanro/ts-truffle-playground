// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
import BigNumber from "bignumber.js";
import { TxData, TxDataPayable, CallData, BlockParamLiteral, DecodedLogArgs, EventFilterObject, EventFilterResult } from "web3";
import { DeployedContract, TransactionResult, Request } from 'truffle-contract';
// tslint:enable:no-unused-variable


declare namespace MigrationsInstanceInternal {

    
    namespace last_completed_migration {
    
    	interface TransactionCallable<T> {
    		(tx?: CallData): Promise<T>;
    		call(tx?: CallData): Promise<T>;
    		sendTransaction(tx?: TxData): Promise<TransactionResult>;
    		estimateGas(tx?: TxData): Promise<number>;
    		request(tx?: TxData): Promise<Request>;
    	}
    }    
    namespace owner {
    
    	interface TransactionCallable<T> {
    		(tx?: CallData): Promise<T>;
    		call(tx?: CallData): Promise<T>;
    		sendTransaction(tx?: TxData): Promise<TransactionResult>;
    		estimateGas(tx?: TxData): Promise<number>;
    		request(tx?: TxData): Promise<Request>;
    	}
    }    
    namespace setCompleted {
    
    	interface TransactionCallable<T> {
    		(completed: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		call(completed: BigNumber, tx?: CallData): Promise<T>;
    		sendTransaction(completed: BigNumber, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(completed: BigNumber, tx?: TxData): Promise<number>;
    		request(completed: BigNumber, tx?: TxData): Promise<Request>;
    	}
    }    
    namespace upgrade {
    
    	interface TransactionCallable<T> {
    		(new_address: string, tx?: TxData): Promise<TransactionResult>;
    		call(new_address: string, tx?: CallData): Promise<T>;
    		sendTransaction(new_address: string, tx?: TxData): Promise<TransactionResult>;
    		estimateGas(new_address: string, tx?: TxData): Promise<number>;
    		request(new_address: string, tx?: TxData): Promise<Request>;
    	}
    }}


export interface MigrationsInstance extends DeployedContract { 
    last_completed_migration: MigrationsInstanceInternal.last_completed_migration.TransactionCallable<BigNumber>;
    owner: MigrationsInstanceInternal.owner.TransactionCallable<string>;
    setCompleted: MigrationsInstanceInternal.setCompleted.TransactionCallable<void>;
    upgrade: MigrationsInstanceInternal.upgrade.TransactionCallable<void>;

}

// tslint:disable:max-file-line-count
