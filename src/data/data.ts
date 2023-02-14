import { ILanguage } from '../languages/lang'

export interface ICell {
	id: number
	name: keyof ILanguage
	count: number
	relative: number
	absolute: number
}

export interface ITypesOfCells {
	cellsBlood: ICell[]
	cellsDogs: ICell[]
}

export const typesOfCells: ITypesOfCells = {
	cellsBlood: [
		{ id: 0, name: 'netrophil', count: 0, relative: 0, absolute: 0 },
		{ id: 1, name: 'monocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 2, name: 'lymphocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 3, name: 'eosinophil', count: 0, relative: 0, absolute: 0 },
		{ id: 4, name: 'basophil', count: 0, relative: 0, absolute: 0 },
	],
	cellsDogs: [
		{ id: 0, name: 'netrophil', count: 0, relative: 0, absolute: 0 },
		{ id: 1, name: 'monocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 2, name: 'lymphocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 3, name: 'eosinophil', count: 0, relative: 0, absolute: 0 },
		{ id: 4, name: 'basophil', count: 0, relative: 0, absolute: 0 },
	],
}
