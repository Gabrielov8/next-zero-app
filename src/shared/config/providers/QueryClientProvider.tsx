'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider as BaseClientProvider } from '@tanstack/react-query';

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						refetchOnMount: false,
						refetchOnReconnect: false,
						retry: false
					}
				}
			})
	);
	
	return <BaseClientProvider client={queryClient}>{children}</BaseClientProvider>;
};
