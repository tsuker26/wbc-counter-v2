import { useTheme } from './hook/useTheme'
import { ILanguages, lang } from './languages/lang'
import { ChangeEvent } from 'react'
import { useLanguage } from './hook/useLanguage'

function App() {
	const { setTheme } = useTheme()
	const { select, setSelect, language } = useLanguage()

	return (
		<div className='App'>
			<div className={'content'}>
				<select
					defaultValue={select}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						setSelect(e.target.value as keyof ILanguages)
					}
				>
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
