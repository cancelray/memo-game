import type { Winner } from '../types/Winner.type';

const STORAGE_KEY = 'players';

const read = (): Winner[] => {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	} catch (error) {
		console.log(error);
		return [];
	}
};

const write = (winners: Winner[]) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(winners));
};

const delay = (ms = 150) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const localAPI = {
	getPlayers: async () => {
		await delay();

		return read();
	},

	addTime: async (newWinner: Winner) => {
		await delay();

		write([...read(), newWinner]);
		return newWinner;
	},
};

export default localAPI;
