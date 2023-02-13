export interface ILanguage {
	theme: string
	light: string
	dark: string
}

export interface ILanguages {
	ru: ILanguage
	en: ILanguage
}

export const ru: ILanguage = {
	theme: 'Тема',
	light: 'Светлая',
	dark: 'Темная',
}
export const en: ILanguage = {
	theme: 'Theme',
	light: 'Light',
	dark: 'Dark',
}

export const lang: ILanguages = { ru, en }
