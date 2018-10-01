// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
import BigNumber from "bignumber.js";
import { TxData as Tx, DecodedLogArgs } from "web3";
import { DeployedContract, TransactionResult, Request } from 'truffle-contract';
// tslint:enable:no-unused-variable


declare namespace MigrationsInstanceInternal {

    
    namespace last_completed_migration {
    
    	interface TransactionCallable<T> {
    		( tx?: Tx): Promise<T>;
    		call( tx?: Tx): Promise<T>;
    		sendTransaction( tx?: Tx): Promise<TransactionResult>;
    		estimateGas( tx?: Tx): Promise<number>;
    		request( tx?: Tx): Promise<Request>;
    	}
    }    
    namespace owner {
    
    	interface TransactionCallable<T> {
    		( tx?: Tx): Promise<T>;
    		call( tx?: Tx): Promise<T>;
    		sendTransaction( tx?: Tx): Promise<TransactionResult>;
    		estimateGas( tx?: Tx): Promise<number>;
    		request( tx?: Tx): Promise<Request>;
    	}
    }    
    namespace setCompleted {
    
    	interface TransactionCallable<T> {
    		(completed: BigNumber,  tx?: Tx): Promise<TransactionResult>;
    		call(completed: BigNumber,  tx?: Tx): Promise<T>;
    		sendTransaction(completed: BigNumber,  tx?: Tx): Promise<TransactionResult>;
    		estimateGas(completed: BigNumber,  tx?: Tx): Promise<number>;
    		request(completed: BigNumber,  tx?: Tx): Promise<Request>;
    	}
    }    
    namespace upgrade {
    
    	interface TransactionCallable<T> {
    		(new_address: string,  tx?: Tx): Promise<TransactionResult>;
    		call(new_address: string,  tx?: Tx): Promise<T>;
    		sendTransaction(new_address: string,  tx?: Tx): Promise<TransactionResult>;
    		estimateGas(new_address: string,  tx?: Tx): Promise<number>;
    		request(new_address: string,  tx?: Tx): Promise<Request>;
    	}
    }}


export interface MigrationsInstance extends DeployedContract { 
    last_completed_migration: MigrationsInstanceInternal.last_completed_migration.TransactionCallable<BigNumber>;
    owner: MigrationsInstanceInternal.owner.TransactionCallable<string>;
    setCompleted: MigrationsInstanceInternal.setCompleted.TransactionCallable<void>;
    upgrade: MigrationsInstanceInternal.upgrade.TransactionCallable<void>;
}

// tslint:disable:max-file-line-count
