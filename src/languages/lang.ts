export interface ILanguage {
	darkTheme: string
	cell: string
	count: string
	relative: string
	absolute: string
	netrophil: string
	monocyte: string
	lymphocyte: string
	eosinophil: string
	basophil: string
}

export interface ILanguages {
	ru: ILanguage
	en: ILanguage
}

export const ru: ILanguage = {
	darkTheme: 'Темная тема',
	cell: 'Клетка',
	count: 'Количетсво',
	relative: 'Относительное',
	absolute: 'Абсолютное',
	netrophil: 'Нетрофил',
	monocyte: 'Моноцит',
	lymphocyte: 'Лимфоцит',
	eosinophil: 'Эозинофил',
	basophil: 'Базофил',
}
export const en: ILanguage = {
	darkTheme: 'Dark theme',
	cell: 'Cell',
	count: 'Count',
	relative: 'Relative',
	absolute: 'Absolute',
	netrophil: 'Netrophil',
	monocyte: 'Monocyte',
	lymphocyte: 'Lymphocyte',
	eosinophil: 'Eosinophil',
	basophil: 'Basophil',
}

export const lang: ILanguages = { ru, en }
