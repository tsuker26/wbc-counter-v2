import { FC, useEffect } from 'react'
import Table from './Table/Table'
import { useAppDispatch } from '../hook/useApp'
import { setCells, setDefault } from '../store/slice/cellsSlice'
import { typesOfCells } from '../data/data'

const Main: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem('cells')) {
			//@ts-ignore
			dispatch(setCells(JSON.parse(localStorage.getItem('cells'))))
		} else {
			dispatch(setCells(typesOfCells.cellsBlood))
			console.log(
				typeof localStorage.getItem('cells'),
				localStorage.getItem('cells')
			)
			localStorage.setItem('cells', JSON.stringify(typesOfCells.cellsBlood))
			console.log('dispatch cells')
		}
	}, [])

	return (
		<main className={'content'}>
			<button onClick={() => dispatch(setDefault())}>default</button>
			<Table />
		</main>
	)
}

export default Main
