import RouterLink from '../UI/RouterLink/RouterLink';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<RouterLink href='/'>
				<img
					className={styles.logo}
					src='/logo.png'
					alt='logo'
				/>
			</RouterLink>
			<div className={styles.links}>
				<RouterLink href='/game'>Game</RouterLink>
				<RouterLink href='/leaderboard'>Leaderboard</RouterLink>
			</div>
		</header>
	);
};

export default Header;
