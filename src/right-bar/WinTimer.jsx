import { useContext } from 'react';
import { GameContext } from '../context/context';

const WinTimer = () => {
	const { time, gameStart, formatTime } = useContext(GameContext);

	return (
		<div className='win-time'>
			{time > 0 && !gameStart ? <h5>Win, time: {formatTime(time)}</h5> : null}
		</div>
	);
};

export default WinTimer;
