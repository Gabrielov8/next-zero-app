import { ThemeState } from '@theme/types';

declare global {
	// type DefaultThemeColors = 'light' | 'dark' | 'contrast';
	type DefaultThemeSpacing = 'md' | 'lg' | 'xl';
	type DefaultThemeFamily = 'sans-serif' | 'serif';
	
	type DefaultThemeState = ThemeState<
		// DefaultThemeColors,
		DefaultThemeSpacing, DefaultThemeFamily>;
}
