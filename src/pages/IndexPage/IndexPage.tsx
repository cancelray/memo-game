import { NavLink } from 'react-router-dom';

import styles from './IndexPage.module.css';

const IndexPage = () => {
	return (
		<div className={styles.indexPage}>
			<NavLink to='/game' className={styles.link}>Game</NavLink>
			<NavLink to='/leaderboard' className={styles.link}>Leaderboard</NavLink>
		</div>
	);
};

export default IndexPage;
