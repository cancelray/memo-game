import { useContext } from 'react';

import { GameContext } from '../../context/context';

import Card from '../UI/Card';

const GameField = () => {
	const { cardsArr, cardShow, openCards, cardClick, gameVariant } =
		useContext(GameContext);

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
					gameVariant={gameVariant}
				/>
			))}
		</div>
	);
};

export default GameField;
