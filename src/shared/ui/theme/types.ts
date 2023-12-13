export interface ThemeState<
	// ThemeColors extends string = string,
	ThemeSpacing extends string = string,
	ThemeFamily extends string = string,
> {
	// colors: ThemeColors;
	spacing: ThemeSpacing;
	family: ThemeFamily;
}

export interface ThemePropertyVariant<T extends string> {
	value: T;
	label: string;
}

export type ThemePropertyVariants<T extends string> = ThemePropertyVariant<T>[];

export type ThemeVariants<T extends ThemeState> = {
	// colors: ThemePropertyVariants<T['colors']>;
	spacing: ThemePropertyVariants<T['spacing']>;
	family: ThemePropertyVariants<T['family']>;
};

export interface ThemeControls<T extends ThemeState> {
	// setColors(colors: T['colors']): void;
	
	setSpacing(colors: T['spacing']): void;
	
	setFamily(colors: T['family']): void;
	
	reset(): void;
}

export interface ThemeStore<T extends ThemeState>
	extends ThemeState<
		// T['colors'],
		T['spacing'], T['family']> {
	variants: ThemeVariants<T>;
	controls: ThemeControls<T>;
}

export interface ThemeRootDataAttrs<T extends ThemeState> {
	'data-css': 'root';
	// 'data-css-colors': T['colors'];
	'data-css-spacing': T['spacing'];
	'data-css-family': T['family'];
}

export interface ThemeRootProps<T extends ThemeState> {
	className?: string;
	themeRootProps?: ThemeRootDataAttrs<T>;
}
