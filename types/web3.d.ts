import Web3 from 'web3'
import { BigNumber } from 'bignumber.js';

declare module 'web3' {

    export interface TxDataPayable extends TxData {
        value?: BigNumber;
    }
    
    export type ContractEventArg = string | BigNumber | number | boolean;

    export interface DecodedLogArgs {
        [argName: string]: ContractEventArg;
    }

    export interface LogWithDecodedArgs<ArgsType extends DecodedLogArgs> extends DecodedLogEntry<ArgsType> {}
    export type RawLog = LogEntry;

    export enum BlockParamLiteral {
        Earliest = 'earliest',
        Latest = 'latest',
        Pending = 'pending',
    }

    export interface DecodedLogEntry<A> extends LogEntry {
        event: string;
        args: A;
    }
    
    export interface DecodedLogEntryEvent<A> extends DecodedLogEntry<A> {
        removed: boolean;
    }
    
    export interface LogEntryEvent extends LogEntry {
        removed: boolean;
    }
}