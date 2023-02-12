import { useTheme } from './hook/useTheme'

function App() {
	const { setTheme } = useTheme()
	return (
		<div className='App'>
			<div className={'content'}>
				<h1>Theme</h1>
				<div style={{ display: 'flex' }}>
					<div
						onClick={() => setTheme('light')}
						style={{ padding: '5px', cursor: 'pointer', border: '1px solid  ' }}
					>
						Light solid
					</div>
					<div
						onClick={() => setTheme('dark')}
						style={{ padding: '5px', cursor: 'pointer', border: '1px solid ' }}
					>
						Dark
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
