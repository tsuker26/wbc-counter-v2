import { configureStore } from '@reduxjs/toolkit'
import lang from './slice/languageSlice'
import cells from './slice/cellsSlice'

const store = configureStore({
	reducer: {
		lang,
		cells,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
