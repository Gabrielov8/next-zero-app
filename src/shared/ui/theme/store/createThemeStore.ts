import { createStore } from 'zustand';

import { ThemeState, ThemeStore, ThemeVariants } from '../types';

export const createThemeStore = <T extends ThemeState = DefaultThemeState>(
	initialState: T,
	variants: ThemeVariants<T>
) =>
	createStore<ThemeStore<T>>()((set) => ({
		...initialState,
		variants,
		controls: {
			setColors: (colors: T['colors']) => set((state) => ({ ...state, colors })),
			setSpacing: (spacing: T['spacing']) => set((state) => ({ ...state, spacing })),
			setFamily: (family: T['family']) => set((state) => ({ ...state, family })),
			reset: () => set({ ...initialState })
		}
	}));
