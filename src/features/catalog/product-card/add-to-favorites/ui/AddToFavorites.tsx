import React from 'react';

import { useAddToFavoritesState } from '@/features/catalog/product-card/add-to-favorites/state/AddToFavorites.state';

import Flex from '@/shared/ui/components/Flex/Flex';

const AddToFavorites = () => {
	const { handleAddToFavorites } = useAddToFavoritesState();
	return (
		<Flex onClick={handleAddToFavorites}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToFavorites;