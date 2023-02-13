import { useLayoutEffect, useState } from 'react'

export enum Theme {
	light = 'light',
	dark = 'dark',
}

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem('theme') as Theme) || Theme.light
	)
	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])
	return { theme, setTheme }
}
