'use client';

import { IMetaData } from '@/types/meta.types';

import type { FC } from 'react';
import dynamic from 'next/dynamic';

import styles from './Layout.module.scss';

const Meta = dynamic(() => import('@/shared/ui/services/Meta/Meta'));
const Header = dynamic(() => import('./components/Header/Header'));
const Footer = dynamic(() => import('./components/Footer/Footer'));

interface LayoutProps {
	children: JSX.Element | null;
	meta?: IMetaData;
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
	return (
		<>
			<Meta meta={meta} />
			<div className={styles.root}>
				<Header />
				<div className={styles.content}>
					<main className={styles.main}>{children}</main>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
