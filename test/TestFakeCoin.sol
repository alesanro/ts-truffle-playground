pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/FakeCoin.sol";


contract TestFakeCoin {

    function testInitialBalanceUsingDeployedContract() public {
        FakeCoin coin = FakeCoin(DeployedAddresses.FakeCoin());

        Assert.equal(coin.totalSupply(), 0, "Coin should not have any supply initially");
    }
}