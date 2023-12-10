import { useEffect, useMemo } from 'react';
import { getThemeRootAttrs } from '@theme/helpers';
import { useTheme } from '@theme/hooks';

export const useThemeBody = () => {
	const { colors, spacing, family } = useTheme();
	
	const attrs = useMemo(
		() => getThemeRootAttrs({ colors, spacing, family }),
		[colors, family, spacing]
	);
	
	useEffect(() => {
		Object.entries(attrs).forEach(([name, value]) => document.body.setAttribute(name, value));
	}, [attrs]);
};
