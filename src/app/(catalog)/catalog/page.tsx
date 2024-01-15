import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import ProductList from "@/widgets/ProductList/ProductList";

import { getCatalogProductsQueryOpts } from '@/shared/api/services/catalog';
import { useQueryClient } from '@/shared/config/query';
import Icon from "@/shared/ui/components/Icon/Icon";
import style from './page.module.scss'

const CatalogIndexPage = async () => {
	const queryClient = useQueryClient();
	const data = await queryClient.fetchQuery({ ...getCatalogProductsQueryOpts({ page: 1 }) });
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<h1 className={style.text}>Заголовок</h1>
			<section>
				<Icon icon='Warning/Circle_Check' color='alert01' />
				<Icon icon='Warning/Octagon_Warning' color='success01' />
				<Icon icon='Warning/Help' color='error04' colorType='stroke' />
				<Icon icon='Warning/Wavy_Check' />
				<ProductList productsData={data?.data} />
			</section>
		</HydrationBoundary>
	);
};

export default CatalogIndexPage;