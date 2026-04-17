import { useContext } from 'react';

import { GameContext } from '../../../context/context';

import Card from '../../UI/Card/Card';

import styles from './GameField.module.css';

const GameField = () => {
	const { cardsArr, cardShow, openCards, cardClick, gameVariant } =
		useContext(GameContext);

	return (
		<div className={styles.field}>
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
