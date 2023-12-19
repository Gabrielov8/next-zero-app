import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import CatalogPage from '@/root-pages/catalog/CatalogPage';

import { getCatalogProductsQueryOpts } from '@/shared/api/services/catalog';
import { useQueryClient } from '@/shared/config/query';

const CatalogIndexPage = async () => {
	const queryClient = useQueryClient();
	await queryClient.prefetchQuery({ ...getCatalogProductsQueryOpts({ page: 1 }) });
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatalogPage />
		</HydrationBoundary>
	);
};

export default CatalogIndexPage;