const FakeCoin = artifacts.require("FakeCoin")

import { assert } from "chai";

contract("FakeCoin", accounts => {

	let coin: FakeCoinInstance

	before(async () => {
		coin = await FakeCoin.deployed()
	})

	describe("initial state", () => {

		it("read-only getters", async () => {
			assert.equal((await coin.totalSupply()).toString(16), "0", "Initial totalSupply should be 0")
		})
	})
})


contract("FakeCoin: second context", accounts => {

})