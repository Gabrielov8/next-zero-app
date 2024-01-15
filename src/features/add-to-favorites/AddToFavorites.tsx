import React from 'react';

import Flex from '@/shared/ui/components/Flex/Flex';
import {useAddToFavoritesState} from "./AddToFavorites.state";

const AddToFavorites = () => {
	const { handleAddToFavorites } = useAddToFavoritesState();
	return (
		<Flex onClick={handleAddToFavorites}>
			ДОБАВИТЬ В КОРЗИНУ
		</Flex>
	);
};

export default AddToFavorites;