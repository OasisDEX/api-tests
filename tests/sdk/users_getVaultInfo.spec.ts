import { expect, test } from '@playwright/test';
import { IArmadaVaultInfo } from '@summer_fi/sdk-client';
import {
	getVaultInfoBaseETH,
	getVaultInfoBaseEURC,
	getVaultInfoBaseUSDC,
	getVaultInfoMainnetBaETH_HR,
	getVaultInfoMainnetBaETH_LR,
	getVaultInfoMainnetBaUSDC_HR,
	getVaultInfoMainnetBaUSDC_LR,
	getVaultInfoMainnetBaUSDT,
	getVaultInfoMainnetDaoETH,
	getVaultInfoMainnetDaoUSDC,
} from '../../testData/getVaultInfo';
import { sdk } from '../../utils';

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
		// Call the API with Mainnet DAO ETH vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[0].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetDaoETH);
	});

	test('Response for Mainnet DAO USDC should match snapshot', async () => {
		// Call the API with Mainnet DAO USDC vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[5].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetDaoUSDC);
	});

	test('Response for Mainnet BA ETH HR should match snapshot', async () => {
		// Call the API with Mainnet BA ETH HR vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[2].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetBaETH_HR);
	});

	test('Response for Mainnet BA ETH LR should match snapshot', async () => {
		// Call the API with Mainnet BA ETH LR vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[3].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetBaETH_LR);
	});

	test('Response for Mainnet BA USDC LR should match snapshot', async () => {
		// Call the API with Mainnet BA USDC LR vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[4].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetBaUSDC_LR);
	});

	test('Response for Mainnet BA USDC HR should match snapshot', async () => {
		// Call the API with Mainnet BA USDC HR vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[6].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetBaUSDC_HR);
	});

	test('Response for Mainnet BA USDT should match snapshot', async () => {
		// Call the API with Mainnet BA USDT vault id
		const response = await sdk.armada.users.getVaultInfo({
			vaultId: mainnetVaultsInfo.list[1].id,
		});

		// Validate the response
		expect(response, 'The response should be defined').toBeDefined();
		expect(response).toMatchObject(getVaultInfoMainnetBaUSDT);
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

test.describe('getVaultInfo - Negative scenarios ', () => {
	test('"vaultId" undefined', async () => {
		try {
			await sdk.armada.users.getVaultInfo({
				// @ts-ignore
				vaultId: undefined,
			});
			// If no error is thrown, the test should fail
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('TRPCClientError');

			// Assert the TRPC error data
			expect(error.data).toMatchObject({
				code: 'BAD_REQUEST',
				httpStatus: 400,
			});

			// Assert the content of the error message (Zod validation error)
			const message = JSON.parse(error.message);
			expect(message[0]).toMatchObject({
				code: 'custom',
				message: 'Invalid input',
				path: ['vaultId'],
			});
		}
	});

	test('"vaultId" invalid', async () => {
		try {
			await sdk.armada.users.getVaultInfo({
				// @ts-ignore
				vaultId: '0x0000000000000000000000000000000000000000',
			});

			// If no error is thrown, the test should fail
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('TRPCClientError');

			// Assert the TRPC error data
			expect(error.data).toMatchObject({
				code: 'BAD_REQUEST',
				httpStatus: 400,
			});

			// Assert the content of the error message (Zod validation error)
			const message = JSON.parse(error.message);
			expect(message[0]).toMatchObject({
				code: 'custom',
				message: 'Invalid input',
				path: ['vaultId'],
			});
		}
	});
});
