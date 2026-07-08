import { createSlice } from '@reduxjs/toolkit';

import type { StoreState } from '../store';

const timeSlice = createSlice({
	name: 'time',
	initialState: {
		time: 0,
	},
	reducers: {
		setTimeToZero(state) {
			state.time = 0;
		},
		setTime(state, action: { payload: number }) {
			state.time += action.payload;
		},
	},
});

export default timeSlice.reducer;

export const selectTime = (state: StoreState) => state.time.time;

export const { setTimeToZero, setTime } = timeSlice.actions;
