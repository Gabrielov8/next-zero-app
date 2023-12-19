import { FC, PropsWithChildren } from 'react';

import { DevToolsProvider } from '@/shared/config/providers/DevToolsProvider';
import { QueryClientProvider } from '@/shared/config/providers/QueryClientProvider';
import { ReduxProvider } from '@/shared/config/store/ReduxProvider';

export const AppProviders: FC<PropsWithChildren> = async ({ children }) => {
	return (
		<QueryClientProvider>
			<ReduxProvider>
				{children}
				<DevToolsProvider />
			</ReduxProvider>
		</QueryClientProvider>
	);
};
