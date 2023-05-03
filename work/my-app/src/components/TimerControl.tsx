import {useEffect, useRef, useState} from 'react';
import {useBoolean} from 'usehooks-ts';
function Timer() {
	useEffect(() => {
		const savedTitle = document.title;
		console.log('Effect');
		const id = setInterval(() => {
			document.title = `Now: ${new Date().getTime()}`;
		}, 100);
		return () => {
			document.title = savedTitle;
			console.log('End of Effect');
			clearInterval(id);
		};
	});
	return <p>Playing</p>;
}

export default function TimerControl() {
	const {value: playing, toggle: togglePlaying} = useBoolean();
	// const [playing, setPlaying] = useState(false);
	const [count, setCount] = useState(0);
	const handleClick = () => {
		togglePlaying();
	};

	return (
		<div>
			{playing ? (
				<Timer/>
			) : (
				<p>Stop</p>
			)}
			<button type='button' onClick={handleClick}>
				Toggle
			</button>
			<p>{count}</p>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>
				Increase
			</button>
		</div>
	);
}
