import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface totalState {
	total: number
	maxCount: number
}

const initialState: totalState = {
	total: 0,
	maxCount: 100,
}

const totalSlice = createSlice({
	name: 'total',
	initialState,
	reducers: {
		setTotal(state, action: PayloadAction<number>) {
			state.total += action.payload
		},
	},
})

export const { setTotal } = totalSlice.actions
export default totalSlice.reducer
