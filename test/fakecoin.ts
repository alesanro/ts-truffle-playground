// const FakeCoin = artifacts.require("FakeCoin")
import { FakeCoinContract } from "../src/contracts/generated/fake_coin"
import { artifacts } from "../src/contracts/utils/artifacts";
import { Web3Wrapper } from "@0xproject/web3-wrapper";

import { logUtils } from "@0xproject/utils";

import { assert } from "chai";

contract("FakeCoin", accounts => {

	let coin: FakeCoinContract

	before(async () => {
		logUtils.log(`## ${artifacts.FakeCoinArtifact}`)
		// coin = await FakeCoinContract.deployFrom0xArtifactAsync()
	})

	// describe("initial state", () => {

	// 	it("read-only getters", async () => {
	// 		assert.equal((await coin.totalSupply.callAsync()).toString(16), "0", "Initial totalSupply should be 0")
	// 	})
	// })
})


contract("FakeCoin: second context", accounts => {

})