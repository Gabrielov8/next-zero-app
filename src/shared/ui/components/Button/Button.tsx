'use client'
import { forwardRef } from 'react';

import { btnCls } from './Button.helpers';
import { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

import Loader from '@/shared/assets/icons/Loader/button-loader.svg';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			children,
			size = 'lg',
			color = 'default',
			circle,
			r22,
			a11yOutlined,
			loading = false,
			onClick,
			...rest
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={btnCls({ size, color, circle, r22, a11yOutlined }, className)}
				onClick={loading ? () => null : onClick}
				{...rest}
			>
				{loading ? (
					<figure className={styles.loader}>
						<Loader />
					</figure>
				) : (
					children
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';
