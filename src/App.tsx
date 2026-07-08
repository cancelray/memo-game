import { useMemo } from 'react';

import useGame from './hooks/useGame';
import useTimer from './hooks/useTimer';
import useUserName from './hooks/useUserName';

import { GameContext } from './context/context';

import Router from './Router';

import PageNotFound from './components/404/PageNotFound';
import Header from './components/header/Header';
import GamePage from './pages/GamePage/GamePage';
import IndexPage from './pages/IndexPage/IndexPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';

function App() {
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

	const routes = {
		'/': IndexPage,
		'/game': GamePage,
		'/leaderboard': LeaderboardPage,
		'*': PageNotFound,
	};

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

	return (
		<GameContext.Provider value={value}>
			<Header />
			<Router routes={routes} />
		</GameContext.Provider>
	);
}

export default App;
