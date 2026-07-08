import { useSelector } from 'react-redux';

import { selectTime } from '../../../store/time.slice';

import useGameContext from '../../../hooks/context/useGameContext';

import styles from './Timer.module.css';

const Timer = () => {
	const time = useSelector(selectTime);

	const { formatTime } = useGameContext();

	return <div className={styles.timer}>{formatTime(time)}</div>;
};

export default Timer;
