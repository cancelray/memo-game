import { useContext } from 'react';

import { GameContext } from '../context/context';

import Button from '../UI/Button';

const StartNewGame = () => {
	const { startNewGame } = useContext(GameContext);

	return (
		<div className='new-game'>
			<Button onClick={startNewGame}>Start new game</Button>
		</div>
	);
};

export default StartNewGame;
