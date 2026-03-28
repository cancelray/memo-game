import { useEffect, useRef } from 'react';

const useTimer = (
	time,
	setTime,
	openCards,
	setOpenCards,
	cardShow,
	setCardShow,
	gameStart,
	setGameStart,
	setBestTimeArr,
) => {
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
									return [...prev, timeRef.current]
										.sort((a, b) => a - b)
										.slice(0, -1);
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameStart]);

	return {
		time,
		setTime,
		formatTime,
	};
};

export default useTimer;
