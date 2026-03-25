import { useContext } from 'react';
import { GameContext } from '../context/context';

const Timer = () => {
	const { time, formatTime } = useContext(GameContext);

	return <div className='timer'>{formatTime(time)}</div>;
};

export default Timer;
