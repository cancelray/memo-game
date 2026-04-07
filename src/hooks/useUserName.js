import { useState } from 'react';

const useUserName = () => {
	const [userName, setUserName] = useState(
		localStorage.username ? localStorage.username : '',
	);
	const [userNameValue, setUserNameValue] = useState('');

	const addUserName = (event) => {
		event.preventDefault();
		const clearInput = userNameValue.trim();

		if (clearInput.length > 0) {
			setUserName(clearInput);
			localStorage.setItem('username', clearInput);

			setUserNameValue('');
		} else {
			alert('Name cannot be empty');
		}
	};

	const userNameInputChange = (event) => {
		setUserNameValue(event.target.value);
	};

	const deleteName = () => {
		const deleteNameConfirm = confirm('Delete name?');
		if (deleteNameConfirm) {
			localStorage.removeItem('username');
			setUserName('');
		}
	};

	return {
		userName,
		addUserName,
		userNameValue,
		userNameInputChange,
		deleteName,
	};
};

export default useUserName;
