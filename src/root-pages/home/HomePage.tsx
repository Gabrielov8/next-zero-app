'use client';

import React from 'react';
import classNames from 'classnames';

import styles from './HomePage.module.scss';
import cs from '@theme/scss/theme.module.scss';

import { Button } from '@/shared/ui/components/Button';

const HomePage = () => {
	return (
		<div>
			<div className={classNames(cs.row, styles.textWrapper)}>
				<div className={classNames(cs.col12)}>
					<div><span className={classNames(cs.col12, styles.text)}>HOME PAGE 1</span></div>
					<div>
						<button>dsa 2</button>
					</div>
					<div>3</div>
				</div>
				<div className={classNames(cs.col12)}>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</div>
				<div>
					<Button r22={true} className={classNames(cs.h5)} onClick={() => console.log('click')}>
						Выбрать 1
					</Button>
					<Button r22={true}
									className={classNames(cs.h5)}
									onClick={() => console.log('click')}
									color={'primaryOutlined'}>
						Выбрать 2
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;