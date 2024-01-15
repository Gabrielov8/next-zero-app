import React, { FC } from 'react';

import AddToCart from '@/features/add-to-cart/AddToCart';

import styles from './ProductCard.module.scss';

import { ICatalogProduct } from '@/shared/api/services/catalog';

interface Props {
	product: ICatalogProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<article
			className={styles.root}
		>
			<span>{product.title}</span>
			<AddToCart />
		</article>
	);
};

export default ProductCard;