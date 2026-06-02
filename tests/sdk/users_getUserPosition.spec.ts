import { expect, test } from '@playwright/test';
import { Address, ChainIds, User } from '@summer_fi/sdk-client';
import { sdk } from '../../utils';
import { LvTokenSymbols, TokenSymbols } from '../../utils/types';

const token = ({
	chainId,
	chainName,
	symbol,
	name,
}: {
	chainId: 1 | 8453;
	chainName: 'Mainnet' | 'Base';
	symbol: TokenSymbols | LvTokenSymbols;
	name: string;
}) => ({
	symbol,
	name,
	chainInfo: { chainId, name: chainName },
	address: {
		value: expect.any(String),
		type: 'Ethereum',
	},
	decimals: expect.any(Number),
});

const expectedResponse = ({
	chainId,
	chainName,
	fleetAddress,
	tokenSymbol,
	tokenName,
	lvTokenSymbol,
	lvTokenName,
}: {
	chainId: 1 | 8453;
	chainName: 'Mainnet' | 'Base';
	fleetAddress: string;
	tokenSymbol: TokenSymbols;
	lvTokenSymbol: LvTokenSymbols;
	tokenName: string;
	lvTokenName: string;
}) =>
	expect.objectContaining({
		type: 'Armada',
		id: expect.objectContaining({
			id: expect.stringContaining(`0x10649c79428d718621821cf6299e91920284743f-${fleetAddress}`),
			type: 'Armada',
			user: expect.objectContaining({
				wallet: {
					address: {
						value: '0x10649c79428d718621821Cf6299e91920284743F',
						type: 'Ethereum',
					},
				},
				chainInfo: { chainId, name: chainName },
			}),
		}),
		pool: expect.objectContaining({
			type: 'Armada',
			id: expect.objectContaining({
				type: 'Armada',
				chainInfo: { chainId, name: chainName },
				fleetAddress: { value: expect.any(String), type: 'Ethereum' },
				protocol: {
					chainInfo: { chainId, name: chainName },
					name: 'Armada',
				},
			}),
		}),
		assets: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		assetPriceUSD: { fiat: 'USD', amount: expect.any(String) },
		assetsUSD: {
			fiat: 'USD',
			amount: expect.any(String),
		},
		shares: {
			token: token({ chainId, chainName, symbol: lvTokenSymbol, name: lvTokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		depositsAmount: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		depositsAmountUSD: {
			fiat: 'USD',
			amount: expect.any(String),
		},
		withdrawalsAmount: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		withdrawalsAmountUSD: { fiat: 'USD', amount: expect.any(String) },
		netDeposits: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		netDepositsUSD: { fiat: 'USD', amount: expect.any(String) },
		earnings: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		earningsUSD: { fiat: 'USD', amount: expect.any(String) },
		claimedSummerToken: {
			token: token({ chainId, chainName, symbol: 'SUMR', name: 'SummerToken' }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		claimableSummerToken: {
			token: token({ chainId, chainName, symbol: 'SUMR', name: 'SummerToken' }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		rewards: [
			{
				claimed: {
					token: token({ chainId, chainName, symbol: 'SUMR', name: 'SummerToken' }),
					amount: expect.any(String),
					_baseUnitFactor: expect.any(String),
				},
				claimable: {
					token: token({ chainId, chainName, symbol: 'SUMR', name: 'SummerToken' }),
					amount: expect.any(String),
					_baseUnitFactor: expect.any(String),
				},
			},
		],
		amount: {
			token: token({ chainId, chainName, symbol: tokenSymbol, name: tokenName }),
			amount: expect.any(String),
			_baseUnitFactor: expect.any(String),
		},
		deposits: [],
		withdrawals: [],
	});

test.describe('getUserPosition', () => {
	test('Mainnet USDC Lower Risk', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
		});

		// Retrieve Mainnet USDC LR user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 1,
				chainName: 'Mainnet',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'USDC',
				tokenName: 'USD Coin',
				lvTokenSymbol: 'LVUSDC',
				lvTokenName: 'LazyVault_LowerRisk_USDC',
			}),
		);
	});

	test('Mainnet USDC Higher Risk - Block Analitica', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
		});

		// Retrieve BA Mainnet USDC HR user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 1,
				chainName: 'Mainnet',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'USDC',
				tokenName: 'USD Coin',
				lvTokenSymbol: 'LVUSDC',
				lvTokenName: 'LazyVault_HigherRisk_USDC',
			}),
		);
	});

	test('Mainnet USDC Higher Risk - DAO Risk-Managed', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
		});

		// Retrieve DAO Mainnet USDC HR user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 1,
				chainName: 'Mainnet',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'USDC',
				tokenName: 'USD Coin',
				lvTokenSymbol: 'LVUSDC',
				lvTokenName: 'DAO_LazyVault_USDC_1',
			}),
		);
	});

	test('Mainnet ETH Lower Risk - Block Analitica', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x67e536797570b3d8919df052484273815a0ab506',
		});

		// Retrieve Mainnet ETH LR user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 1,
				chainName: 'Mainnet',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'WETH',
				tokenName: 'Wrapped Ether',
				lvTokenSymbol: 'LVWETH',
				lvTokenName: 'LazyVault_LowerRisk_WETH',
			}),
		);
	});

	test('Mainnet ETH Higher Risk - Block Analitica', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
		});

		// Retrieve BA Mainnet ETH HR user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 1,
				chainName: 'Mainnet',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'WETH',
				tokenName: 'Wrapped Ether',
				lvTokenSymbol: 'LVWETH',
				lvTokenName: 'LazyVault_HigherRisk_WETH',
			}),
		);
	});

	test('Base USDC Lower Risk', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
		});

		// Retrieve Base USDC user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 8453,
				chainName: 'Base',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'USDC',
				tokenName: 'USD Coin',
				lvTokenSymbol: 'LVUSDC',
				lvTokenName: 'LazyVault_LowerRisk_USDC',
			}),
		);
	});

	test('Base ETH Lower Risk', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
		});

		// Retrieve Base ETH user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 8453,
				chainName: 'Base',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'WETH',
				tokenName: 'Wrapped Ether',
				lvTokenSymbol: 'LVWETH',
				lvTokenName: 'LazyVault_LowerRisk_WETH',
			}),
		);
	});

	test('Base EURC Lower Risk', async () => {
		// Create a user using chainId and wallet address
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
		});

		// Retrieve Base EURC user position
		const position = await sdk.armada.users.getUserPosition({
			user,
			fleetAddress,
		});

		// Validate the response
		expect(position, 'The response should be defined').toBeDefined();
		expect(position).toEqual(
			expectedResponse({
				chainId: 8453,
				chainName: 'Base',
				fleetAddress: fleetAddress.value,
				tokenSymbol: 'EURC',
				tokenName: 'EURC',
				lvTokenSymbol: 'LVEURC',
				lvTokenName: 'LazyVault_LowerRisk_EURC',
			}),
		);
	});
});

