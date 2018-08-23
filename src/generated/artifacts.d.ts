import { TruffleContract } from 'truffle-contract';
import { TruffleArtifacts } from 'truffle';
import { 
    FakeCoinInstance,
    MigrationsInstance
} from './contracts'

export interface TruffleArtifacts {
	require(name: 'FakeCoin'): TruffleContract<FakeCoinInstance>;
	require(name: 'Migrations'): TruffleContract<MigrationsInstance>;
}