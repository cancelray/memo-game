import { useContext } from 'react';

import Button from '../../UI/Button/Button';

import { GameContext } from '../../../context/context';

import styles from './UserNameForm.module.css';

const UserNameForm = () => {
	const {
		userName,
		addUserName,
		userNameValue,
		userNameInputChange,
		deleteName,
	} = useContext(GameContext);

	return (
		<div className={styles.userNameDiv}>
			<div className={styles.playerName}>
				<h3>Player name: {userName.length > 0 ? userName : 'Anonymous'}</h3>
				<Button onClick={deleteName}>Delete name</Button>
			</div>
			<form
				className={styles.userNameForm}
				onSubmit={addUserName}
			>
				<input
					id='user-name-input'
					type='text'
					className={styles.userNameInput}
					placeholder='Your name'
					value={userNameValue}
					onChange={userNameInputChange}
				/>
				<Button>Confirm</Button>
			</form>
		</div>
	);
};

export default UserNameForm;
