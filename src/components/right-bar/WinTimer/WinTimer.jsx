import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import styles from './WinTimer.module.css';

const WinTimer = () => {
	const { time, gameStart, formatTime } = useContext(GameContext);

	return (
		<div className={styles.winTime}>
			{time > 0 && !gameStart ? <h5>Win, time: {formatTime(time)}</h5> : null}
		</div>
	);
};

export default WinTimer;
