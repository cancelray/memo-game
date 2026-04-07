import { useEffect, useState } from 'react';

import playersAPI from '../api/playersAPI.js';
import { randomCardsArr } from '../initial/indexInitial.js';

const useGame = () => {
	const [gameVariant, setGameVariant] = useState('browser');
	const [cardsArr, setCardsArr] = useState(() => randomCardsArr(gameVariant));
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

	const gameVariants = ['browser', 'tech', 'game'];

	const changeGameVariatn = (variant) => {
		setGameVariant(variant);
		startNewGame(variant);
	};

	const startNewGame = (variant) => {
		setGameStart(false);

		setCardsArr(() => randomCardsArr(variant));

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
		if (!gameStart && cardShow.every((value) => value === false)) {
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

	useEffect(() => {
		playersAPI.getPlayers().then((data) => {
			if (data.length < 5) {
				setBestTimeArr(data);
			} else {
				const topFive = data.sort((a, b) => a.time - b.time).slice(0, 5);
				setBestTimeArr(topFive);
			}
		});
	}, []);

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
		gameVariant,
		gameVariants,
		changeGameVariatn,
	};
};

export default useGame;
