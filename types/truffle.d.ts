declare type Address = string;
declare type AmountValue = string | number

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'truffle' {
  import { Tx } from 'web3/eth/types';
  import { TransactionReceipt } from 'web3/types';
  
  
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
      sendTransaction(tx?: Tx): Promise<TransactionResult>;
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

    interface Request {
      method: 'eth_call' | 'eth_sendTransaction';
      params: RequestParameter[];
    }

    interface RequestParameter {
      to: Address;
      data: string;
    }

    interface Deployer extends Promise<void> {
      deploy(object: ContractBase, ...args: any[]): Promise<void>;

      link(
        library: ContractBase,
        contracts: ContractBase | [ContractBase]
      ): Promise<void>;
    }

    interface BaseContractInstance {
      address: Address
    }
  }

  export = truffle;
}