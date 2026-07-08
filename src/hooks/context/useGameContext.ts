import { useContext } from 'react';

import { GameContext } from '../../context/context';

const useGameContext = () => {
	const context = useContext(GameContext);

	if (!context) {
		throw new Error('Context Error');
	}

	return context;
};

export default useGameContext;
