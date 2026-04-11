import { useContext } from 'react';

import { GameContext } from '../../context/context';

import Button from '../UI/Button/Button';

import styles from './Header.module.css';

const Header = () => {
	const { gameVariants, changeGameVariatn } = useContext(GameContext);

	return (
		<header className={styles.header}>
			<div className={styles.switchGameVariant}>
				<p>Game variants:</p>
				{gameVariants.map((variant, i) => (
					<Button
						key={i}
						onClick={() => changeGameVariatn(variant)}
					>
						{variant}
					</Button>
				))}
			</div>
		</header>
	);
};

export default Header;
