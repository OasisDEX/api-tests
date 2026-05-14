import { test, expect } from '@playwright/test';
import { sdk } from '../../utils';
import {
	getVaultInfoListArbitrum,
	getVaultInfoListBase,
	getVaultInfoListMainnet,
	getVaultInfoListSonic,
} from '../../testData/getVaultInfoList';

test.describe('getVaultInfoList', () => {
	test('Response on Mainnet should match snapshot', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 1,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();

		expect(response).toMatchObject(getVaultInfoListMainnet);
	});

	test('Response on Base should match snapshot', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 8453,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();

		expect(response).toMatchObject(getVaultInfoListBase);
	});

	test('Response on Arbitrum should match snapshot', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 42161,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();

		expect(response).toMatchObject(getVaultInfoListArbitrum);
	});

	test('Response on Sonic should match snapshot', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 146,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();

		expect(response).toMatchObject(getVaultInfoListSonic);
	});
});
