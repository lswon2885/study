import CheckBoxField from './CheckBoxField';
import TextField from './TextField';

type SearchBarProps = {
	filterText: string;
	setFilterText: (value: string) => void;
	inStockedOnly: boolean;
	setInStockedOnly: (value: boolean) => void;
};
export default function SearcBar({
	filterText, setFilterText, inStockedOnly, setInStockedOnly,
}: SearchBarProps) {
	return (
		<div className='search-bar'>
			<TextField
				placeholder='Search...'
				filterText={filterText}
				setFilterText={setFilterText}
			/>
			<CheckBoxField
				label='Only show products in stock'
				inStockedOnly={inStockedOnly}
				setInStockedOnly={setInStockedOnly}
			/>
		</div>
	);
}
