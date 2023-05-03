import type React from 'react';
import {useRef} from 'react';

type TextFiledProps = {
	filterText: string;
	placeholder: string;
	setFilterText: (value: string) => void;
};

export default function TextField({
	filterText,
	placeholder,
	setFilterText,
}: TextFiledProps) {
	const id = useRef(`input-${Math.random()}`);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setFilterText(value);
	};

	return (
		<div>
			<label htmlFor={id.current}>
				Search
			</label>
			<input type={'text'}
				id={id.current}
				placeholder={placeholder}
				value={filterText}
				onChange={handleChange}
			/>
		</div>
	);
}
