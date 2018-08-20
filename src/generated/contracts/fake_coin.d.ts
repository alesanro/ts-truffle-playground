// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable

// tslint:enable:no-unused-variable



declare module "FakeCoinInstance" {
	
	import BigNumber from "bignumber.js"
    import { TxData as Tx } from 'web3'
    import { BaseContractInstance, TransactionResult, Request } from 'truffle';

    namespace FakeCoinInstanceInternal {

          
        namespace balanceOf {
        
        	type balanceOfArgsFunction<T> = (tx?: Tx) => Promise<T>
        
        	interface TransactionCallable<T> {
        		request(tx?: Tx): Promise<Request>;
        		call(tx?: Tx): Promise<T>;
        		sendTransaction(tx?: Tx): Promise<TransactionResult>;
        		estimateGas(tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<T> extends balanceOfArgsFunction<T>, TransactionCallable<T> {}
        }                          
        namespace mint {
        	type mintArgsFunction<T> = (_to: string, _value: BigNumber,  tx?: Tx) => Promise<TransactionResult>
        
        	interface TransactionCallable<T> {
        		request(_to: string, _value: BigNumber,  tx?: Tx): Promise<Request>;
        		call(_to: string, _value: BigNumber,  tx?: Tx): Promise<T>;
        		sendTransaction(_to: string, _value: BigNumber,  tx?: Tx): Promise<TransactionResult>;
        		estimateGas(_to: string, _value: BigNumber,  tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<M> extends mintArgsFunction<M>, TransactionCallable<M> {}
        }          
        namespace totalSupply {
        
        	type totalSupplyArgsFunction<T> = (tx?: Tx) => Promise<T>
        
        	interface TransactionCallable<T> {
        		request(tx?: Tx): Promise<Request>;
        		call(tx?: Tx): Promise<T>;
        		sendTransaction(tx?: Tx): Promise<TransactionResult>;
        		estimateGas(tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<T> extends totalSupplyArgsFunction<T>, TransactionCallable<T> {}
        }                  
        namespace symbol {
        
        	type symbolArgsFunction<T> = (tx?: Tx) => Promise<T>
        
        	interface TransactionCallable<T> {
        		request(tx?: Tx): Promise<Request>;
        		call(tx?: Tx): Promise<T>;
        		sendTransaction(tx?: Tx): Promise<TransactionResult>;
        		estimateGas(tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<T> extends symbolArgsFunction<T>, TransactionCallable<T> {}
        }                  
        namespace decimals {
        
        	type decimalsArgsFunction<T> = (tx?: Tx) => Promise<T>
        
        	interface TransactionCallable<T> {
        		request(tx?: Tx): Promise<Request>;
        		call(tx?: Tx): Promise<T>;
        		sendTransaction(tx?: Tx): Promise<TransactionResult>;
        		estimateGas(tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<T> extends decimalsArgsFunction<T>, TransactionCallable<T> {}
        }                          
        namespace transfer {
        	type transferArgsFunction<T> = (_to: string, _value: BigNumber,  tx?: Tx) => Promise<TransactionResult>
        
        	interface TransactionCallable<T> {
        		request(_to: string, _value: BigNumber,  tx?: Tx): Promise<Request>;
        		call(_to: string, _value: BigNumber,  tx?: Tx): Promise<T>;
        		sendTransaction(_to: string, _value: BigNumber,  tx?: Tx): Promise<TransactionResult>;
        		estimateGas(_to: string, _value: BigNumber,  tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<M> extends transferArgsFunction<M>, TransactionCallable<M> {}
        }                  
        namespace transferFrom {
        	type transferFromArgsFunction<T> = (_from: string, _to: string, _value: BigNumber,  tx?: Tx) => Promise<TransactionResult>
        
        	interface TransactionCallable<T> {
        		request(_from: string, _to: string, _value: BigNumber,  tx?: Tx): Promise<Request>;
        		call(_from: string, _to: string, _value: BigNumber,  tx?: Tx): Promise<T>;
        		sendTransaction(_from: string, _to: string, _value: BigNumber,  tx?: Tx): Promise<TransactionResult>;
        		estimateGas(_from: string, _to: string, _value: BigNumber,  tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<M> extends transferFromArgsFunction<M>, TransactionCallable<M> {}
        }          
        namespace balanceEth {
        
        	type balanceEthArgsFunction<T> = (tx?: Tx) => Promise<T>
        
        	interface TransactionCallable<T> {
        		request(tx?: Tx): Promise<Request>;
        		call(tx?: Tx): Promise<T>;
        		sendTransaction(tx?: Tx): Promise<TransactionResult>;
        		estimateGas(tx?: Tx): Promise<number>;
        	}
        
        	interface FunctionResult<T> extends balanceEthArgsFunction<T>, TransactionCallable<T> {}
        }            }


    interface FakeCoinInstance extends BaseContractInstance { 
        balanceOf: FakeCoinInstanceInternal.balanceOf.FunctionResult<BigNumber
>;
        mint: FakeCoinInstanceInternal.mint.FunctionResult<void>;
        totalSupply: FakeCoinInstanceInternal.totalSupply.FunctionResult<BigNumber
>;
        symbol: FakeCoinInstanceInternal.symbol.FunctionResult<string
>;
        decimals: FakeCoinInstanceInternal.decimals.FunctionResult<BigNumber
>;
        transfer: FakeCoinInstanceInternal.transfer.FunctionResult<boolean
>;
        transferFrom: FakeCoinInstanceInternal.transferFrom.FunctionResult<boolean
>;
        balanceEth: FakeCoinInstanceInternal.balanceEth.FunctionResult<BigNumber
>;
	}
	
	export = FakeCoinInstance;
} // tslint:disable:max-file-line-count
