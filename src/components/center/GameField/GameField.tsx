import { useSelector } from 'react-redux';

import Card from '../../UI/Card/Card';

import type { CardType } from '../../../types/Card.type';

import { selectCardsArr } from '../../../store/cardsArr.slice';
import { selectCardShow } from '../../../store/cardShow.slice';
import { selectGameVariant } from '../../../store/gameVariant.slice';

import useGameContext from '../../../hooks/context/useGameContext';

import styles from './GameField.module.css';

const GameField = () => {
	const cardsArr = useSelector(selectCardsArr);
	const gameVariant = useSelector(selectGameVariant);
	const cardShow = useSelector(selectCardShow);

	const { cardClick } = useGameContext();

	return (
		<div className={styles.field}>
			{cardsArr.map((card: CardType, i: number) => (
				<Card
					key={card.id}
					id={i}
					cardShow={cardShow[i]}
					cardClick={cardClick}
					cardImage={card.image}
					gameVariant={gameVariant}
				/>
			))}
		</div>
	);
};

export default GameField;
