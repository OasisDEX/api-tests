import { test, expect } from '@playwright/test';
import { sdk } from '../../utils';

const expectedResponse = (chainId: 1 | 8453) =>
	expect.arrayContaining([
		expect.objectContaining({
			chainId,
			fleetAddress: expect.any(String),
			rates: expect.objectContaining({
				dailyRates: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
						averageRate: expect.any(String),
						date: expect.any(String),
						fleetAddress: expect.any(String),
					}),
				]),
				hourlyRates: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
						averageRate: expect.any(String),
						date: expect.any(String),
						fleetAddress: expect.any(String),
					}),
				]),
				weeklyRates: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
						averageRate: expect.any(String),
						date: expect.any(String),
						fleetAddress: expect.any(String),
					}),
				]),
				latestRate: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(String),
						rate: expect.any(String),
						timestamp: expect.any(Number),
						fleetAddress: expect.any(String),
					}),
				]),
			}),
		}),
	]);

test.describe('getVaultsHistoricalRates', () => {
	test('Response for Mainnet vaults should match snapshot', async () => {
		const historicalRates = await sdk.armada.users.getVaultsHistoricalRates({
			fleets: [
				{
					fleetAddress: '0x0c1fbccc019320032d9acd193447560c8c632114',
					chainId: 1,
				},
				{
					fleetAddress: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
					chainId: 1,
				},
				{
					fleetAddress: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
					chainId: 1,
				},
				{
					fleetAddress: '0x67e536797570b3d8919df052484273815a0ab506',
					chainId: 1,
				},
				{
					fleetAddress: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
					chainId: 1,
				},
				{
					fleetAddress: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
					chainId: 1,
				},
				{
					fleetAddress: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
					chainId: 1,
				},
			],
		});

		// Validate the response
		expect(historicalRates, 'The response should be defined').toBeDefined();
		expect(historicalRates).toHaveLength(7);
		expect(historicalRates).toEqual(expectedResponse(1));
	});

	test('Response for Base vaults should match snapshot', async () => {
		const historicalRates = await sdk.armada.users.getVaultsHistoricalRates({
			fleets: [
				{
					fleetAddress: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
					chainId: 8453,
				},
				{
					fleetAddress: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
					chainId: 8453,
				},
				{
					fleetAddress: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
					chainId: 8453,
				},
			],
		});

		// Validate the response
		expect(historicalRates, 'The response should be defined').toBeDefined();
		expect(historicalRates).toHaveLength(3);
		expect(historicalRates).toEqual(expectedResponse(8453));
	});
});

test.describe('getVaultsHistoricalRates - Negative scenarios ', () => {
	test('"fleets" undefined', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				// @ts-ignore
				fleets: undefined,
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
				code: 'invalid_type',
				message: 'Required',
				path: ['fleets'],
			});
		}
	});

	test('"fleetAddress" undefined', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				fleets: [
					{
						fleetAddress: undefined,
						chainId: 1,
					},
				],
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
				path: ['fleets', 0, 'fleetAddress'],
			});
		}
	});

	test('"fleetAddress" invalid', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				fleets: [
					{
						fleetAddress: 1111111,
						chainId: 1,
					},
				],
			});

			// If no error is thrown, the test should fail
			throw new Error('Should have thrown an Error');
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
				path: ['fleets', 0, 'fleetAddress'],
			});
		}
	});

	test('"chainId" undefined', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				fleets: [
					{
						fleetAddress: '0x0c1fbccc019320032d9acd193447560c8c632114',
						// @ts-ignore
						chainId: undefined,
					},
				],
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
				path: ['fleets', 0, 'chainId'],
			});
		}
	});

	test('"chainId" out of range', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				fleets: [
					{
						fleetAddress: '0x0c1fbccc019320032d9acd193447560c8c632114',
						// @ts-ignore
						chainId: 5555,
					},
				],
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
				path: ['fleets', 0, 'chainId'],
			});
		}
	});

	test('"chainId" type as string', async () => {
		try {
			await sdk.armada.users.getVaultsHistoricalRates({
				fleets: [
					{
						fleetAddress: '0x0c1fbccc019320032d9acd193447560c8c632114',
						// @ts-ignore
						chainId: '1',
					},
				],
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
				path: ['fleets', 0, 'chainId'],
			});
		}
	});
});
