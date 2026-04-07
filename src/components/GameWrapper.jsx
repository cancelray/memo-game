import GameField from './game-field/GameField';
import StartNewGame from './left-bar/StartNewGame';
import Timer from './left-bar/Timer';
import UserNameForm from './left-bar/UserNameForm';
import BestTime from './right-bar/BestTime';
import WinTimer from './right-bar/WinTimer';

const GameWrapper = () => {
	return (
		<div className='game-wrapper'>
			<WinTimer />
			<div className='main'>
				<div className='side-bar left'>
					<Timer />
					<UserNameForm />
					<StartNewGame />
				</div>
				<GameField />
				<div className='side-bar right'>
					<BestTime />
				</div>
			</div>
		</div>
	);
};

export default GameWrapper;
