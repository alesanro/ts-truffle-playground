
import { TruffleContract } from 'truffle-contract';
import { TruffleArtifacts } from 'truffle';
import { FakeCoinInstance } from './generated'


export interface TruffleArtifacts {
	require(name: 'FakeCoin'): TruffleContract<FakeCoinInstance>;
}