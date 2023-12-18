'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { CatalogApi } from '@/widgets/catalog/catalog.api';
import ProductList from '@/widgets/catalog/ProductList/ProductList';

import Icon from '@/shared/ui/components/Icon/Icon';

const CatalogPage = () => {
	const { data: productsResponse } = useQuery({
		queryKey: ['products'],
		queryFn: CatalogApi.getProducts,
		initialData: {}
	});
	
	const { data: productsData } = productsResponse;
	
	return (
		<div>
			<Icon icon={'Warning/Circle_Check'} color={'alert01'} />
			<Icon icon={'Warning/Octagon_Warning'} color={'success01'} />
			<Icon icon={'Warning/Help'} color={'error04'} colorType={'stroke'} />
			<Icon icon={'Warning/Wavy_Check'} />
			<ProductList productsData={productsData} />
		</div>
	);
};

export default CatalogPage;