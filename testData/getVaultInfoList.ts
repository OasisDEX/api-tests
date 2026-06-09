import { expect } from '@playwright/test';

export const getVaultInfoListMainnet = {
	list: [
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0x0c1fbccc019320032d9acd193447560c8c632114',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVWETH',
				name: 'DAO_LazyVault_WETH_1',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0x0c1fbccc019320032d9acd193447560c8c632114', type: 'Ethereum' },
				decimals: 18,
			},
			assetToken: {
				symbol: 'WETH',
				name: 'Wrapped Ether',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
				decimals: 18,
			},
			depositCap: {
				token: {
					symbol: 'LVWETH',
					name: 'DAO_LazyVault_WETH_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x0c1fbccc019320032d9acd193447560c8c632114', type: 'Ethereum' },
					decimals: 18,
				},
				amount: '5000',
				_baseUnitFactor: '1000000000000000000',
			},
			totalDeposits: {
				token: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			totalShares: {
				token: {
					symbol: 'LVWETH',
					name: 'DAO_LazyVault_WETH_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x0c1fbccc019320032d9acd193447560c8c632114', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVWETH',
					name: 'DAO_LazyVault_WETH_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x0c1fbccc019320032d9acd193447560c8c632114', type: 'Ethereum' },
					decimals: 18,
				},
				quote: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				_baseSymbol: 'LVWETH',
				_quoteSymbol: 'WETH',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '5820000000000000000000',
				},
				{
					token: {
						symbol: 'wstETH',
						name: 'WrappedliquidstakedEther2.0',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVUSDT',
				name: 'LazyVault_LowerRisk_USDT',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDT',
				name: 'Tether USD Stablecoin',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xdAC17F958D2ee523a2206206994597C13D831ec7', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '22500000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDT',
					name: 'Tether USD Stablecoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xdAC17F958D2ee523a2206206994597C13D831ec7', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'USDT',
					name: 'Tether USD Stablecoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xdAC17F958D2ee523a2206206994597C13D831ec7', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVUSDT',
				_quoteSymbol: 'USDT',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVWETH',
				name: 'LazyVault_HigherRisk_WETH',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10', type: 'Ethereum' },
				decimals: 18,
			},
			assetToken: {
				symbol: 'WETH',
				name: 'Wrapped Ether',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
				decimals: 18,
			},
			depositCap: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_HigherRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10', type: 'Ethereum' },
					decimals: 18,
				},
				amount: '20000',
				_baseUnitFactor: '1000000000000000000',
			},
			totalDeposits: {
				token: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			totalShares: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_HigherRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVWETH',
					name: 'LazyVault_HigherRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10', type: 'Ethereum' },
					decimals: 18,
				},
				quote: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				_baseSymbol: 'LVWETH',
				_quoteSymbol: 'WETH',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '84799000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0x67e536797570b3d8919df052484273815a0ab506',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVWETH',
				name: 'LazyVault_LowerRisk_WETH',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0x67e536797570b3d8919df052484273815a0ab506', type: 'Ethereum' },
				decimals: 18,
			},
			assetToken: {
				symbol: 'WETH',
				name: 'Wrapped Ether',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
				decimals: 18,
			},
			depositCap: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x67e536797570b3d8919df052484273815a0ab506', type: 'Ethereum' },
					decimals: 18,
				},
				amount: '30000',
				_baseUnitFactor: '1000000000000000000',
			},
			totalDeposits: {
				token: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			totalShares: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x67e536797570b3d8919df052484273815a0ab506', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x67e536797570b3d8919df052484273815a0ab506', type: 'Ethereum' },
					decimals: 18,
				},
				quote: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', type: 'Ethereum' },
					decimals: 18,
				},
				_baseSymbol: 'LVWETH',
				_quoteSymbol: 'WETH',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '45545000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVUSDC',
				name: 'LazyVault_LowerRisk_USDC',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '75000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC',
				_quoteSymbol: 'USDC',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '86935000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVUSDC',
				name: 'DAO_LazyVault_USDC_1',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC',
					name: 'DAO_LazyVault_USDC_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '20000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC',
					name: 'DAO_LazyVault_USDC_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC',
					name: 'DAO_LazyVault_USDC_1',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC',
				_quoteSymbol: 'USDC',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '5820000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				fleetAddress: {
					value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
					type: 'Ethereum',
				},
				protocol: { chainInfo: { chainId: 1, name: 'Mainnet' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVUSDC',
				name: 'LazyVault_HigherRisk_USDC',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: { chainId: 1, name: 'Mainnet' },
				address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_HigherRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '30000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_HigherRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC',
					name: 'LazyVault_HigherRisk_USDC',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 1, name: 'Mainnet' },
					address: { value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC',
				_quoteSymbol: 'USDC',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 1, name: 'Mainnet' },
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '5820000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
	],
};

