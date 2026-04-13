import RouterLink from '../../components/UI/RouterLink/RouterLink';

import styles from './IndexPage.module.css';

const IndexPage = () => {
	return (
		<div className={styles.indexPage}>
			<RouterLink href='/game'>Game</RouterLink>
			<RouterLink href='/leaderboard'>Leaderboard</RouterLink>
		</div>
	);
};

export default IndexPage;
