import useGame from './hooks/useGame';
import useTimer from './hooks/useTimer';
import useUserName from './hooks/useUserName';

import { GameContext } from './context/context';

import GameWrapper from './components/GameWrapper/GameWrapper';
import Header from './components/header/Header';

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
			<GameWrapper />
		</GameContext.Provider>
	);
}

export default App;
