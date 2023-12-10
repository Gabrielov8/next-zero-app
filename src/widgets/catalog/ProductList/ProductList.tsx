import { ICatalogProducts } from '@/types/api/catalog.types';

import React, { FC } from 'react';

import ProductCard from '@/entities/catalog/ProductCard/ui/ProductCard';

import Flex from '@/shared/ui/Flex/Flex';

interface Props {
	productsData?: ICatalogProducts;
}

const ProductList: FC<Props> = ({ productsData }) => {
	if (!productsData) {
		return null;
	}
	
	const { products: productList } = productsData;
	
	return (
		<Flex style={{ flexWrap: 'wrap', gap: '10px 20px' }}>
			{productList.map(product => {
				return (
					<ProductCard key={product.id} product={product} />
				);
			})}
		</Flex>
	);
};

export default ProductList;