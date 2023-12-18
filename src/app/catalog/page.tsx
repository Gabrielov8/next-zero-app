import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import CatalogPage from '@/root-pages/catalog/CatalogPage';
import { CatalogApi } from '@/widgets/catalog/catalog.api';

const CatalogIndexPage = async () => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['products'],
		queryFn: CatalogApi.getProducts
	});
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatalogPage />
		</HydrationBoundary>
	);
};

export default CatalogIndexPage;