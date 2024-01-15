import React from 'react';

import { useAddToFavoritesState } from "./AddToFavorites.state";


const AddToFavorites = () => {
	const { handleAddToFavorites } = useAddToFavoritesState();
	return (
		<div onClick={handleAddToFavorites}>
			ДОБАВИТЬ В КОРЗИНУ
		</div>
	);
};

export default AddToFavorites;