export const getVaultInfoListBase = {
	list: [
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 8453, name: 'Base' },
				fleetAddress: { value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af', type: 'Ethereum' },
				protocol: { chainInfo: { chainId: 8453, name: 'Base' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVWETH',
				name: 'LazyVault_LowerRisk_WETH',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af', type: 'Ethereum' },
				decimals: 18,
			},
			assetToken: {
				symbol: 'WETH',
				name: 'Wrapped Ether',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x4200000000000000000000000000000000000006', type: 'Ethereum' },
				decimals: 18,
			},
			depositCap: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af', type: 'Ethereum' },
					decimals: 18,
				},
				amount: '10000',
				_baseUnitFactor: '1000000000000000000',
			},
			totalDeposits: {
				token: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x4200000000000000000000000000000000000006', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			totalShares: {
				token: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af', type: 'Ethereum' },
					decimals: 18,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000000000000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVWETH',
					name: 'LazyVault_LowerRisk_WETH',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af', type: 'Ethereum' },
					decimals: 18,
				},
				quote: {
					symbol: 'WETH',
					name: 'Wrapped Ether',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x4200000000000000000000000000000000000006', type: 'Ethereum' },
					decimals: 18,
				},
				_baseSymbol: 'LVWETH',
				_quoteSymbol: 'WETH',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					dailyEmission: '5820000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 8453, name: 'Base' },
				fleetAddress: { value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0', type: 'Ethereum' },
				protocol: { chainInfo: { chainId: 8453, name: 'Base' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVEURC',
				name: 'LazyVault_LowerRisk_EURC',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'EURC',
				name: 'EURC',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVEURC',
					name: 'LazyVault_LowerRisk_EURC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '7500000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'EURC',
					name: 'EURC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVEURC',
					name: 'LazyVault_LowerRisk_EURC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVEURC',
					name: 'LazyVault_LowerRisk_EURC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'EURC',
					name: 'EURC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVEURC',
				_quoteSymbol: 'EURC',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					dailyEmission: '5820000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: { chainId: 8453, name: 'Base' },
				fleetAddress: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
				protocol: { chainInfo: { chainId: 8453, name: 'Base' }, name: 'Armada' },
			},
			token: {
				symbol: 'LVUSDC',
				name: 'LazyVault_LowerRisk_USDC',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: { chainId: 8453, name: 'Base' },
				address: { value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', type: 'Ethereum' },
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				amount: '18000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17', type: 'Ethereum' },
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: { chainId: 8453, name: 'Base' },
					address: { value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', type: 'Ethereum' },
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC',
				_quoteSymbol: 'USDC',
			},
			apy: { value: expect.any(Number) },
			apys: {
				live: { value: expect.any(Number) },
				sma24h: { value: expect.any(Number) },
				sma7day: { value: expect.any(Number) },
				sma30day: { value: expect.any(Number) },
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					apy: { value: 0 },
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: { chainId: 8453, name: 'Base' },
						address: { value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624', type: 'Ethereum' },
						decimals: 18,
					},
					dailyEmission: '13636000000000000000000',
				},
			],
			tvlUsd: { fiat: 'USD', amount: expect.any(String) },
		},
	],
};

