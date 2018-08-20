// // tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// // tslint:disable:no-unused-variable

// /* istanbul ignore next */
// // tslint:disable:no-parameter-reassignment
// // tslint:disable-next-line:class-name

// declare module "FakeCoinInstance" {

//     import { Tx, TransactionObject } from "web3/eth/types";
//     import { BaseContractInstance, TransactionResult, Request } from 'truffle'

//     namespace FakeCoinInstanceInternal {

//         namespace TotalSupply {

//             type TotalSupplyArgsFunction<T> = (tx?: Tx) => Promise<T>

//             interface TransactionCallable<T> {
//                 request(tx?: Tx): Promise<Request>;
//                 call(tx?: Tx): Promise<T>;
//                 sendTransaction(tx?: Tx): Promise<TransactionResult>;
//                 estimateGas(tx?: Tx): Promise<number>;
//             }

//             interface FunctionResult<T> extends TotalSupplyArgsFunction<T>, TransactionCallable<T> {}
//         }

//         namespace Mint {

//             type MintArgsFunction<T> = (to: Address, amount: AmountValue, tx?: Tx) => Promise<TransactionResult>

//             interface TransactionCallable<T> {
//                 request(to: Address, amount: AmountValue, tx?: Tx): Promise<Request>;
//                 call(to: Address, amount: AmountValue, tx?: Tx): Promise<T>;
//                 sendTransaction(to: Address, amount: AmountValue, tx?: Tx): Promise<TransactionResult>;
//                 estimateGas(to: Address, amount: AmountValue, tx?: Tx): Promise<number>;
//             }

//             interface FunctionResult extends MintArgsFunction<void>, TransactionCallable<void> {}
//         }
//     }

//     namespace FaceCoinInstance {
//     }

//     interface FakeCoinInstance extends BaseContractInstance {    
//         totalSupply: FakeCoinInstanceInternal.TotalSupply.FunctionResult<number>
//         mint: FakeCoinInstanceInternal.Mint.FunctionResult

//     } // tslint:disable:max-file-line-count

//     export = FakeCoinInstance
// }
    
