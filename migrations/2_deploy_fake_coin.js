const FakeCoin = artifacts.require("FakeCoin");

module.exports = deployer => {
    deployer.then(async () => {
      await deployer.deploy(FakeCoin)
    })
};
