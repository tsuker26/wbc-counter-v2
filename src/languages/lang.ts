export interface ILanguage {
	darkTheme: string
	light: string
	dark: string
}

export interface ILanguages {
	ru: ILanguage
	en: ILanguage
}

export const ru: ILanguage = {
	darkTheme: 'Темная тема',
	light: 'Светлая',
	dark: 'Темная',
}
export const en: ILanguage = {
	darkTheme: 'Dark theme',
	light: 'Light',
	dark: 'Dark',
}

export const lang: ILanguages = { ru, en }
