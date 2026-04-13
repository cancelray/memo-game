import useGame from './hooks/useGame';
import useTimer from './hooks/useTimer';
import useUserName from './hooks/useUserName';

import { GameContext } from './context/context';

import PageNotFound from './components/404/PageNotFound';
import Header from './components/Header/Header';
import GamePage from './pages/GamePage/GamePage';
import IndexPage from './pages/IndexPage/IndexPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';
import Router from './Router';

function App() {
	const {
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
		setGameVariatn,
		changeGameVariatn,
	} = useGame();

	const {
		userName,
		addUserName,
		userNameValue,
		userNameInputChange,
		deleteName,
	} = useUserName();

	const { formatTime } = useTimer(
		time,
		setTime,
		openCards,
		setOpenCards,
		cardShow,
		setCardShow,
		gameStart,
		setGameStart,
		setBestTimeArr,
		userName,
	);

	const routes = {
		'/': IndexPage,
		'/game': GamePage,
		'/leaderboard': LeaderboardPage,
		'*': PageNotFound,
	};

	return (
		<GameContext.Provider
			value={{
				cardsArr,
				cardClick,
				cardShow,
				openCards,
				time,
				formatTime,
				gameStart,
				startNewGame,
				bestTimeArr,
				userName,
				addUserName,
				userNameValue,
				userNameInputChange,
				deleteName,
				gameVariant,
				gameVariants,
				setGameVariatn,
				changeGameVariatn,
			}}
		>
			<Header />
			<Router routes={routes} />
		</GameContext.Provider>
	);
}

export default App;
