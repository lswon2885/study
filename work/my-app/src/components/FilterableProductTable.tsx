import {useState} from 'react';
import type Product from '../types/Product';
import filterProducts from '../utils/filterProducts';
import ProductTable from './ProductTable';
import SearcBar from './SearcBar';
import TimerControl from './TimerControl';
type FilterableProductTableProps = {
	products: Product[];
};
export default function FilterableProductTable({
	products,
}: FilterableProductTableProps) {
	// InStockOnly가 있어야 하는곳
	// filterText가 있어야 하는곳

	const [filterText, setFilterText] = useState<string>('');
	const [inStockedOnly, setInStockedOnly] = useState<boolean>(false);
	const filteredProducts = filterProducts(products, {
		filterText,
		inStockedOnly,
	});
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
