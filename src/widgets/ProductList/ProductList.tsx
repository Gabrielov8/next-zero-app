import React, { FC } from 'react';

import ProductCard from '@/widgets/ProductCard/ProductCard';

import { ICatalogProducts } from '@/shared/api/services/catalog';

interface Props {
	productsData?: ICatalogProducts;
}

const ProductList: FC<Props> = ({ productsData }) => {
	if (!productsData) {
		return null;
	}
	
	const { products: productList } = productsData;
	
	return (
		<section>
			{productList.map(product => {
				return (
					<ProductCard key={product.id} product={product} />
				);
			})}
		</section>
	);
};

export default ProductList;