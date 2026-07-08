import Button from '../../UI/Button/Button';

import useGameContext from '../../../hooks/context/useGameContext';

import styles from './GameVariant.module.css';

const GameVariant = () => {
	const { gameVariants, changeGameVariant } = useGameContext();

	return (
		<div className={styles.gameVariant}>
			<div className={styles.switchGameVariant}>
				<p>Game variants:</p>
				{gameVariants.map((variant: string, i: number) => (
					<Button
						key={i}
						onClick={() => changeGameVariant(variant)}
					>
						{variant}
					</Button>
				))}
			</div>
		</div>
	);
};

export default GameVariant;
