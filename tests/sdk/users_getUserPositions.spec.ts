import { test, expect } from '@playwright/test';
import { User, ChainIds } from '@summer_fi/sdk-client';
import { sdk } from '../../utils';

const token = ({ chainId, name }: { chainId: 1 | 8453; name: 'Mainnet' | 'Base' }) => ({
	symbol: expect.any(String),
	name: expect.any(String),
	chainInfo: { chainId, name },
	address: {
		value: expect.any(String),
		type: 'Ethereum',
	},
	decimals: expect.any(Number),
});

const expectedResponse = ({ chainId, name }: { chainId: 1 | 8453; name: 'Mainnet' | 'Base' }) =>
	expect.arrayContaining([
		expect.objectContaining({
			type: 'Armada',
			id: expect.objectContaining({
				id: expect.stringContaining('0x10649c79428d718621821cf6299e91920284743f-'),
				type: 'Armada',
				user: expect.objectContaining({
					wallet: {
						address: {
							value: '0x10649c79428d718621821Cf6299e91920284743F',
							type: 'Ethereum',
						},
					},
					chainInfo: { chainId, name },
				}),
			}),
			pool: expect.objectContaining({
				type: 'Armada',
				id: expect.objectContaining({
					type: 'Armada',
					chainInfo: { chainId, name },
					fleetAddress: { value: expect.any(String), type: 'Ethereum' },
					protocol: {
						chainInfo: { chainId, name },
						name: 'Armada',
					},
				}),
			}),
			assets: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			assetPriceUSD: { fiat: 'USD', amount: expect.any(String) },
			assetsUSD: {
				fiat: 'USD',
				amount: expect.any(String),
			},
			shares: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			depositsAmount: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			depositsAmountUSD: {
				fiat: 'USD',
				amount: expect.any(String),
			},
			withdrawalsAmount: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			withdrawalsAmountUSD: { fiat: 'USD', amount: expect.any(String) },
			netDeposits: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			netDepositsUSD: { fiat: 'USD', amount: expect.any(String) },
			earnings: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			earningsUSD: { fiat: 'USD', amount: expect.any(String) },
			claimedSummerToken: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			claimableSummerToken: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			rewards: [
				{
					claimed: {
						token: token({ chainId, name }),
						amount: expect.any(String),
						_baseUnitFactor: expect.any(String),
					},
					claimable: {
						token: token({ chainId, name }),
						amount: expect.any(String),
						_baseUnitFactor: expect.any(String),
					},
				},
			],
			amount: {
				token: token({ chainId, name }),
				amount: expect.any(String),
				_baseUnitFactor: expect.any(String),
			},
			deposits: [],
			withdrawals: [],
		}),
	]);

test.describe('getUserPositions', () => {
	test('Mainnet positions', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		// Retrieve all user positions on Mainnet
		const positions = await sdk.armada.users.getUserPositions({
			user,
		});

		// Validate the response
		expect(positions, 'The response should be defined').toBeDefined();
		expect(positions.length).toBe(7);
		expect(positions).toEqual(expectedResponse({ chainId: 1, name: 'Mainnet' }));
	});

	test('Base positions', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		// Retrieve all user positions on Mainnet
		const positions = await sdk.armada.users.getUserPositions({
			user,
		});

		// Validate the response
		expect(positions, 'The response should be defined').toBeDefined();
		expect(positions.length).toBe(3);
		expect(positions).toEqual(expectedResponse({ chainId: 8453, name: 'Base' }));
	});
});

test.describe('getUserPositions - Negative scenarios', () => {
	test('User undefined', async () => {
		try {
			await sdk.armada.users.getUserPositions({
				// @ts-ignore
				user: undefined,
			});
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			expect(error.name).toBe('TRPCClientError');
			expect(error.data).toMatchObject({
				code: 'BAD_REQUEST',
				httpStatus: 400,
			});
		}
	});
});
