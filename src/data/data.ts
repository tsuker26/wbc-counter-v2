import { ILanguage } from '../languages/lang'

export interface ICell {
	id: number
	name: keyof ILanguage
	count: number
	relative: number
	absolute: number
}

export interface ITypesOfCells {
	['cellsBlood']: ICell[]
	['cellsExtended']: ICell[]
	['cellsDogs']: ICell[]
}

export const typesOfCells: ITypesOfCells = {
	['cellsBlood']: [
		{ id: 0, name: 'netrophil', count: 0, relative: 0, absolute: 0 },
		{ id: 1, name: 'monocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 2, name: 'lymphocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 3, name: 'eosinophil', count: 0, relative: 0, absolute: 0 },
		{ id: 4, name: 'basophil', count: 0, relative: 0, absolute: 0 },
	],
	['cellsExtended']: [
		{ id: 0, name: 'myelocytes', count: 0, relative: 0, absolute: 0 },
		{ id: 1, name: 'metamyelocytes', count: 0, relative: 0, absolute: 0 },
		{ id: 2, name: 'bandnuclear', count: 0, relative: 0, absolute: 0 },
		{ id: 3, name: 'segmentednuclear', count: 0, relative: 0, absolute: 0 },
		{ id: 4, name: 'basophil', count: 0, relative: 0, absolute: 0 },
		{ id: 5, name: 'monocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 6, name: 'lymphocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 7, name: 'eosinophil', count: 0, relative: 0, absolute: 0 },
		{ id: 8, name: 'basophil', count: 0, relative: 0, absolute: 0 },
	],
	['cellsDogs']: [
		{ id: 0, name: 'netrophil', count: 0, relative: 0, absolute: 0 },
		{ id: 1, name: 'monocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 2, name: 'lymphocyte', count: 0, relative: 0, absolute: 0 },
		{ id: 3, name: 'eosinophil', count: 0, relative: 0, absolute: 0 },
		{ id: 4, name: 'basophil', count: 0, relative: 0, absolute: 0 },
	],
}
