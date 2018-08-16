"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
const base_contract_1 = require("@0xproject/base-contract");
const utils_1 = require("@0xproject/utils");
const web3_wrapper_1 = require("@0xproject/web3-wrapper");
const ethers = __importStar(require("ethers"));
const _ = __importStar(require("lodash"));
// tslint:enable:no-unused-variable
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
class MigrationsContract extends base_contract_1.BaseContract {
    constructor(abi, address, provider, txDefaults) {
        super('Migrations', abi, address, provider, txDefaults);
        this.last_completed_migration = {
            async callAsync(callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'last_completed_migration()';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.last_completed_migration();
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'last_completed_migration' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.owner = {
            async callAsync(callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'owner()';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.owner();
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'owner' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.setCompleted = {
            async sendTransactionAsync(completed, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
                [completed
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [completed
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [completed
                ]);
                const encodedData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(completed).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults(), self.setCompleted.estimateGasAsync.bind(self, completed));
                const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                return txHash;
            },
            async estimateGasAsync(completed, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
                [completed
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [completed
                ], base_contract_1.BaseContract._bigNumberToString);
                const encodedData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(completed).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                return gas;
            },
            getABIEncodedTransactionData(completed) {
                const self = this;
                const inputAbi = self._lookupAbi('setCompleted(uint256)').inputs;
                [completed
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [completed
                ], base_contract_1.BaseContract._bigNumberToString);
                const abiEncodedTransactionData = self._lookupEthersInterface('setCompleted(uint256)').functions.setCompleted(completed).data;
                return abiEncodedTransactionData;
            },
            async callAsync(completed, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'setCompleted(uint256)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [completed
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [completed
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [completed
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.setCompleted(completed);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'setCompleted' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray;
            },
        };
        this.upgrade = {
            async sendTransactionAsync(new_address, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('upgrade(address)').inputs;
                [new_address
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [new_address
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [new_address
                ]);
                const encodedData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(new_address).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults(), self.upgrade.estimateGasAsync.bind(self, new_address));
                const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                return txHash;
            },
            async estimateGasAsync(new_address, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('upgrade(address)').inputs;
                [new_address
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [new_address
                ], base_contract_1.BaseContract._bigNumberToString);
                const encodedData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(new_address).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                return gas;
            },
            getABIEncodedTransactionData(new_address) {
                const self = this;
                const inputAbi = self._lookupAbi('upgrade(address)').inputs;
                [new_address
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [new_address
                ], base_contract_1.BaseContract._bigNumberToString);
                const abiEncodedTransactionData = self._lookupEthersInterface('upgrade(address)').functions.upgrade(new_address).data;
                return abiEncodedTransactionData;
            },
            async callAsync(new_address, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'upgrade(address)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [new_address
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [new_address
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [new_address
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.upgrade(new_address);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'upgrade' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray;
            },
        };
        utils_1.classUtils.bindAll(this, ['_ethersInterfacesByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
    static async deployFrom0xArtifactAsync(artifact, provider, txDefaults) {
        if (_.isUndefined(artifact.compilerOutput)) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return MigrationsContract.deployAsync(bytecode, abi, provider, txDefaults);
    }
    static async deployAsync(bytecode, abi, provider, txDefaults) {
        const constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
        [] = base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
        const txData = ethers.Contract.getDeployTransaction(bytecode, abi);
        const web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
        const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync(txData, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper));
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        utils_1.logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        utils_1.logUtils.log(`Migrations successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new MigrationsContract(abi, txReceipt.contractAddress, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
} // tslint:disable:max-file-line-count
exports.MigrationsContract = MigrationsContract;
