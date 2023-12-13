import { createContext } from 'react';
import { StoreApi } from 'zustand';

import { defaultThemeState, defaultThemeVariants } from './constants';
import { ThemeStore } from './types';

const defaultState: ThemeStore<DefaultThemeState> = {
	...defaultThemeState,
	variants: defaultThemeVariants,
	controls: {
		// setColors: () => {},
		setSpacing: () => {
		},
		setFamily: () => {
		},
		reset: () => {
		}
	}
};

export const themeContext = createContext<StoreApi<ThemeStore<DefaultThemeState>>>({
	setState: () => {
	},
	getState: () => defaultState,
	subscribe: () => () => {
	},
	destroy: () => {
	}
});
