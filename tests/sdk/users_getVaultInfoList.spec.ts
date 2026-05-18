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

test.describe.only('getVaultInfoList - Negative scenarios ', () => {
	test('"chainId" undefined', async () => {
		try {
			await sdk.armada.users.getVaultInfoList({
				// @ts-ignore
				chainId: undefined,
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
				path: ['chainId'],
			});
		}
	});

	test('"chainId" out of range', async () => {
		try {
			await sdk.armada.users.getVaultInfoList({
				// @ts-ignore
				chainId: 5555,
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
				path: ['chainId'],
			});
		}
	});

	test('"chainId" type as a string', async () => {
		try {
			await sdk.armada.users.getVaultInfoList({
				// @ts-ignore
				chainId: '1',
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
				path: ['chainId'],
			});
		}
	});
});
