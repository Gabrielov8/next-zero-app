import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CatalogApi } from '@/api/catalog';

import CatalogPage from '@/root-pages/catalog/CatalogPage';

const CatalogIndexPage = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['products'],
		queryFn: CatalogApi.getProducts
	});
	return (
		<div>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<CatalogPage />
			</HydrationBoundary>
		</div>
	);
};

export default CatalogIndexPage;