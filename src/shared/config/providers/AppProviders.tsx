import { FC, PropsWithChildren } from 'react';

import { DevTools } from '@/shared/config/providers/DevTools';
import { QueryClientProvider } from '@/shared/config/providers/QueryClientProvider';
import { ReduxProvider } from '@/shared/config/store/ReduxProvider';

export const AppProviders: FC<PropsWithChildren> = async ({ children }) => {
	return (
		<QueryClientProvider>
			<ReduxProvider>
				{children}
				<DevTools />
			</ReduxProvider>
		</QueryClientProvider>
	);
};
