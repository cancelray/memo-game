import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import styles from './BestTime.module.css';

const BestTime = () => {
	const { bestTimeArr, formatTime } = useContext(GameContext);

	return (
		<div className={styles.bestTimes}>
			<h4>Top 5</h4>
			{bestTimeArr.length > 0 ? (
				<ol className={styles.bestTime}>
					{bestTimeArr.map((bestTime, i) => (
						<li key={i}>{`${bestTime.name}: ${formatTime(bestTime.time)}`}</li>
					))}
				</ol>
			) : (
				<p>You will be first!</p>
			)}
		</div>
	);
};

export default BestTime;
