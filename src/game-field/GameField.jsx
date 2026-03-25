import { useContext } from 'react';

import { GameContext } from '../context/context';

import Card from '../UI/Card';

const GameField = () => {
	const {
		cardsArr,
		cardShow,
		setCardShow,
		openCards,
		setOpenCards,
		gameStart,
		setGameStart,
	} = useContext(GameContext);

	const cardClick = (event) => {
		if (!gameStart) {
			setGameStart(true);
		}

		setCardShow((prev) => {
			prev[event.target.id] = true;
			return [...prev];
		});
		if (!openCards.firstCard) {
			setOpenCards((prev) => {
				prev.firstCard = cardsArr[event.target.id].value;
				prev.firstCardId = event.target.id;
				return { ...prev };
			});
			return;
		}
		if (!openCards.secondCard && event.target.id !== openCards.firstCardId) {
			setOpenCards((prev) => {
				prev.secondCard = cardsArr[event.target.id].value;
				prev.secondCardId = event.target.id;
				return { ...prev };
			});
			return;
		}
	};

	return (
		<div className='game-field'>
			{cardsArr.map((card, i) => (
				<Card
					key={i}
					id={i}
					cardShow={cardShow[i]}
					cardClick={
						openCards.firstCard && openCards.secondCard ? null : cardClick
					}
					cardImage={card.image}
				/>
			))}
		</div>
	);
};

export default GameField;
