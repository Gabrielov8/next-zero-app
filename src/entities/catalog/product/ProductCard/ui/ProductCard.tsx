import { IProduct } from '@/types/api/catalog.types';

import React, { FC } from 'react';

import AddToCart from '@/features/catalog/product/AddToCart/AddToCart';

import styles from './ProductCard.module.scss';

interface Props {
	product: IProduct;
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