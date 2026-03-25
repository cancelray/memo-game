import GameField from './game-field/GameField';
import StartNewGame from './left-bar/StartNewGame';
import Timer from './left-bar/Timer';
import BestTime from './right-bar/BestTime';
import WinTimer from './right-bar/WinTimer';

const GameWrapper = () => {
	return (
		<div className='game-wrapper'>
			<div className='side-bar left'>
				<Timer />
				<StartNewGame />
			</div>
			<GameField />
			<div className='side-bar right'>
				<WinTimer />
				<BestTime />
			</div>
		</div>
	);
};

export default GameWrapper;
