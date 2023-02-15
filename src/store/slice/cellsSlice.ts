import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICell, typesOfCells } from '../../data/data'

interface cellsState {
	cells: ICell[]
	total: number
	maxCount: number
	wbc: number
	mode: string
}

type setCountPayloadType = { id: number; amount: number; count: number }
const initialState: cellsState = {
	cells: [],
	total: localStorage.getItem('total')
		? Number(localStorage.getItem('total'))
		: 0,
	maxCount: localStorage.getItem('maxCount')
		? Number(localStorage.getItem('maxCount'))
		: 100,
	wbc: localStorage.getItem('wbc') ? Number(localStorage.getItem('wbc')) : +'',
	mode: '1',
}

const cellsSlice = createSlice({
	name: 'cells',
	initialState,
	reducers: {
		setCells(state, action: PayloadAction<ICell[]>) {
			state.cells = action.payload
		},
		setCount(state, { payload }: PayloadAction<setCountPayloadType>) {
			if (payload.count === 0 && payload.amount == -1) {
				return
			}
			if (state.total < state.maxCount) {
				state.total += payload.amount
				state.cells.forEach(cell => {
					if (cell.id === payload.id) {
						cell.count += payload.amount
					}
					if (state.total === 0) {
						cell.relative = 0
						cell.absolute = 0
					} else {
						cell.relative = (cell.count * 100) / state.total
						cell.absolute = (cell.relative * state.wbc) / 100
					}
				})
				localStorage.setItem('cells', JSON.stringify(state.cells))
				localStorage.setItem('total', String(state.total))
			} else {
				alert('Max')
			}
		},
		setDefault(state) {
			state.cells = typesOfCells.cellsBlood
			state.total = 0
			state.wbc = 0
			state.maxCount = 100
			state.mode = '1'
			localStorage.setItem('cells', JSON.stringify(state.cells))
			localStorage.setItem('total', String(state.total))
			localStorage.setItem('wbc', String(state.wbc))
		},
		setWbc(state, action: PayloadAction<number>) {
			state.wbc = action.payload
			state.cells.forEach(cell => {
				if (state.total === 0) {
					cell.relative = 0
					cell.absolute = 0
				} else {
					cell.relative = (cell.count * 100) / state.total
					cell.absolute = (cell.relative * state.wbc) / 100
				}
			})
			localStorage.setItem('cells', JSON.stringify(state.cells))
			localStorage.setItem('wbc', String(state.wbc))
		},
		setMaxCount(state, action: PayloadAction<number>) {
			state.maxCount = action.payload
			localStorage.setItem('maxCount', String(state.maxCount))
		},
		setMode(state, action: PayloadAction<string>) {
			state.mode = action.payload
		},
	},
})

export const { setCells, setCount, setDefault, setWbc, setMaxCount, setMode } =
	cellsSlice.actions
export default cellsSlice.reducer
