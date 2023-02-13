import { useTheme } from './hook/useTheme'
import { lang } from './languages/lang'
import { ChangeEvent } from 'react'
import { useLanguage } from './hook/useLanguage'

function App() {
	const { setTheme } = useTheme()
	const { select, setSelect, language } = useLanguage()
	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === 'ru' || e.target.value === 'en') {
			setSelect(e.target.value)
		}
	}
	return (
		<div className='App'>
			<div className={'content'}>
				<select defaultValue={select} onChange={changeHandler}>
					{Object.keys(lang).map(l => (
						<option key={l}>{l}</option>
					))}
				</select>
				<h1>{language.theme}</h1>
				<div style={{ display: 'flex' }}>
					<div
						onClick={() => setTheme('light')}
						style={{ padding: '5px', cursor: 'pointer', border: '1px solid  ' }}
					>
						{language.light}
					</div>
					<div
						onClick={() => setTheme('dark')}
						style={{ padding: '5px', cursor: 'pointer', border: '1px solid ' }}
					>
						{language.dark}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
