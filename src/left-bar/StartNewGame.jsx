import { useContext } from 'react';

import { GameContext } from '../context/context';

import { randomCardsArr } from '../initial/initialCardsArr';

import Button from '../UI/Button';

const StartNewGame = () => {
	const { setCardsArr, setCardShow, setOpenCards, setTime, setGameStart } =
		useContext(GameContext);

	const startNewGame = () => {
		setGameStart(false);

		setCardsArr(randomCardsArr());

		setCardShow([
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
			false,
		]);

		setOpenCards({
			firstCard: null,
			firstCardId: null,
			secondCard: null,
			secondCardId: null,
		});

		setTime(0);
	};

	return (
		<div className='new-game'>
			<Button onClick={startNewGame}>Start new game</Button>
		</div>
	);
};

export default StartNewGame;
