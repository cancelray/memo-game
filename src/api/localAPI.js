const STORAGE_KEY = 'players';

const read = () => {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	} catch (error) {
		console.log(error);
		return [];
	}
};

const write = (newWinner) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(newWinner));
};

const delay = (ms = 150) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const localAPI = {
	getPlayers: async () => {
		await delay();

		return read();
	},

	addTime: async (newWinner) => {
		await delay();

		write([...read(), newWinner]);
		return newWinner;
	},
};

export default localAPI;
