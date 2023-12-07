import type { FC } from 'react';

import styles from './Errors.module.scss';

interface ErrorProps {
	error?: number;
}

const ErrorPage: FC<ErrorProps> = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Internal server error</h1>
			<p className={styles.text}>Something went wrong. Try to refresh this page</p>
		</div>
	);
};

const NotFoundPage = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Page not found</h1>
			<p className={styles.text}>The page you are looking for does not exist</p>
		</div>
	);
};

const Error: FC<ErrorProps> = ({ error }) => {
	return <>{error === 404 ? <NotFoundPage /> : <ErrorPage />}</>;
};

export default Error;
