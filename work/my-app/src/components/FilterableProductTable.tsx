import {useState} from 'react';
import type Product from '../types/Product';
import filterProducts from '../utils/filterProducts';
import ProductTable from './ProductTable';
import SearcBar from './SearcBar';
import TimerControl from './TimerControl';
type FilterableProductTableProps = {
	products: Product[];
};
function useProductsFilter(products: Product[]) {
	const [filterText, setFilterText] = useState<string>('');
	const [inStockedOnly, setInStockedOnly] = useState<boolean>(false);
	const filteredProducts = filterProducts(products, {
		filterText,
		inStockedOnly,
	});
	return {
		filterText, setFilterText, inStockedOnly, setInStockedOnly, filteredProducts,

	};
}

export default function FilterableProductTable({
	products,
}: FilterableProductTableProps) {
	const {
		filterText, setFilterText,
		inStockedOnly, setInStockedOnly,
		filteredProducts,
	} = useProductsFilter(products);
	// InStockOnly가 있어야 하는곳
	// filterText가 있어야 하는곳

	return (
		<div className='filterable-products-table'>
			<SearcBar
				filterText={filterText}
				setFilterText={setFilterText}
				inStockedOnly={inStockedOnly}
				setInStockedOnly={setInStockedOnly}
			/>
			<ProductTable products={filteredProducts} />
		</div>
	);
}
