import { useEffect, useState } from 'react'
import { ILanguages, lang } from '../languages/lang'

export const useLanguage = () => {
	const [select, setSelect] = useState<keyof ILanguages>('ru')
	const [language, setLanguage] = useState(lang[select])

	useEffect(() => {
		setLanguage(lang[select])
	}, [select])
	return { select, setSelect, language }
}
