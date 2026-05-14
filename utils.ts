// Initialize de SDK
import { makeSDK } from '@summer_fi/sdk-client';

export const sdk = makeSDK({
	apiDomainUrl: `https://summer.fi`,
	logging: process.env.NODE_ENV === 'development',
});
