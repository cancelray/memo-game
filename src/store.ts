import { configureStore } from '@reduxjs/toolkit';

import bestTimeArrReducer from './store/bestTimeArr.slice';
import cardsArrReducer from './store/cardsArr.slice';
import cardsShowReducer from './store/cardShow.slice';
import gameVariantReducer from './store/gameVariant.slice';
import openCardsReducer from './store/openCards.slice';
import timeReducer from './store/time.slice';

const store = configureStore({
	reducer: {
		cardsArr: cardsArrReducer,
		cardShow: cardsShowReducer,
		openCards: openCardsReducer,
		gameVariant: gameVariantReducer,
		time: timeReducer,
		bestTimeArr: bestTimeArrReducer,
	},
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