export const getVaultInfoListArbitrum = {
	list: [
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				fleetAddress: {
					value: '0x4f63cfea7458221cb3a0eee2f31f7424ad34bb58',
					type: 'Ethereum',
				},
				protocol: {
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					name: 'Armada',
				},
			},
			token: {
				symbol: 'LVUSDC',
				name: 'LazyVault_LowerRisk_USDC',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0x4f63cfea7458221cb3a0eee2f31f7424ad34bb58',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x4f63cfea7458221cb3a0eee2f31f7424ad34bb58',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: '0',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x4f63cfea7458221cb3a0eee2f31f7424ad34bb58',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC',
					name: 'LazyVault_LowerRisk_USDC',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x4f63cfea7458221cb3a0eee2f31f7424ad34bb58',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC',
				_quoteSymbol: 'USDC',
			},
			apy: {
				value: expect.any(Number),
			},
			apys: {
				live: {
					value: expect.any(Number),
				},
				sma24h: {
					value: expect.any(Number),
				},
				sma7day: {
					value: expect.any(Number),
				},
				sma30day: {
					value: expect.any(Number),
				},
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 42161,
							name: 'ArbitrumOne',
						},
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: {
						value: 0,
					},
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 42161,
							name: 'ArbitrumOne',
						},
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: {
				fiat: 'USD',
				amount: expect.any(String),
			},
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				fleetAddress: {
					value: '0x71d77c39db0eb5d086611a2e950198e3077cf58a',
					type: 'Ethereum',
				},
				protocol: {
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					name: 'Armada',
				},
			},
			token: {
				symbol: 'LVUSDC2',
				name: 'LazyVault_LowerRisk_USDC_2',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0x71d77c39db0eb5d086611a2e950198e3077cf58a',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC',
				name: 'USDCoin',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDC2',
					name: 'LazyVault_LowerRisk_USDC_2',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x71d77c39db0eb5d086611a2e950198e3077cf58a',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: '15000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDC2',
					name: 'LazyVault_LowerRisk_USDC_2',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x71d77c39db0eb5d086611a2e950198e3077cf58a',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDC2',
					name: 'LazyVault_LowerRisk_USDC_2',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x71d77c39db0eb5d086611a2e950198e3077cf58a',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				quote: {
					symbol: 'USDC',
					name: 'USDCoin',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				_baseSymbol: 'LVUSDC2',
				_quoteSymbol: 'USDC',
			},
			apy: {
				value: expect.any(Number),
			},
			apys: {
				live: {
					value: expect.any(Number),
				},
				sma24h: {
					value: expect.any(Number),
				},
				sma7day: {
					value: expect.any(Number),
				},
				sma30day: {
					value: expect.any(Number),
				},
			},
			rewardsApys: [],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 42161,
							name: 'ArbitrumOne',
						},
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: {
				fiat: 'USD',
				amount: expect.any(String),
			},
		},
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				fleetAddress: {
					value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
					type: 'Ethereum',
				},
				protocol: {
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					name: 'Armada',
				},
			},
			token: {
				symbol: 'LVUSDT',
				name: 'LazyVault_LowerRisk_USDT',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			assetToken: {
				symbol: 'USD₮0',
				name: 'USD₮0',
				chainInfo: {
					chainId: 42161,
					name: 'ArbitrumOne',
				},
				address: {
					value: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: '12000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USD₮0',
					name: 'USD₮0',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDT',
					name: 'LazyVault_LowerRisk_USDT',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				quote: {
					symbol: 'USD₮0',
					name: 'USD₮0',
					chainInfo: {
						chainId: 42161,
						name: 'ArbitrumOne',
					},
					address: {
						value: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				_baseSymbol: 'LVUSDT',
				_quoteSymbol: 'USD₮0',
			},
			apy: {
				value: expect.any(Number),
			},
			apys: {
				live: {
					value: expect.any(Number),
				},
				sma24h: {
					value: expect.any(Number),
				},
				sma7day: {
					value: expect.any(Number),
				},
				sma30day: {
					value: expect.any(Number),
				},
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 42161,
							name: 'ArbitrumOne',
						},
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: {
						value: 0,
					},
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 42161,
							name: 'ArbitrumOne',
						},
						address: {
							value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: {
				fiat: 'USD',
				amount: expect.any(String),
			},
		},
	],
};

export const getVaultInfoListSonic = {
	list: [
		{
			type: 'Armada',
			id: {
				type: 'Armada',
				chainInfo: {
					chainId: 146,
					name: 'Sonic',
				},
				fleetAddress: {
					value: '0x507a2d9e87dbd3076e65992049c41270b47964f8',
					type: 'Ethereum',
				},
				protocol: {
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					name: 'Armada',
				},
			},
			token: {
				symbol: 'LVUSDCe',
				name: 'LazyVault_LowerRisk_USDCe',
				chainInfo: {
					chainId: 146,
					name: 'Sonic',
				},
				address: {
					value: '0x507a2d9e87dbd3076e65992049c41270b47964f8',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			assetToken: {
				symbol: 'USDC.E',
				name: 'Bridged USDC',
				chainInfo: {
					chainId: 146,
					name: 'Sonic',
				},
				address: {
					value: '0x29219dd400f2bf60e5a23d13be72b486d4038894',
					type: 'Ethereum',
				},
				decimals: 6,
			},
			depositCap: {
				token: {
					symbol: 'LVUSDCe',
					name: 'LazyVault_LowerRisk_USDCe',
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					address: {
						value: '0x507a2d9e87dbd3076e65992049c41270b47964f8',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: '1000000',
				_baseUnitFactor: '1000000',
			},
			totalDeposits: {
				token: {
					symbol: 'USDC.E',
					name: 'Bridged USDC',
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					address: {
						value: '0x29219dd400f2bf60e5a23d13be72b486d4038894',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			totalShares: {
				token: {
					symbol: 'LVUSDCe',
					name: 'LazyVault_LowerRisk_USDCe',
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					address: {
						value: '0x507a2d9e87dbd3076e65992049c41270b47964f8',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				amount: expect.any(String),
				_baseUnitFactor: '1000000',
			},
			sharePrice: {
				value: expect.any(String),
				base: {
					symbol: 'LVUSDCe',
					name: 'LazyVault_LowerRisk_USDCe',
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					address: {
						value: '0x507a2d9e87dbd3076e65992049c41270b47964f8',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				quote: {
					symbol: 'USDC.E',
					name: 'Bridged USDC',
					chainInfo: {
						chainId: 146,
						name: 'Sonic',
					},
					address: {
						value: '0x29219dd400f2bf60e5a23d13be72b486d4038894',
						type: 'Ethereum',
					},
					decimals: 6,
				},
				_baseSymbol: 'LVUSDCe',
				_quoteSymbol: 'USDC.E',
			},
			apy: {
				value: expect.any(Number),
			},
			apys: {
				live: {
					value: expect.any(Number),
				},
				sma24h: {
					value: expect.any(Number),
				},
				sma7day: {
					value: expect.any(Number),
				},
				sma30day: {
					value: expect.any(Number),
				},
			},
			rewardsApys: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 146,
							name: 'Sonic',
						},
						address: {
							value: '0x4e0037f487bBb588bf1B7a83BDe6c34FeD6099e3',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					apy: {
						value: 0,
					},
				},
			],
			merklRewards: [
				{
					token: {
						symbol: 'SUMR',
						name: 'SummerToken',
						chainInfo: {
							chainId: 146,
							name: 'Sonic',
						},
						address: {
							value: '0x4e0037f487bBb588bf1B7a83BDe6c34FeD6099e3',
							type: 'Ethereum',
						},
						decimals: 18,
					},
					dailyEmission: '0',
				},
			],
			tvlUsd: {
				fiat: 'USD',
				amount: expect.any(String),
			},
		},
	],
};
