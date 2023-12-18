import { ApiResponse } from '@/shared/config/axios';
import { ICatalogProducts } from '@/shared/types/api/catalog.types';
import { makeRequest } from '@/shared/utils/makeRequest';

export const CATALOG_ENDPOINTS = { products: '/products' };

export class CatalogApi {
	static async getProducts(): Promise<ApiResponse<ICatalogProducts>> {
		return makeRequest<ICatalogProducts>({
			url: CATALOG_ENDPOINTS.products
		});
	}
}
