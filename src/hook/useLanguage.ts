import { useEffect, useState } from 'react'
import { ILanguages, lang } from '../languages/lang'
import { setLanguage } from '../store/languageSlice/languageSlice'
import { useAppDispatch } from './useApp'

export const useLanguage = () => {
	const dispatch = useAppDispatch()
	const [select, setSelect] = useState<keyof ILanguages>(
		(localStorage.getItem('lang') &&
			(localStorage.getItem('lang') as keyof ILanguages)) ||
			'RU'
	)
	useEffect(() => {
		dispatch(setLanguage(lang[select]))
		localStorage.setItem('lang', select)
	}, [select])
	return { select, setSelect }
}
