'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { CatalogApi } from '@/api/catalog';

import ProductList from '@/widgets/catalog/ProductList/ProductList';

const CatalogPage = () => {
	const { data: productsResponse } = useQuery({
		queryKey: ['products'],
		queryFn: CatalogApi.getProducts,
		initialData: {}
	});
	
	const { data: productsData } = productsResponse;
	
	return (
		<div>
			<ProductList productsData={productsData} />
		</div>
	);
};

export default CatalogPage;