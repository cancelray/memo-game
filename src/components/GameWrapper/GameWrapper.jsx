import GameField from '../center/GameField/GameField';
import WinTimer from '../center/WinTimer/WinTimer';
import StartNewGame from '../left-bar/StartNewGame/StartNewGame';
import Timer from '../left-bar/Timer/Timer';
import UserNameForm from '../left-bar/UserNameForm/UserNameForm';
import BestTime from '../right-bar/BestTime/BestTime';
import GameVariant from '../right-bar/GameVariant/GameVariant';

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
					<GameVariant />
					<BestTime />
				</div>
			</div>
		</div>
	);
};

export default GameWrapper;
