import { configureStore } from '@reduxjs/toolkit'
import lang from './languageSlice/languageSlice'

const store = configureStore({
	reducer: {
		lang,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
