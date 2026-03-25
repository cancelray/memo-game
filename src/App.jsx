import { useEffect, useRef, useState } from 'react';

import { GameContext } from './context/context';

import GameWrapper from './GameWrapper';
import { randomCardsArr } from './initial/initialCardsArr';

import './App.css';

function App() {
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

	const intervalRef = useRef(null);
	const timeRef = useRef(time);

	useEffect(() => {
		timeRef.current = time + 10;
	}, [time]);

	const formatTime = (time) => {
		const ms = Math.floor((time % 1000) / 10);
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / (1000 * 60)) % 60);
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (openCards.firstCard && openCards.secondCard) {
				if (openCards.firstCard === openCards.secondCard) {
					setCardShow((prev) => {
						prev[openCards.firstCardId] = true;
						return [...prev];
					});

					if (cardShow.every((val) => val === true)) {
						setGameStart(false);

						setBestTimeArr((prev) => {
							if (prev.length < 5) {
								return [...prev, timeRef.current].sort((a, b) => a - b);
							} else {
								const index = prev.findIndex((el) => el > timeRef.current);
								if (index === -1) {
									return [...prev];
								} else {
									prev.splice(index, 0, timeRef.current);
									prev.pop();
									return [...prev];
								}
							}
						});
					}
				}

				if (openCards.firstCard != openCards.secondCard) {
					setCardShow((prev) => {
						prev[openCards.firstCardId] = false;
						prev[openCards.secondCardId] = false;
						return [...prev];
					});
				}

				setOpenCards({
					firstCard: null,
					firstCardId: null,
					secondCard: null,
					secondCardId: null,
				});
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [openCards, cardShow]);

	useEffect(() => {
		if (gameStart) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [gameStart]);

	return (
		<GameContext.Provider
			value={{
				cardsArr,
				setCardsArr,
				randomCardsArr,
				cardShow,
				setCardShow,
				openCards,
				setOpenCards,
				time,
				setTime,
				gameStart,
				setGameStart,
				formatTime,
				bestTimeArr,
			}}
		>
			<GameWrapper />
		</GameContext.Provider>
	);
}

export default App;
