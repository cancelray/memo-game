import { useSelector } from 'react-redux';

import Button from '../../UI/Button/Button';

import { selectGameVariant } from '../../../store/gameVariant.slice';

import useGameContext from '../../../hooks/context/useGameContext';

import styles from './StartNewGame.module.css';

const StartNewGame = () => {
	const gameVariant = useSelector(selectGameVariant);

	const { startNewGame } = useGameContext();

	return (
		<div className={styles.newGame}>
			<Button onClick={() => startNewGame(gameVariant)}>Start new game</Button>
		</div>
	);
};

export default StartNewGame;
