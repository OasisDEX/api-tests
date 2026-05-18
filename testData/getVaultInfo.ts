import { expect } from '@playwright/test';

export const getVaultInfoBaseETH = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		fleetAddress: {
			value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVWETH',
		name: 'LazyVault_LowerRisk_WETH',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	assetToken: {
		symbol: 'WETH',
		name: 'Wrapped Ether',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x4200000000000000000000000000000000000006',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	depositCap: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x4200000000000000000000000000000000000006',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: '10000',
		_baseUnitFactor: '1000000000000000000',
	},
	totalDeposits: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x4200000000000000000000000000000000000006',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: expect.any(String),
		_baseUnitFactor: '1000000000000000000',
	},
	totalShares: {
		token: {
			symbol: 'LVWETH',
			name: 'LazyVault_LowerRisk_WETH',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
				type: 'Ethereum',
			},
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
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x2bb9ad69feba5547b7cd57aafe8457d40bf834af',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		quote: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x4200000000000000000000000000000000000006',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		_baseSymbol: 'LVWETH',
		_quoteSymbol: 'WETH',
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
					chainId: 8453,
					name: 'Base',
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
					chainId: 8453,
					name: 'Base',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoBaseEURC = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		fleetAddress: {
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVEURC',
		name: 'LazyVault_LowerRisk_EURC',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'EURC',
		name: 'EURC',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'EURC',
			name: 'EURC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '7500000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'EURC',
			name: 'EURC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: expect.any(String),
		_baseUnitFactor: '1000000',
	},
	totalShares: {
		token: {
			symbol: 'LVEURC',
			name: 'LazyVault_LowerRisk_EURC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
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
			symbol: 'LVEURC',
			name: 'LazyVault_LowerRisk_EURC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x64db8f51f1bf7064bb5a361a7265f602d348e0f0',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'EURC',
			name: 'EURC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		_baseSymbol: 'LVEURC',
		_quoteSymbol: 'EURC',
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
					chainId: 8453,
					name: 'Base',
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
					chainId: 8453,
					name: 'Base',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoBaseUSDC = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		fleetAddress: {
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVUSDC',
		name: 'LazyVault_LowerRisk_USDC',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'USDC',
		name: 'USD Coin',
		chainInfo: {
			chainId: 8453,
			name: 'Base',
		},
		address: {
			value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '18000000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
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
				chainId: 8453,
				name: 'Base',
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
			symbol: 'LVUSDC',
			name: 'LazyVault_LowerRisk_USDC',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 8453,
				name: 'Base',
			},
			address: {
				value: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
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
					chainId: 8453,
					name: 'Base',
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
					chainId: 8453,
					name: 'Base',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoMainnetDaoETH = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0x0c1fbccc019320032d9acd193447560c8c632114',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVWETH',
		name: 'DAO_LazyVault_WETH_1',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0x0c1fbccc019320032d9acd193447560c8c632114',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	assetToken: {
		symbol: 'WETH',
		name: 'Wrapped Ether',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	depositCap: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: '0',
		_baseUnitFactor: '1000000000000000000',
	},
	totalDeposits: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: expect.any(String),
		_baseUnitFactor: '1000000000000000000',
	},
	totalShares: {
		token: {
			symbol: 'LVWETH',
			name: 'DAO_LazyVault_WETH_1',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x0c1fbccc019320032d9acd193447560c8c632114',
				type: 'Ethereum',
			},
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
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x0c1fbccc019320032d9acd193447560c8c632114',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		quote: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		_baseSymbol: 'LVWETH',
		_quoteSymbol: 'WETH',
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
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
		{
			token: {
				symbol: 'wstETH',
				name: 'WrappedliquidstakedEther2.0',
				chainInfo: {
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
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
};

export const getVaultInfoMainnetDaoUSDC = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVUSDC',
		name: 'DAO_LazyVault_USDC_1',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'USDC',
		name: 'USD Coin',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '20000000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
			name: 'DAO_LazyVault_USDC_1',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
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
			name: 'DAO_LazyVault_USDC_1',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xd77f9a9f2b0c160db3e9dc2cce370c1a740c76fc',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
	rewardsApys: [],
	merklRewards: [
		{
			token: {
				symbol: 'SUMR',
				name: 'SummerToken',
				chainInfo: {
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoMainnetBaUSDT = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVUSDT',
		name: 'LazyVault_LowerRisk_USDT',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'USDT',
		name: 'Tether USD',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'USDT',
			name: 'Tether USD',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '22500000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'USDT',
			name: 'Tether USD',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
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
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
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
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x17ee2d03e88b55e762c66c76ec99c3a28a54ad8d',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'USDT',
			name: 'Tether USD',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		_baseSymbol: 'LVUSDT',
		_quoteSymbol: 'USDT',
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
					chainId: 1,
					name: 'Mainnet',
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
					chainId: 1,
					name: 'Mainnet',
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
};

export const getVaultInfoMainnetBaETH_HR = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVWETH',
		name: 'LazyVault_HigherRisk_WETH',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	assetToken: {
		symbol: 'WETH',
		name: 'Wrapped Ether',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	depositCap: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: '20000',
		_baseUnitFactor: '1000000000000000000',
	},
	totalDeposits: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: expect.any(String),
		_baseUnitFactor: '1000000000000000000',
	},
	totalShares: {
		token: {
			symbol: 'LVWETH',
			name: 'LazyVault_HigherRisk_WETH',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
				type: 'Ethereum',
			},
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
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x2e6abcbcced9af05bc3b8a4908e0c98c29a88e10',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		quote: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		_baseSymbol: 'LVWETH',
		_quoteSymbol: 'WETH',
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
					chainId: 1,
					name: 'Mainnet',
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
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoMainnetBaETH_LR = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0x67e536797570b3d8919df052484273815a0ab506',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVWETH',
		name: 'LazyVault_LowerRisk_WETH',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0x67e536797570b3d8919df052484273815a0ab506',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	assetToken: {
		symbol: 'WETH',
		name: 'Wrapped Ether',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
			type: 'Ethereum',
		},
		decimals: 18,
	},
	depositCap: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: '30000',
		_baseUnitFactor: '1000000000000000000',
	},
	totalDeposits: {
		token: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		amount: expect.any(String),
		_baseUnitFactor: '1000000000000000000',
	},
	totalShares: {
		token: {
			symbol: 'LVWETH',
			name: 'LazyVault_LowerRisk_WETH',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x67e536797570b3d8919df052484273815a0ab506',
				type: 'Ethereum',
			},
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
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x67e536797570b3d8919df052484273815a0ab506',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		quote: {
			symbol: 'WETH',
			name: 'Wrapped Ether',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				type: 'Ethereum',
			},
			decimals: 18,
		},
		_baseSymbol: 'LVWETH',
		_quoteSymbol: 'WETH',
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
					chainId: 1,
					name: 'Mainnet',
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
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoMainnetBaUSDC_HR = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVUSDC',
		name: 'LazyVault_HigherRisk_USDC',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'USDC',
		name: 'USD Coin',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '30000000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
			name: 'LazyVault_HigherRisk_USDC',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
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
			name: 'LazyVault_HigherRisk_USDC',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xe9cda459bed6dcfb8ac61cd8ce08e2d52370cb06',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
					chainId: 1,
					name: 'Mainnet',
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
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};

export const getVaultInfoMainnetBaUSDC_LR = {
	type: 'Armada',
	id: {
		type: 'Armada',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		fleetAddress: {
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
			type: 'Ethereum',
		},
		protocol: {
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			name: 'Armada',
		},
	},
	token: {
		symbol: 'LVUSDC',
		name: 'LazyVault_LowerRisk_USDC',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	assetToken: {
		symbol: 'USDC',
		name: 'USD Coin',
		chainInfo: {
			chainId: 1,
			name: 'Mainnet',
		},
		address: {
			value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
			type: 'Ethereum',
		},
		decimals: 6,
	},
	depositCap: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		amount: '75000000',
		_baseUnitFactor: '1000000',
	},
	totalDeposits: {
		token: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
				chainId: 1,
				name: 'Mainnet',
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
			symbol: 'LVUSDC',
			name: 'LazyVault_LowerRisk_USDC',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0x98c49e13bf99d7cad8069faa2a370933ec9ecf17',
				type: 'Ethereum',
			},
			decimals: 6,
		},
		quote: {
			symbol: 'USDC',
			name: 'USD Coin',
			chainInfo: {
				chainId: 1,
				name: 'Mainnet',
			},
			address: {
				value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
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
					chainId: 1,
					name: 'Mainnet',
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
					chainId: 1,
					name: 'Mainnet',
				},
				address: {
					value: '0x194f360D130F2393a5E9F3117A6a1B78aBEa1624',
					type: 'Ethereum',
				},
				decimals: 18,
			},
			dailyEmission: expect.any(String),
		},
	],
	tvlUsd: {
		fiat: 'USD',
		amount: expect.any(String),
	},
};
