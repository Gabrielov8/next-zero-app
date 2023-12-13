'use client';

import React, { FC, PropsWithChildren } from 'react';
import { useTheme } from '@theme/hooks';
import { ThemeState } from '@theme/types';

const getThemeRootAttrs = <T extends ThemeState = DefaultThemeState>({
	// colors,
	spacing,
	family
}: T): any => ({
	'data-css': 'root',
	// 'data-css-colors': colors,
	'data-css-spacing': spacing,
	'data-css-family': family
});

const Body: FC<PropsWithChildren> = ({ children }) => {
	const {
		// colors,
		spacing, family
	} = useTheme();
	
	const attrs = getThemeRootAttrs({ spacing, family });
	
	// console.log(attrs);
	
	// useEffect(() => {
	// 	setCookie(THEME_COOKIES.colors, colors, themeCookiesOpts);
	// }, [colors]);
	
	// useEffect(() => {
	// 	setCookie(THEME_COOKIES.spacing, spacing, themeCookiesOpts);
	// }, [spacing]);
	//
	// useEffect(() => {
	// 	setCookie(THEME_COOKIES.family, family, themeCookiesOpts);
	// }, [family]);
	
	return <body {...attrs}>{children}</body>;
};

export default Body;