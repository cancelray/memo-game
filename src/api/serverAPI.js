const URL = 'http://localhost:3001/players';
const headers = {
	'Content-Type': 'application/json',
};

const serverAPI = {
	getPlayers: () => {
		return fetch(URL).then((response) => response.json());
	},

	addTime: (newWinner) => {
		return fetch(URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(newWinner),
		});
	},
};

export default serverAPI;
