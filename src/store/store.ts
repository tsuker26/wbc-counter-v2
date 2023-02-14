import { configureStore } from '@reduxjs/toolkit'
import lang from './slice/languageSlice'
import cells from './slice/cellsSlice'
import total from './slice/totalSlice'

const store = configureStore({
	reducer: {
		lang,
		cells,
		total,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
