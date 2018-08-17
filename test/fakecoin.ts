

import Web3 = require('web3')
import { ContractContextDefinition } from 'truffle';

declare const web3: Web3;

// declare const artifacts: SignHashArtifacts;
// declare const contract: ContractContextDefinition;

// const FakeCoin = artifacts.require("FakeCoin")

declare const contract: ContractContextDefinition;

import { assert } from "chai";

contract("FakeCoin", accounts => {

	// let coin: FakeCoinInstance

	before(async () => {
		// coin = await FakeCoin.deployed()
	})

	describe("initial state", () => {

		it("read-only getters", async () => {
			// assert.equal((await coin.totalSupply()).toString(16), "0", "Initial totalSupply should be 0")
		})
	})
})


contract("FakeCoin: second context", accounts => {

})