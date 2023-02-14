import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICell } from '../../data/data'

interface cellsState {
	cells: ICell[]
}

const initialState: cellsState = {
	cells: [],
}

const cellsSlice = createSlice({
	name: 'cells',
	initialState,
	reducers: {
		setCells(state, action: PayloadAction<ICell[]>) {
			state.cells = action.payload
		},
	},
})

export const { setCells } = cellsSlice.actions
export default cellsSlice.reducer
