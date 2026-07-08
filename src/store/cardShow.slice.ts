import { createSlice } from '@reduxjs/toolkit';
import type { StoreState } from '../store';

type cardsShowState = {
	cardShow: boolean[];
};

const initialState: cardsShowState = {
	cardShow: [
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	],
};

const cardShowSlice = createSlice({
	name: 'cardShow',
	initialState,
	reducers: {
		openCard(state, action: { payload: number }) {
			state.cardShow[action.payload] = true;
		},
		cardsAreEqual(state, action: { payload: { firstCardId: number } }) {
			state.cardShow[action.payload.firstCardId] = true;
		},
		cardsNotEqual(
			state,
			action: { payload: { firstCardId: number; secondCardId: number } },
		) {
			state.cardShow[action.payload.firstCardId] = false;
			state.cardShow[action.payload.secondCardId] = false;
		},
		closeAllCards(state) {
			state.cardShow = initialState.cardShow;
		},
	},
});

export default cardShowSlice.reducer;

export const selectCardShow = (state: StoreState) => state.cardShow.cardShow;

export const { openCard, cardsAreEqual, cardsNotEqual, closeAllCards } =
	cardShowSlice.actions;
