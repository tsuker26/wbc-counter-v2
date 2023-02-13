import { FC } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { useAppSelector } from '../../hook/useApp'
import ToggleTheme from '../UI/ToggleTheme/ToggleTheme'
import MySelect from '../UI/MeSelect/MySelect'
import { useLanguage } from '../../hook/useLanguage'
import { lang } from '../../languages/lang'

const Header: FC = () => {
	const { language } = useAppSelector(state => state.lang)
	const { select, setSelect } = useLanguage()
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
					<div className={styles.selector_language}>
						<MySelect
							defaultValue={select}
							options={Object.keys(lang)}
							setSelect={setSelect}
						/>
					</div>
					<div className={styles.toggle}>
						<h2>{language.darkTheme}</h2>
						<ToggleTheme />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
