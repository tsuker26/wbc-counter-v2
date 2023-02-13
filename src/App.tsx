import Header from './components/Header/Header'
import { useAppSelector } from './hook/useApp'

function App() {
	const { language } = useAppSelector(state => state.lang)

	return (
		<div className='App'>
			<Header />
			<main className={'content'}>
				{language.dark}
				{language.light}
			</main>
		</div>
	)
}

export default App
