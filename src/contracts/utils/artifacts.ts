import { ContractArtifact } from '@0xproject/sol-compiler';

import * as FakeCoinArtifact from "../../../build/contracts/FakeCoin.json";

export const artifacts = {
    FakeCoinArtifact: (FakeCoinArtifact as any) as ContractArtifact,
}