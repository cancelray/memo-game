import GameField from '../game-field/GameField';
import StartNewGame from '../left-bar/StartNewGame/StartNewGame';
import Timer from '../left-bar/Timer/Timer';
import UserNameForm from '../left-bar/UserNameForm/UserNameForm';
import BestTime from '../right-bar/BestTime/BestTime';
import WinTimer from '../right-bar/WinTimer/WinTimer';

import styles from './GameWrapper.module.css';

const GameWrapper = () => {
	return (
		<div className={styles.gameWrapper}>
			<WinTimer />
			<div className={styles.main}>
				<div className={`${styles.sideBar} ${styles.left}`}>
					<Timer />
					<UserNameForm />
					<StartNewGame />
				</div>
				<GameField />
				<div className={`${styles.sideBar} ${styles.right}`}>
					<BestTime />
				</div>
			</div>
		</div>
	);
};

export default GameWrapper;
