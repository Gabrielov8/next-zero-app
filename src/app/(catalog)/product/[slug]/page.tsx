import { FC } from 'react';

import ProductPage from '@/root-pages/product/ProductPage';

type Props = { params: { slug: string } };

const ProductDetailPage: FC<Props> = ({ params: { slug } }) => {
	return (
		<ProductPage slug={slug} />
	);
};

export default ProductDetailPage;
