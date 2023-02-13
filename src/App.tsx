import { useLanguage } from './hook/useLanguage'
import Header from './components/Header/Header'

function App() {
	const { language, select, setSelect } = useLanguage()

	return (
		<div className='App'>
			<Header language={language} select={select} setSelect={setSelect} />
			<div className={'content'}></div>
		</div>
	)
}

export default App
