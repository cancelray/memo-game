import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import playersAPI from '../api/index.ts';

import { randomCardsArr } from '../initial/indexInitial.ts';

import type { CardType } from '../types/Card.type.ts';
import type { Winner } from '../types/Winner.type.ts';

import { setBestTimeArr } from '../store/bestTimeArr.slice.ts';
import { selectCardsArr, setCardsArr } from '../store/cardsArr.slice.ts';
import {
	closeAllCards,
	openCard,
	selectCardShow,
} from '../store/cardShow.slice.ts';
import {
	selectGameVariant,
	setGameVariant,
} from '../store/gameVariant.slice.ts';
import {
	clearTwoOpenCards,
	openFirstCard,
	openSecondCard,
	selectOpenCards,
} from '../store/openCards.slice.ts';
import { setTimeToZero } from '../store/time.slice.ts';

const useGame = () => {
	const dispatch = useDispatch();

	const cardsArr = useSelector(selectCardsArr);
	const cardShow = useSelector(selectCardShow);
	const openCards = useSelector(selectOpenCards);
	const gameVariant = useSelector(selectGameVariant);

	const [gameStart, setGameStart] = useState<boolean>(false);

	const gameVariants: string[] = ['browser', 'tech', 'game'];

	const startNewGame = (variant: string) => {
		setGameStart(false);

		const newCardsArr = randomCardsArr(variant);
		dispatch(setCardsArr(newCardsArr));

		dispatch(closeAllCards());
		dispatch(clearTwoOpenCards());

		dispatch(setTimeToZero());
	};

	const changeGameVariant = (variant: string) => {
		dispatch(setGameVariant(variant));
		startNewGame(variant);
	};

	const cardClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (openCards.firstCard && openCards.secondCard) {
			return;
		}

		if (!gameStart && cardShow?.every((value) => value === false)) {
			setGameStart(true);
		}

		const eventTarget = event.target as HTMLDivElement;
		const targetId = Number(eventTarget.id);

		if (cardShow[targetId]) {
			return;
		}

		dispatch(openCard(targetId));

		if (!openCards.firstCard) {
			dispatch(openFirstCard({ cardsArr, targetId }));
			return;
		}

		if (!openCards.secondCard && targetId !== openCards.firstCardId) {
			dispatch(openSecondCard({ cardsArr, targetId }));
			return;
		}
	};

	useEffect(() => {
		playersAPI.getPlayers().then((data) => {
			if (data.length < 5) {
				dispatch(setBestTimeArr(data));
			} else {
				const topFive = data
					.sort((a: Winner, b: Winner) => a.time - b.time)
					.slice(0, 5);
				dispatch(setBestTimeArr(topFive));
			}
		});

		const newCardsArr: CardType[] = randomCardsArr(gameVariant);
		dispatch(setCardsArr(newCardsArr));
	}, [dispatch, gameVariant]);

	return {
		gameStart,
		setGameStart,
		startNewGame,
		cardClick,
		gameVariant,
		gameVariants,
		changeGameVariant,
	};
};

export default useGame;
