import { createSlice } from '@reduxjs/toolkit';

import type { StoreState } from '../store';
import type { Winner } from '../types/Winner.type';

const bestTimeArrSlice = createSlice({
	name: 'bestTimeArr',
	initialState: { bestTimeArr: [] as Winner[] },
	reducers: {
		setBestTimeArr(state, action: { payload: Winner[] }) {
			state.bestTimeArr = action.payload;
		},
		addNewTopFiveWinner(
			state,
			action: {
				payload: {
					newWinner: Winner;
					time: number;
				};
			},
		) {
			if (state.bestTimeArr.length < 5) {
				state.bestTimeArr.push(action.payload.newWinner);
				state.bestTimeArr.sort((a, b) => a.time - b.time);
			} else {
				const index = state.bestTimeArr.findIndex(
					(el) => el.time > action.payload.time,
				);
				if (index === -1) {
					return;
				} else {
					state.bestTimeArr = [...state.bestTimeArr, action.payload.newWinner];
					state.bestTimeArr = state.bestTimeArr
						.sort((a, b) => a.time - b.time)
						.slice(0, -1);
				}
			}
		},
	},
});

export default bestTimeArrSlice.reducer;

export const selectBestTimeArr = (state: StoreState) =>
	state.bestTimeArr.bestTimeArr;

export const { setBestTimeArr, addNewTopFiveWinner } = bestTimeArrSlice.actions;
