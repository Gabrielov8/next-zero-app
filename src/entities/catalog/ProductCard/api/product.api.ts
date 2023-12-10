import { ICatalogProducts } from '@/types/api/catalog.types';

import { ApiResponse } from '@/shared/config/axios';
import { makeRequest } from '@/shared/utils/makeRequest';

export const PRODUCT_ENDPOINTS = { addToCart: '/products' };

export class ProductApi {
	static async addToCart(): Promise<ApiResponse<ICatalogProducts>> {
		return makeRequest<ICatalogProducts>({
			url: PRODUCT_ENDPOINTS.addToCart
		});
	}
	
	// 	remove from cart
	// 	change cart count
	// 	add to favorites
	// 	remove from favorites
	// 	add to compare
}
