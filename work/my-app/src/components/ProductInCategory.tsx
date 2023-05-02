import type Product from '../types/Product';
import selectProducts from '../utils/selectProducts';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

type ProductInCategoryProps = {
	category: string;
	products: Product[];
};

export default function ProductInCategory({
	category, products,
}: ProductInCategoryProps) {
	const productsInCategory = selectProducts(products, category);
	return (
		<>
			<ProductCategoryRow category={category}></ProductCategoryRow>
			{productsInCategory.map(product => (
				<ProductRow key={product.name} product={product}></ProductRow>
			))}
		</>
	);
}

