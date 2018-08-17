
declare type Callback<T> = (err: Error | null, value: T) => void;

declare type Address = string;

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'truffle' {
  import { Tx } from 'web3/eth/types';

  namespace truffle {
    
    type ContractCallback = (
      this: Mocha.ISuiteCallbackContext,
      accounts: Address[]
    ) => void;

    type ContractContextDefinition = (
      description: string,
      callback: ContractCallback
    ) => Mocha.ISuite;

    interface ContractBase {
      address: Address;
      sendTransaction(Tx: Tx): Promise<TransactionResult>;
    }

    interface Contract<T> extends ContractBase {
      at(address: Address): Promise<T>;
      deployed(): Promise<T>;
    }

    interface AnyContract extends Contract<any> {
      'new'(...args: any[]): Promise<any>;
    }

    interface TruffleArtifacts {
      require(name: string): AnyContract;
    }

    type TransactionReceipt = {
      transactionHash: string;
      transactionIndex: number;
      blockHash: string;
      blockNumber: number;
      gasUsed: number;
      cumulativeGasUsed: number;
      contractAddress: Address | null;
      logs: [TransactionLog];
    };

    type TransactionLog = {
      logIndex: number;
      transactionIndex: number;
      transactionHash: string;
      blockHash: string;
      blockNumber: number;
      address: Address;
      type: string;
      event: string;
      args: any;
    };

    type TransactionResult = {
      tx: string;
      receipt: TransactionReceipt;
      logs: [TransactionLog];
    };

    interface Deployer extends Promise<void> {
      deploy(object: ContractBase, ...args: any[]): Promise<void>;

      link(
        library: ContractBase,
        contracts: ContractBase | [ContractBase]
      ): Promise<void>;
    }
  }

  export = truffle;
}