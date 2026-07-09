import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to='/' >
				<img
					className={styles.logo}
					src={`${import.meta.env.BASE_URL}logo.png`}
					alt='logo'
				/>
			</NavLink>
			<div className={styles.links}>
				<NavLink to='/game' className={styles.link}>Game</NavLink>
				<NavLink to='/leaderboard' className={styles.link}>Leaderboard</NavLink>
			</div>
		</header>
	);
};

export default Header;