test.describe('getUserPosition - Negative scenarios', () => {
	test('user undefined', async () => {
		const fleetAddress = Address.createFromEthereum({
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
		});

		try {
			await sdk.armada.users.getUserPosition({
				// @ts-ignore
				user: undefined,
				fleetAddress,
			});
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('TRPCClientError');

			// Assert the TRPC error data
			expect(error.data).toMatchObject({
				code: 'BAD_REQUEST',
				httpStatus: 400,
			});

			// Assert the content of the error message
			const message = JSON.parse(error.message);
			expect(message[0]).toMatchObject({
				code: 'custom',
				message: 'Invalid input',
				path: ['user'],
			});
		}
	});

	test('fleetAddress undefined', async () => {
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		try {
			await sdk.armada.users.getUserPosition({
				user,
				// @ts-ignore
				fleetAddress: undefined,
			});
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('TRPCClientError');

			// Assert the TRPC error data
			expect(error.data).toMatchObject({
				code: 'BAD_REQUEST',
				httpStatus: 400,
			});

			// Assert the content of the error message
			const message = JSON.parse(error.message);
			expect(message[0]).toMatchObject({
				code: 'custom',
				message: 'Invalid input',
				path: ['fleetAddress'],
			});
		}
	});

	test('user does not have position for given fleetAddress', async () => {
		const user = User.createFromEthereum(
			ChainIds.Base,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
		});

		try {
			await sdk.armada.users.getUserPosition({
				user,
				fleetAddress,
			});
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('Error');
		}
	});

	test('fleetAddress does not match user`s network', async () => {
		const user = User.createFromEthereum(
			ChainIds.Mainnet,
			'0x10649c79428d718621821Cf6299e91920284743F',
		);

		const fleetAddress = Address.createFromEthereum({
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
		});

		try {
			await sdk.armada.users.getUserPosition({
				user,
				fleetAddress,
			});
			throw new Error('Should have thrown a TRPCClientError');
		} catch (error: any) {
			// Assert the error type
			expect(error.name).toBe('Error');
		}
	});
});
