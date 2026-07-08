import { useSelector } from 'react-redux';

import { selectTime } from '../../../store/time.slice';

import useGameContext from '../../../hooks/context/useGameContext';

import styles from './WinTimer.module.css';

const WinTimer = () => {
	const time = useSelector(selectTime);

	const { gameStart, formatTime } = useGameContext();

	return (
		<div className={styles.winTime}>
			{time > 0 && !gameStart ? (
				<h5>You win! Time: {formatTime(time)}</h5>
			) : null}
		</div>
	);
};

export default WinTimer;
