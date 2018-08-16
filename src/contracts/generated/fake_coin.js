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
var FakeCoinEvents;
(function (FakeCoinEvents) {
    FakeCoinEvents["Transfer"] = "Transfer";
})(FakeCoinEvents = exports.FakeCoinEvents || (exports.FakeCoinEvents = {}));
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
class FakeCoinContract extends base_contract_1.BaseContract {
    constructor(abi, address, provider, txDefaults) {
        super('FakeCoin', abi, address, provider, txDefaults);
        this.balanceOf = {
            async callAsync(index_0, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'balanceOf(address)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [index_0
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [index_0
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [index_0
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceOf(index_0);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'balanceOf' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.mint = {
            async sendTransactionAsync(_to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                    _value
                ]);
                const encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(_to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults(), self.mint.estimateGasAsync.bind(self, _to, _value));
                const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                return txHash;
            },
            async estimateGasAsync(_to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const encodedData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(_to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                return gas;
            },
            getABIEncodedTransactionData(_to, _value) {
                const self = this;
                const inputAbi = self._lookupAbi('mint(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const abiEncodedTransactionData = self._lookupEthersInterface('mint(address,uint256)').functions.mint(_to, _value).data;
                return abiEncodedTransactionData;
            },
            async callAsync(_to, _value, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'mint(address,uint256)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                    _value
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.mint(_to, _value);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'mint' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray;
            },
        };
        this.totalSupply = {
            async callAsync(callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'totalSupply()';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.totalSupply();
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'totalSupply' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.symbol = {
            async callAsync(callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'symbol()';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.symbol();
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'symbol' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.decimals = {
            async callAsync(callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'decimals()';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, []);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.decimals();
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'decimals' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.transfer = {
            async sendTransactionAsync(_to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                    _value
                ]);
                const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer(_to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults(), self.transfer.estimateGasAsync.bind(self, _to, _value));
                const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                return txHash;
            },
            async estimateGasAsync(_to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const encodedData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer(_to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                return gas;
            },
            getABIEncodedTransactionData(_to, _value) {
                const self = this;
                const inputAbi = self._lookupAbi('transfer(address,uint256)').inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const abiEncodedTransactionData = self._lookupEthersInterface('transfer(address,uint256)').functions.transfer(_to, _value).data;
                return abiEncodedTransactionData;
            },
            async callAsync(_to, _value, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'transfer(address,uint256)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [_to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_to,
                    _value
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transfer(_to, _value);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'transfer' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.transferFrom = {
            async sendTransactionAsync(_from, _to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                [_from,
                    _to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                    _to,
                    _value
                ]);
                const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults(), self.transferFrom.estimateGasAsync.bind(self, _from, _to, _value));
                const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                return txHash;
            },
            async estimateGasAsync(_from, _to, _value, txData = {}) {
                const self = this;
                const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                [_from,
                    _to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const encodedData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _value).data;
                const txDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...txData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                return gas;
            },
            getABIEncodedTransactionData(_from, _to, _value) {
                const self = this;
                const inputAbi = self._lookupAbi('transferFrom(address,address,uint256)').inputs;
                [_from,
                    _to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString);
                const abiEncodedTransactionData = self._lookupEthersInterface('transferFrom(address,address,uint256)').functions.transferFrom(_from, _to, _value).data;
                return abiEncodedTransactionData;
            },
            async callAsync(_from, _to, _value, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'transferFrom(address,address,uint256)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [_from,
                    _to,
                    _value
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_from,
                    _to,
                    _value
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_from,
                    _to,
                    _value
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.transferFrom(_from, _to, _value);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'transferFrom' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
            },
        };
        this.balanceEth = {
            async callAsync(_address, callData = {}, defaultBlock) {
                const self = this;
                const functionSignature = 'balanceEth(address)';
                const inputAbi = self._lookupAbi(functionSignature).inputs;
                [_address
                ] = base_contract_1.BaseContract._formatABIDataItemList(inputAbi, [_address
                ], base_contract_1.BaseContract._bigNumberToString.bind(self));
                base_contract_1.BaseContract.strictArgumentEncodingCheck(inputAbi, [_address
                ]);
                const ethersFunction = self._lookupEthersInterface(functionSignature).functions.balanceEth(_address);
                const encodedData = ethersFunction.data;
                const callDataWithDefaults = await base_contract_1.BaseContract._applyDefaultsToTxDataAsync({
                    to: self.address,
                    ...callData,
                    data: encodedData,
                }, self._web3Wrapper.getContractDefaults());
                const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
                let resultArray = ethersFunction.parse(rawCallResult);
                const outputAbi = _.find(self.abi, { name: 'balanceEth' }).outputs;
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._lowercaseAddress.bind(this));
                resultArray = base_contract_1.BaseContract._formatABIDataItemList(outputAbi, resultArray, base_contract_1.BaseContract._bnToBigNumber.bind(this));
                return resultArray[0];
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
        return FakeCoinContract.deployAsync(bytecode, abi, provider, txDefaults);
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
        utils_1.logUtils.log(`FakeCoin successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new FakeCoinContract(abi, txReceipt.contractAddress, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
    }
} // tslint:disable:max-file-line-count
exports.FakeCoinContract = FakeCoinContract;
