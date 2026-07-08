import { createSlice } from '@reduxjs/toolkit';

import type { StoreState } from '../store';

const gameVariantSlice = createSlice({
	name: 'gameVariant',
	initialState: {
		gameVariant: 'browser',
	},
	reducers: {
		setGameVariant(state, action: { payload: string }) {
			state.gameVariant = action.payload;
		},
	},
});

export default gameVariantSlice.reducer;

export const selectGameVariant = (state: StoreState) =>
	state.gameVariant.gameVariant;

export const { setGameVariant } = gameVariantSlice.actions;
