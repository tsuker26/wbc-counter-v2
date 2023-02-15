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
	maxCount: string
	reset: string
	myelocytes: string
	metamyelocytes: string
	bandnuclear: string
	segmentednuclear: string
	cellsBlood: string
	cellsExtended: string
	cellsDogs: string
}

export interface ILanguages {
	RU: ILanguage
	EN: ILanguage
}

export const RU: ILanguage = {
	darkTheme: 'Темная тема',
	cell: 'Клетка',
	count: 'Количетсво',
	relative: 'Отн',
	absolute: 'Абсолют',
	netrophil: 'Нетрофил',
	monocyte: 'Моноцит',
	lymphocyte: 'Лимфоцит',
	eosinophil: 'Эозинофил',
	basophil: 'Базофил',
	maxCount: 'Макс. значение ',
	reset: 'Сбросить',
	myelocytes: 'Миелоциты',
	metamyelocytes: 'Мета\nмиелоциты',
	bandnuclear: 'Бандаядерныe',
	segmentednuclear: 'Сегменто\nядерныe',
	cellsBlood: 'Клетки',
	cellsExtended: 'Клетки расширенные',
	cellsDogs: 'Клетки Собак',
}
export const EN: ILanguage = {
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
	maxCount: 'Max Value',
	reset: 'Reset',
	myelocytes: 'Myelocytes',
	metamyelocytes: 'Meta\nmyelocytes',
	bandnuclear: 'Bandnuclear',
	segmentednuclear: 'Segmented\nnuclear',
	cellsBlood: 'Cells Blood',
	cellsExtended: 'Cells Extended',
	cellsDogs: 'Cells Dogs',
}

export const lang: ILanguages = { RU, EN }
