
import { Contract as TruffleContract, TruffleArtifacts } from 'truffle';
import FakeCoinInstance from 'FakeCoinInstance'


export interface TruffleArtifacts {
	require(name: 'FakeCoin'): TruffleContract<FakeCoinInstance>;
}