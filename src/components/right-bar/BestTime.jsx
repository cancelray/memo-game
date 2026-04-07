import { useContext } from 'react';

import { GameContext } from '../../context/context';

const BestTime = () => {
	const { bestTimeArr, formatTime } = useContext(GameContext);

	return (
		<div className='best-times'>
			<h4>Top 5</h4>
			{bestTimeArr.length > 0 ? (
				<ol className='best-time'>
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
