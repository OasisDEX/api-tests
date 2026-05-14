import { test, expect } from '@playwright/test';
import { sdk } from '../../utils';

test.describe('Summer.fi SDK - Armada Users API', () => {
	test.only('sdk.armada.users.getVaultInfoList should return a list of vaults for Mainnet', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 1, // Mainnet
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toHaveProperty('list');
		expect(response.list, 'The response list should be an array').toBeInstanceOf(Array);
		expect(response.list.length, 'Expected to find 7 vaults').toEqual(7);

		// Validate that the first vault have the expected properties
		const firstVault = response.list[0];

		expect(firstVault).toHaveProperty('id');
		// console.log('First vault id: ', firstVault.id);

		expect(firstVault).toHaveProperty('token');
		// console.log('First vault token: ', firstVault.token);
	});
});
