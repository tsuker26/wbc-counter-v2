import { useLanguage } from './hook/useLanguage'
import Header from './components/Header/Header'
import { useAppSelector } from './hook/useApp'

function App() {
	const { select, setSelect } = useLanguage()
	const { language } = useAppSelector(state => state.lang)

	return (
		<div className='App'>
			<Header select={select} setSelect={setSelect} />
			<div className={'content'}>
				{language.dark}
				{language.light}
				{language.theme}
			</div>
		</div>
	)
}

export default App
