import { ThemeRootDataAttrs, ThemeState } from './types';

export const getThemeRootAttrs = <T extends ThemeState = DefaultThemeState>({
	colors,
	spacing,
	family
}: T): ThemeRootDataAttrs<T> => ({
	'data-ui': 'root',
	'data-ui-colors': colors,
	'data-ui-spacing': spacing,
	'data-ui-family': family
});
