import classNames, { ArgumentArray } from 'classnames';

import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

export const btnCls = (
	{ size = 'lg', color = 'default', circle, r22, a11yOutlined }: ButtonProps = {},
	...args: ArgumentArray
) => {
	const clsFlags = {
		[styles.circle]: circle,
		[styles.r22]: r22,
		[styles.a11yOutlined]: a11yOutlined
	};
	
	return classNames(styles.root, styles[size], styles[color], clsFlags, ...args);
};
