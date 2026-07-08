import { createSlice } from '@reduxjs/toolkit';

import type { StoreState } from '../store';

import type { CardType } from '../types/Card.type';
import type { OpenCards } from '../types/OpenCards.type';

type openCardsState = {
	openCards: OpenCards;
};

const initialState: openCardsState = {
	openCards: {
		firstCard: null,
		firstCardId: null,
		secondCard: null,
		secondCardId: null,
	},
};

const openCardsSlice = createSlice({
	name: 'openCards',
	initialState,
	reducers: {
		clearTwoOpenCards(state) {
			state.openCards = initialState.openCards;
		},
		openFirstCard(
			state,
			action: { payload: { cardsArr: CardType[]; targetId: number } },
		) {
			const targetId = action.payload.targetId;

			state.openCards.firstCard = action.payload.cardsArr[targetId].value;
			state.openCards.firstCardId = targetId;
		},
		openSecondCard(
			state,
			action: { payload: { cardsArr: CardType[]; targetId: number } },
		) {
			const targetId = action.payload.targetId;

			state.openCards.secondCard = action.payload.cardsArr[targetId].value;
			state.openCards.secondCardId = targetId;
		},
	},
});

export default openCardsSlice.reducer;

export const selectOpenCards = (state: StoreState) => state.openCards.openCards;

export const { clearTwoOpenCards, openFirstCard, openSecondCard } =
	openCardsSlice.actions;
