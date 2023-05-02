import {useRef} from 'react';

type CheckBoxFieldProps = {
	label: string;
	inStockedOnly: boolean;
	setInStockedOnly: (value: boolean) => void;

};
export default function CheckBoxField({
	label,
	inStockedOnly,
	setInStockedOnly,
}: CheckBoxFieldProps) {
	const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());

	const handleChange = () => {
		setInStockedOnly(!inStockedOnly);
	};

	return (

		<div>
			<input
				type='checkbox'
				id={id.current}
				checked={inStockedOnly}
				onChange={handleChange}
			/>
			<label htmlFor={id.current}>
				{label}
			</label>
		</div>
	);
}
