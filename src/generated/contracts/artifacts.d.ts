
import { Contract as TruffleContract, TruffleArtifacts } from 'truffle';
import FakeCoinContract from 'FakeCoinInstance'


export interface TruffleArtifacts {
	require(name: 'FakeCoin'): TruffleContract<FakeCoinContract>;
}