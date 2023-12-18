import React from 'react';

import { useAddToCartState } from '@/features/catalog/product-card/add-to-cart/state/AddToCart.state';

import Flex from '@/shared/ui/components/Flex/Flex';

const AddToCart = () => {
	const { handleAddToCart } = useAddToCartState();
	return (
		<Flex onClick={handleAddToCart}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToCart;