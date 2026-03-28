import { useState } from 'react';

import { randomCardsArr } from '../initial/initialCardsArr.js';

const useGame = () => {
	const [cardsArr, setCardsArr] = useState(() => randomCardsArr());
	const [cardShow, setCardShow] = useState([
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
	const [openCards, setOpenCards] = useState({
		firstCard: null,
		firstCardId: null,
		secondCard: null,
		secondCardId: null,
	});
	const [gameStart, setGameStart] = useState(false);
	const [time, setTime] = useState(0);
	const [bestTimeArr, setBestTimeArr] = useState([]);

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

	return {
		cardsArr,
		cardShow,
		setCardShow,
		openCards,
		setOpenCards,
		gameStart,
		setGameStart,
		startNewGame,
		bestTimeArr,
		setBestTimeArr,
		cardClick,
		time,
		setTime,
	};
};

export default useGame;
