import React, { FC } from 'react';

type Props = { params: { slug: string } };

const ProductDetailPage: FC<Props> = ({ params: { slug } }) => {
	return (
		<div>
			детальная страница товара {slug}
		</div>
	);
};

export default ProductDetailPage;
