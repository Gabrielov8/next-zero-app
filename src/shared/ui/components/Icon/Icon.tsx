import React, { cloneElement, FC } from 'react';
import { TColorKey, themeColors } from '@theme/scss/colors/colors.constants';
import classNames from 'classnames';

import styles from './Icon.module.scss';

import { IconList } from '@/shared/ui/components/Icon/IconList.constants';

interface Props {
	icon: keyof typeof IconList;
	color?: TColorKey;
	colorType?: 'fill' | 'stroke';
	className?: string;
	size?: 'large' | 'small' | 'default';
}

/**
 *
 * @param icon - иконка
 * @param size - размер (small, large)
 * @param color - цвет из набора цветов
 * @param colorType - тип заливки (некоторые иконки нуждаются в заливке path - stroke, а некоторым хватит fill
 * @param className - дополнительный класс
 */
const Icon: FC<Props> = ({ icon, size, color = 'black', colorType = 'fill', className }) => {
	const iconWrapper = classNames(styles.iconContainer, {
		[styles[size ?? 'default']]: size
	});
	
	const iconElement = IconList[icon];
	
	const iconProps = {
		style: colorType === 'stroke' ? {
			color: themeColors[color]
		} : {},
		className: classNames(styles.icon, className, (colorType === 'fill' ? styles[color] : ''))
	};
	
	return (
		<div className={iconWrapper}>
			{cloneElement(iconElement, iconProps)}
		</div>
	);
};

export default Icon;
