'use client'
import React from 'react';

import { useAddToCartState } from '@/features/add-to-cart/AddToCart.state';

const AddToCart = () => {
	const { handleAddToCart } = useAddToCartState();
	return (
		<button onClick={handleAddToCart}>
			ДОБАВИТЬ В КОРЗИНУ
		</button>
	);
};

export default AddToCart;