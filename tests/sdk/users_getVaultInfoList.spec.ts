import { test, expect } from '@playwright/test';
import { sdk } from '../../utils';
import { getVaultInfoList } from '../../testData/getVaultInfoList';

test.describe('Summer.fi SDK - Armada Users API', () => {
	test('sdk.armada.users.getVaultInfoList response should match snapshot', async () => {
		// Call the API
		const response = await sdk.armada.users.getVaultInfoList({
			chainId: 1,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();

		expect(response).toMatchObject(getVaultInfoList);
	});
});
