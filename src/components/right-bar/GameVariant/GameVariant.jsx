import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import Button from '../../UI/Button/Button';

import styles from './GameVariant.module.css';

const GameVariant = () => {
	const { gameVariants, changeGameVariatn } = useContext(GameContext);

	return (
		<div className={styles.gameVariant}>
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
		</div>
	);
};

export default GameVariant;
