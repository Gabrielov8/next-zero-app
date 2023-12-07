import { type AxiosError } from 'axios';

export type APIError = Error | AxiosError | string;

export interface ApiResponse<T> {
	data?: T;
	status?: number;
	error?: string;
}

