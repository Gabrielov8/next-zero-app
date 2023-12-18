import React, { FC } from 'react';

import AddToCart from '@/features/catalog/product-card/add-to-cart/ui/AddToCart';

import styles from './ProductCard.module.scss';

import { ICatalogProduct } from '@/shared/types/api/catalog.types';

interface Props {
	product: ICatalogProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<div
			className={styles.root}
		>
			<span>{product.title}</span>
			<AddToCart />
		</div>
	);
};

export default ProductCard;