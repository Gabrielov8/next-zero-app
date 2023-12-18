'use client';

import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import styles from './Layout.module.scss';

import { IMetaData } from '@/shared/types/meta.types';

const Meta = dynamic(() => import('@/shared/meta/Meta/Meta'));
const Header = dynamic(() => import('./components/Header/Header'));
const Footer = dynamic(() => import('./components/Footer/Footer'));

interface LayoutProps {
	children: ReactNode;
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
