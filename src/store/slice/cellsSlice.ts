import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICell, typesOfCells } from '../../data/data'

interface cellsState {
	cells: ICell[]
	total: number
	maxCount: number
	wbc: number
}

const initialState: cellsState = {
	cells: [],
	total: localStorage.getItem('total')
		? Number(localStorage.getItem('total'))
		: 0,
	maxCount: 100,
	wbc: 0,
}

const cellsSlice = createSlice({
	name: 'cells',
	initialState,
	reducers: {
		setCells(state, action: PayloadAction<ICell[]>) {
			state.cells = action.payload
		},
		setCount(state, action: PayloadAction<number>) {
			state.total += 1
			state.cells.forEach(cell => {
				if (cell.id === action.payload) {
					cell.count += 1
				}

				cell.relative = (cell.count * 100) / state.total
				cell.absolute = (cell.relative * state.wbc) / 100
			})
			localStorage.setItem('cells', JSON.stringify(state.cells))
			localStorage.setItem('total', String(state.total))
		},
		setDefault(state) {
			state.cells = typesOfCells.cellsBlood
			state.total = 0
			localStorage.setItem('cells', JSON.stringify(state.cells))
			localStorage.setItem('total', String(state.total))
		},
	},
})

export const {setCells, setCount, setDefault} = cellsSlice.actions
export default cellsSlice.reducer
