import { useContext, useEffect, useState } from 'react';

import { GameContext } from '../../context/context';

import playersAPI from '../../api/playersAPI';

import RouterLink from '../../components/UI/RouterLink/RouterLink';
import styles from './LeaderboardPage.module.css';

const LeaderboardPage = () => {
	const { formatTime } = useContext(GameContext);

	const [leaderboard, setLeaderboard] = useState([]);

	useEffect(() => {
		playersAPI
			.getPlayers()
			.then((data) => setLeaderboard(data.sort((a, b) => a.time - b.time)));
	}, []);

	return (
		<div className={styles.leaderboard}>
			<h2>Leaderboard</h2>
			<ol className={styles.leaderboardList}>
				{leaderboard.map((player) => (
					<li key={player.id}>
						Name: {player.name} Time: {formatTime(player.time)}
					</li>
				))}
			</ol>
			<RouterLink href='/game'>Play</RouterLink>
		</div>
	);
};

export default LeaderboardPage;
