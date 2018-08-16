declare type _contractTest = (accounts: string[]) => void;
declare type _testCaseBody = () => Promise<void>
declare function contract(name: string, test: _contractTest): void;

declare interface Contract<T> {
  "new"(): Promise<T>,
  deployed(): Promise<T>,
  at(address: string): T,
}

declare interface FakeCoinInstance {
	totalSupply(): Promise<number>;
}

interface Artifacts {
  require(name: "FakeCoin"): Contract<FakeCoinInstance>,
}

declare var artifacts: Artifacts;