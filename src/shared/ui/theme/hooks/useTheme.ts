import { useContext } from 'react';
import { useStore } from 'zustand';

import { themeContext } from '../context';

export const useThemeStore = () => useContext(themeContext);

export const useTheme = () => {
	const store = useThemeStore();
	return useStore(store);
};
