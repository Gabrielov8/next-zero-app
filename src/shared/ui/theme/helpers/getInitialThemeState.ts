import { THEME_COOKIES } from '@theme/constants';
import { cookies } from 'next/headers';

import { validThemeState } from './guards';

export const getInitialThemeState = (): DefaultThemeState => {
	const reqCookies = cookies();
	return validThemeState({
		colors: reqCookies.get(THEME_COOKIES.colors)?.value,
		spacing: reqCookies.get(THEME_COOKIES.spacing)?.value,
		family: reqCookies.get(THEME_COOKIES.family)?.value
	});
};
