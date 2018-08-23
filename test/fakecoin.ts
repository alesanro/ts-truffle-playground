import Web3, { DecodedLogEntryEvent } from 'web3';
import { TruffleArtifacts } from '../src/generated/artifacts'
import { ContractContextDefinition } from 'truffle';
import { FakeCoinInstance, FakeCoinEvents, FakeCoinTransferEventArgs } from "../src/generated/contracts"

declare const web3: Web3;
declare const artifacts: TruffleArtifacts;
declare const contract: ContractContextDefinition;

const FakeCoin = artifacts.require('FakeCoin')

import { assert } from "chai";

contract("FakeCoin", ([ owner, ...others ]) => {

	let coin: FakeCoinInstance
	let transferEvent

	before(async () => {
		coin = await FakeCoin.deployed()

		transferEvent = coin.allEvents({ fromBlock: 9, toBlock: 'latest'})
		transferEvent.watch((e, result) => {
			console.log(`### [coin] Found event ${result.event}:`);
			console.log(`- data: ${result.data}`)
			// console.log(`- to: ${result.args.to}`)
			// console.log(`- value: ${result.args.value}`)
		})

		// console.log(`### coin ${JSON.stringify(coin)}`)
	})

	describe("initial state", () => {

		it("read-only getters", async () => {
			assert.equal((await coin.totalSupply()).toString(16), "0", "Initial totalSupply should be 0")
		})

		it("should mint tokens", async () => {
			const tx = await coin.mint(owner, web3.toBigNumber("10000"))
			const event = tx.logs[0] as DecodedLogEntryEvent<FakeCoinTransferEventArgs>
			console.log(`### ${FakeCoinEvents.Transfer} - from: ${event.args.from}, to: ${event.args.to}, value: ${event.args.value}`)
		})

		it("should get estimated gas (mint)", async () => {
			console.log(`### ${await coin.mint.estimateGas(owner, web3.toBigNumber("1000"))}`)
		})

		it("should get estimated gas (totalSupply)", async () => {
			console.log(`### ${await coin.totalSupply.estimateGas()}`)
		})

		it("should get request (mint)", async () => {
			console.log(`### ${JSON.stringify(await coin.mint.request(owner, web3.toBigNumber("1000")), null, 4)}`)
		})

		it.skip("should get data (mint)", async () => {
			// console.log(`### ${await coin.mint.getData(owner, web3.toBigNumber("1000"))}`)
		})

		it("should get call (mint)", async () => {
			console.log(`### ${await coin.mint.call(owner, web3.toBigNumber("1000"))}`)
		})

		it("should get call (totalSupply)", async () => {
			console.log(`### ${await coin.totalSupply.call()}`)
		})

		it("should mint tokens for other account", async () => {
			const tx = await coin.mint(others[0], web3.toBigNumber("10000"), { from: others[0] })
		})

		it("should mint with sendTransaction tokens for other account", async () => {
			await coin.mint.sendTransaction(others[0], web3.toBigNumber("10000"), { from: others[0] })
		})

		it("should get sendTransaction (totalSupply)", async () => {
			console.log(`### ${await coin.totalSupply.sendTransaction()}`)
		})

		it("should be able to create new instance of FakeCoin", async () => {
			// const newCoin = await FakeCoinInstance.newContract({ from: owner })
			// console.log(`## new coin: ${newCoin}`)
		})
	})
})


contract("FakeCoin: second context", accounts => {

})