import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILanguage, RU } from '../../languages/lang'

interface languageState {
	language: ILanguage
}

const initialState: languageState = {
	language: RU,
}

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<ILanguage>) {
			state.language = action.payload
		},
	},
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
