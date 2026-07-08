import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import playersAPI from '../api/index.ts';

import type { Winner } from '../types/Winner.type.ts';

import { addNewTopFiveWinner } from '../store/bestTimeArr.slice.ts';
import {
	cardsAreEqual,
	cardsNotEqual,
	selectCardShow,
} from '../store/cardShow.slice.ts';
import {
	clearTwoOpenCards,
	selectOpenCards,
} from '../store/openCards.slice.ts';
import { selectTime, setTime } from '../store/time.slice.ts';

const useTimer = (
	gameStart: boolean,
	setGameStart: React.Dispatch<React.SetStateAction<boolean>>,
	userName: string,
) => {
	const dispatch = useDispatch();

	const time = useSelector(selectTime);
	const openCards = useSelector(selectOpenCards);
	const cardShow = useSelector(selectCardShow);

	const intervalRef = useRef(0);
	const timeRef = useRef(time);

	useEffect(() => {
		timeRef.current = time;
	}, [time]);

	const formatTime = (time: number): string => {
		const ms = Math.floor((time % 1000) / 10);
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / (1000 * 60)) % 60);
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (
				openCards.firstCard &&
				openCards.secondCard &&
				openCards.firstCardId !== null &&
				openCards.secondCardId !== null
			) {
				if (openCards.firstCard === openCards.secondCard) {
					if (openCards.firstCardId) {
						dispatch(cardsAreEqual({ firstCardId: openCards.firstCardId }));
					}

					if (cardShow?.every((val: boolean) => val === true)) {
						setGameStart(false);

						const newWinner: Winner = {
							name: userName.length > 0 ? userName : 'Anonymous',
							time: timeRef.current,
						};

						playersAPI.addTime(newWinner).catch((err) => alert(err));

						dispatch(
							addNewTopFiveWinner({
								newWinner: newWinner,
								time: timeRef.current,
							}),
						);
						// setBestTimeArr((prev) => {
						// 	if (prev.length < 5) {
						// 		return [...prev, newWinner].sort((a, b) => a.time - b.time);
						// 	} else {
						// 		const index = prev.findIndex((el) => el.time > timeRef.current);
						// 		if (index === -1) {
						// 			return [...prev];
						// 		} else {
						// 			return [...prev, newWinner]
						// 				.sort((a, b) => a.time - b.time)
						// 				.slice(0, -1);
						// 		}
						// 	}
						// });
					}
				}

				if (openCards.firstCard !== openCards.secondCard) {
					dispatch(
						cardsNotEqual({
							firstCardId: openCards.firstCardId,
							secondCardId: openCards.secondCardId,
						}),
					);
				}

				dispatch(clearTwoOpenCards());
			}
		}, 1000);

		return () => clearTimeout(timer);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [openCards, cardShow]);

	useEffect(() => {
		if (gameStart) {
			const interval = 100;

			intervalRef.current = setInterval(() => {
				dispatch(setTime(interval));
			}, interval);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => clearInterval(intervalRef.current);
	}, [gameStart, dispatch]);

	return {
		formatTime,
	};
};

export default useTimer;
