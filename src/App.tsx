import Header from './components/Header/Header'
import Table from './components/Table/Table'
import { useAppDispatch } from './hook/useApp'
import { typesOfCells } from './data/data'
import { useEffect } from 'react'
import { setCells } from './store/slice/cellsSlice'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setCells(typesOfCells.cellsBlood))
	}, [])

	return (
		<div className='App'>
			<Header />
			<main className={'content'}>
				<Table />
			</main>
		</div>
	)
}

export default App
