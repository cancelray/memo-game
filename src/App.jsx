import useGame from './hooks/useGame';
import useTimer from './hooks/useTimer';

import { GameContext } from './context/context';

import GameWrapper from './GameWrapper';

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
	} = useGame();

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
			}}
		>
			<GameWrapper />
		</GameContext.Provider>
	);
}

export default App;
