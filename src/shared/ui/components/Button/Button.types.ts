import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonSize = 'md' | 'lg' | 'xxl';

export type ButtonColor =
	| 'primary'
	| 'primaryLight'
	| 'primaryOutlined'
	| 'secondary'
	| 'secondaryOutlined'
	| 'gray'
	| 'default';

export interface ButtonStyleProps {
	size?: ButtonSize;
	color?: ButtonColor;
	circle?: boolean;
	r22?: boolean;
	a11yOutlined?: boolean;
	loading?: boolean;
}

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
		PropsWithChildren,
		ButtonStyleProps {
}
