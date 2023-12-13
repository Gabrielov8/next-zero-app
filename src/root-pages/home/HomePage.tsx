import React from 'react';
import classNames from 'classnames';

import styles from './HomePage.module.scss';
import cs from '@theme/scss/theme.module.scss';

const HomePage = () => {
	return (
		<div className={classNames(cs.container, styles.textWrapper)}>
			<span className={styles.text}>HOME PAGE</span>
		</div>
	);
};

export default HomePage;