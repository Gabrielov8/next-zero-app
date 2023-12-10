import React from 'react';

import { useAddToCartState } from '@/features/catalog/AddToCart/AddToCart.state';

import Flex from '@/shared/ui/Flex/Flex';

const AddToCart = () => {
	const { handleAddToCart } = useAddToCartState();
	return (
		<Flex onClick={handleAddToCart}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToCart;