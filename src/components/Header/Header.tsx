import { ChangeEvent, FC } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { useTheme } from '../../hook/useTheme'
import { ILanguage, ILanguages, lang } from '../../languages/lang'

interface HeaderProps {
	language: ILanguage
	select: keyof ILanguages
	setSelect: (select: keyof ILanguages) => void
}

const Header: FC<HeaderProps> = ({ language, select, setSelect }) => {
	// const { language, select, setSelect } = useLanguage()
	const { setTheme } = useTheme()

	return (
		<header className={styles.header}>
			<div className={styles.header_content}>
				<div className={styles.header_logo}>
					<div className={styles.logo}>
						<img src={logo} alt='' />
					</div>
					<h1 className={styles.name}>WBC Counter</h1>
				</div>
				<div className={styles.header_setting}>
					<div style={{ display: 'flex' }}>
						<div
							onClick={() => setTheme('light')}
							style={{
								padding: '5px',
								cursor: 'pointer',
								border: '1px solid  ',
							}}
						>
							{language.light}
						</div>
						<div
							onClick={() => setTheme('dark')}
							style={{
								padding: '5px',
								cursor: 'pointer',
								border: '1px solid ',
							}}
						>
							{language.dark}
						</div>
					</div>
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
				</div>
			</div>
		</header>
	)
}

export default Header
