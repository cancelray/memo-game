import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import styles from './Timer.module.css';

const Timer = () => {
	const { time, formatTime } = useContext(GameContext);

	return <div className={styles.timer}>{formatTime(time)}</div>;
};

export default Timer;
