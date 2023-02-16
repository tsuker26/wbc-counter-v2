import { useEffect, useState } from 'react'
import { ILanguages, lang } from '../languages/lang'
import { useAppDispatch } from './useApp'
import { setLanguage } from '../store/slice/languageSlice'

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
		document.documentElement.setAttribute('lang', select.toLowerCase())
	}, [select])
	return { select, setSelect }
}
