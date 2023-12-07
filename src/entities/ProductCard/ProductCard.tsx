import { IProduct } from '@/types/api/catalog.types';

import React, { FC } from 'react';

import AddToCart from '@/features/ProductCard/AddToCart/AddToCart';

import styles from './ProductCard.module.scss';

import Flex from '@/shared/ui/Flex/Flex';

interface Props {
	product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<Flex
			className={styles.root}
			style={{ padding: '16px 16px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
		>
			<span>{product.title}</span>
			<AddToCart />
		</Flex>
	);
};

export default ProductCard;