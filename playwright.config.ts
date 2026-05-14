import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		trace: 'on-first-retry',
		// Base URL to use in actions like `await request.get('/')`
		// baseURL: 'https://api.example.com',
	},
	projects: [
		{
			name: 'sdk',
			testDir: './tests/sdk',
			use: {},
		},
	],
});
