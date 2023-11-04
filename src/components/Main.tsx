import { FC, useEffect } from 'react'
import Table from './Table/Table'
import { useAppDispatch, useAppSelector } from '../hook/useApp'
import { setCells } from '../store/slice/cellsSlice'
import { typesOfCells } from '../data/data'
import Setting from './Setting/Setting'

const Main: FC = () => {
	const dispatch = useAppDispatch()
	const { cellsMode } = useAppSelector(state => state.cells)
	useEffect(() => {
		if (localStorage.getItem('cells')) {
			dispatch(setCells(JSON.parse(localStorage.getItem('cells') as string)))
		} else {
			dispatch(setCells(typesOfCells[cellsMode]))

			localStorage.setItem('cells', JSON.stringify(typesOfCells[cellsMode]))
			console.log('dispatch cells')
		}
	}, [])

	return (
		<main className={'content'}>
			<Setting />
			<Table />
		</main>
	)
}

export default Main
