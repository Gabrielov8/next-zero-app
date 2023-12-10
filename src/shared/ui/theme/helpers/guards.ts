import { defaultThemeState, defaultThemeVariants } from '@theme/constants';

export const isThemeColors = (raw: unknown): raw is DefaultThemeState['colors'] =>
	defaultThemeVariants.colors.some(({ value }) => value === raw);

export const isThemeSpacing = (raw: unknown): raw is DefaultThemeState['spacing'] =>
	defaultThemeVariants.spacing.some(({ value }) => value === raw);

export const isThemeFamily = (raw: unknown): raw is DefaultThemeState['family'] =>
	defaultThemeVariants.family.some(({ value }) => value === raw);

export const validThemeState = (
	value: Record<keyof DefaultThemeState, unknown>
): DefaultThemeState => ({
	colors: isThemeColors(value.colors) ? value.colors : defaultThemeState.colors,
	spacing: isThemeSpacing(value.spacing) ? value.spacing : defaultThemeState.spacing,
	family: isThemeFamily(value.family) ? value.family : defaultThemeState.family
});
