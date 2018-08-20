"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FakeCoin = artifacts.require('FakeCoin');
const chai_1 = require("chai");
contract("FakeCoin", ([owner, ...others]) => {
    let coin;
    before(async () => {
        coin = await FakeCoin.deployed();
        // console.log(`### coin ${JSON.stringify(coin)}`)
    });
    describe("initial state", () => {
        it("read-only getters", async () => {
            chai_1.assert.equal((await coin.totalSupply()).toString(16), "0", "Initial totalSupply should be 0");
        });
        it("should mint tokens", async () => {
            const tx = await coin.mint(owner, web3.toBigNumber("10000"));
            console.log(`### ${JSON.stringify(tx, null, 4)}`);
        });
        it("should get estimated gas (mint)", async () => {
            console.log(`### ${await coin.mint.estimateGas(owner, web3.toBigNumber("1000"))}`);
        });
        it("should get estimated gas (totalSupply)", async () => {
            console.log(`### ${await coin.totalSupply.estimateGas()}`);
        });
        it("should get request (mint)", async () => {
            console.log(`### ${JSON.stringify(await coin.mint.request(owner, web3.toBigNumber("1000")), null, 4)}`);
        });
        it.skip("should get data (mint)", async () => {
            // console.log(`### ${await coin.mint.getData(owner, web3.toBigNumber("1000"))}`)
        });
        it("should get call (mint)", async () => {
            console.log(`### ${await coin.mint.call(owner, web3.toBigNumber("1000"))}`);
        });
        it("should get call (totalSupply)", async () => {
            console.log(`### ${await coin.totalSupply.call()}`);
        });
        it("should mint tokens for other account", async () => {
            const tx = await coin.mint(others[0], web3.toBigNumber("10000"), { from: others[0] });
            console.log(`### ${JSON.stringify(tx, null, 4)}`);
        });
        it("should mint with sendTransaction tokens for other account", async () => {
            const tx = await coin.mint.sendTransaction(others[0], web3.toBigNumber("10000"), { from: others[0] });
            console.log(`### ${JSON.stringify(tx, null, 4)}`);
        });
        it("should get sendTransaction (totalSupply)", async () => {
            console.log(`### ${await coin.totalSupply.sendTransaction()}`);
        });
        it("should be able to create new instance of FakeCoin", async () => {
            // const newCoin = await FakeCoinInstance.newContract({ from: owner })
            // console.log(`## new coin: ${newCoin}`)
        });
    });
});
contract("FakeCoin: second context", accounts => {
});
