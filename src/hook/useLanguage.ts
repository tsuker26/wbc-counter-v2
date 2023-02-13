import { useEffect, useState } from 'react'
import { ILanguages, lang } from '../languages/lang'

export const useLanguage = () => {
	const [select, setSelect] = useState<keyof ILanguages>(
		(localStorage.getItem('lang') &&
			(localStorage.getItem('lang') as keyof ILanguages)) ||
			'ru'
	)
	const [language, setLanguage] = useState(lang[select])

	useEffect(() => {
		setLanguage(lang[select])
		localStorage.setItem('lang', select)
	}, [select])
	return { select, setSelect, language }
}
