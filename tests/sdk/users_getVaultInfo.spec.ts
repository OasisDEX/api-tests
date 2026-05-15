import { test, expect } from '@playwright/test';
import { IArmadaVaultInfo, ArmadaVaultId, IArmadaVaultId } from '@summer_fi/sdk-client';
import { sdk } from '../../utils';
import {
	getVaultInfoBaseETH,
	getVaultInfoBaseEURC,
	getVaultInfoBaseUSDC,
	getVaultInfoMainnetDaoETH,
} from '../../testData/getVaultInfo';

let mainnetVaultsInfo: {
	list: IArmadaVaultInfo[];
};
let baseVaultsInfo: {
	list: IArmadaVaultInfo[];
};

test.describe('getVaultInfo - Mainnet ', () => {
	test.beforeAll(async () => {
		// Get Mainnet vaults list info
		mainnetVaultsInfo = await sdk.armada.users.getVaultInfoList({
			chainId: 1,
		});
	});

	test('Response for Mainnet DAO ETH should match snapshot', async () => {
		// Call the API with Mainnet ETH vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[0].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetDaoETH);
	});
});

test.describe('getVaultInfo - Base ', () => {
	test.beforeAll(async () => {
		// Get Base vaults list info
		baseVaultsInfo = await sdk.armada.users.getVaultInfoList({
			chainId: 8453,
		});
	});

	test('Response for Base ETH should match snapshot', async () => {
		// Call the API with Base ETH vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: baseVaultsInfo.list[0].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoBaseETH);
	});

	test('Response for Base EURC should match snapshot', async () => {
		// Call the API with Base EURC vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: baseVaultsInfo.list[1].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoBaseEURC);
	});

	test('Response for Base USDC should match snapshot', async () => {
		// Call the API with Base USDC vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: baseVaultsInfo.list[2].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoBaseUSDC);
	});
});
