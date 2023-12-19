'use client';

import React, { FC, PropsWithChildren } from 'react';

const Body: FC<PropsWithChildren> = ({ children }) => {
	return <body>{children}</body>;
};

export default Body;