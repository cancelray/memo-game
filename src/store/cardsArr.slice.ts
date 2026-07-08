import { createSlice } from '@reduxjs/toolkit';

import type { StoreState } from '../store';
import type { CardType } from '../types/Card.type';

const cardsArrSlice = createSlice({
	name: 'cardsArr',
	initialState: {
		cardsArr: [] as CardType[],
	},
	reducers: {
		setCardsArr(state, action: { payload: CardType[] }) {
			state.cardsArr = action.payload;
		},
	},
});

export default cardsArrSlice.reducer;

export const selectCardsArr = (state: StoreState) => state.cardsArr.cardsArr;

export const { setCardsArr } = cardsArrSlice.actions;
