import Header from './components/Header/Header'
import Table from './components/Table/Table'
import { useAppDispatch } from './hook/useApp'
import { useEffect } from 'react'
import { setCells, setDefault } from './store/slice/cellsSlice'
import { typesOfCells } from './data/data'

function App() {
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
		<div className='App'>
			<Header />
			<button onClick={() => dispatch(setDefault())}>default</button>
			<main className={'content'}>
				<Table />
			</main>
		</div>
	)
}

export default App
