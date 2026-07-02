import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import Button from '../../UI/Button/Button';

import styles from './StartNewGame.module.css';

const StartNewGame = () => {
	const { startNewGame, gameVariant } = useContext(GameContext);

	return (
		<div className={styles.newGame}>
			<Button onClick={() => startNewGame(gameVariant)}>Start new game</Button>
		</div>
	);
};

export default StartNewGame;
