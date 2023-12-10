import { ThemeVariants } from '@prosv/core/theme/types';
import { CookieSerializeOptions } from 'cookie';

export const BREAKPOINTS = {
	xs: 375,
	sm: 768,
	md: 1024,
	lg: 1440,
	xl: 1920
};

export const BREAKPOINTS_INDEXES = {
	xs: 0,
	sm: 1,
	md: 2,
	lg: 3,
	xl: 4
};

export const defaultThemeState: DefaultThemeState = {
	colors: 'light',
	spacing: 'md',
	family: 'sans-serif'
};

export const defaultThemeVariants: ThemeVariants<DefaultThemeState> = {
	colors: [
		{ value: 'light', label: 'Обычная версия' },
		{ value: 'contrast', label: 'Контрастная' },
		{ value: 'dark', label: 'Тёмная' }
	],
	spacing: [
		{ value: 'md', label: 'Стандартное' },
		{ value: 'lg', label: 'Среднее' },
		{ value: 'xl', label: 'Большое' }
	],
	family: [
		{ value: 'sans-serif', label: 'Без засечек' },
		{ value: 'serif', label: 'С засечками' }
	]
};

export const THEME_COOKIES_PREFIX = 'theme-';

export const THEME_COOKIES = {
	colors: THEME_COOKIES_PREFIX + 'colors',
	spacing: THEME_COOKIES_PREFIX + 'spacing',
	family: THEME_COOKIES_PREFIX + 'family'
};

export const themeCookiesOpts: CookieSerializeOptions = {
	maxAge: 365 * 86400,
	sameSite: 'lax'
};
