
import {useEffect, useRef, useState} from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import TimerControl from './components/TimerControl';
import useFetchProducts from './hooks/useFetchProducts';

export default function App() {
	const products = useFetchProducts();
	return (
		<div>
			<TimerControl/>
			<hr/>
			<h1>상품</h1>
			<FilterableProductTable products={products}/>
		</div>
	);
}
