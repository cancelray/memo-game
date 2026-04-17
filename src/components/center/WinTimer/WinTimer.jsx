import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import styles from './WinTimer.module.css';

const WinTimer = () => {
	const { time, gameStart, formatTime } = useContext(GameContext);

	return (
		<div className={styles.winTime}>
			{time > 0 && !gameStart ? (
				<h5>You win! Time: {formatTime(time)}</h5>
			) : null}
		</div>
	);
};

export default WinTimer;
