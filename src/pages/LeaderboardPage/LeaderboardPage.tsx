import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import playersAPI from '../../api/index.ts';

import useGameContext from '../../hooks/context/useGameContext.ts';

import type { Winner } from '../../types/Winner.type.ts';

import styles from './LeaderboardPage.module.css';

const LeaderboardPage = () => {
	const { formatTime } = useGameContext();

	const [leaderboard, setLeaderboard] = useState<Winner[]>([]);

	useEffect(() => {
		playersAPI
			.getPlayers()
			.then((data) =>
				setLeaderboard(data.sort((a: Winner, b: Winner) => a.time - b.time)),
			);
	}, []);

	return (
		<div className={styles.leaderboard}>
			<h2>Leaderboard</h2>
			<ol className={styles.leaderboardList}>
				{leaderboard.map((player: Winner) => (
					<li key={player.id}>
						Name: {player.name} Time: {formatTime(player.time)}
					</li>
				))}
			</ol>
			<NavLink to='/game' className={styles.link}>Play</NavLink>
		</div>
	);
};

export default LeaderboardPage;
