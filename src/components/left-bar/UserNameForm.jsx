import { useContext } from 'react';

import Button from '../UI/Button';

import { GameContext } from '../../context/context';

const UserNameForm = () => {
	const {
		userName,
		addUserName,
		userNameValue,
		userNameInputChange,
		deleteName,
	} = useContext(GameContext);

	return (
		<div className='user-name-div'>
			<div className='player-name'>
				<h3>Player name: {userName.length > 0 ? userName : 'Anonymous'}</h3>
				<Button onClick={deleteName}>Delete name</Button>
			</div>
			<form
				className='user-name-form'
				onSubmit={addUserName}
			>
				<input
					id='user-name-input'
					type='text'
					className='user-name-input'
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
