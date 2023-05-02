import type Product from '../types/Product';

type ProductRowProps = {
	product: Product;
};
export default function ProductRow({product}: ProductRowProps) {
	return (
		<tr>
			<span style={product.stocked ? {} : {color: '#F00'}}>{product.name}</span>
			<td>{product.price}</td>
		</tr>
	);
}
