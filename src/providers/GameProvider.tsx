import { useMemo } from 'react';

import { GameContext } from '../context/context';

import useGame from '../hooks/useGame';
import useTimer from '../hooks/useTimer';
import useUserName from '../hooks/useUserName';

import type { ChildrenProps } from '../types/props/ChildrenProps.type';

const GameProvider = ({ children }: ChildrenProps) => {
	const {
		gameStart,
		setGameStart,
		startNewGame,

		cardClick,
		gameVariants,
		changeGameVariant,
	} = useGame();

	const {
		userName,
		addUserName,
		userNameValue,
		userNameInputChange,
		deleteName,
	} = useUserName();

	const { formatTime } = useTimer(gameStart, setGameStart, userName);

	const value = useMemo(
		() => ({
			cardClick,
			formatTime,
			gameStart,
			startNewGame,
			userName,
			addUserName,
			userNameValue,
			userNameInputChange,
			deleteName,
			gameVariants,
			changeGameVariant,
		}),
		[
			cardClick,
			formatTime,
			gameStart,
			startNewGame,
			userName,
			addUserName,
			userNameValue,
			userNameInputChange,
			deleteName,
			gameVariants,
			changeGameVariant,
		],
	);

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
