import { FC } from 'react'
import styles from './MyToggle.module.scss'
import { useAppSelector } from '../../../hook/useApp'
import { ILanguage } from '../../../languages/lang'

export type myToggle = {
	id: string
	name?: string
}

interface myToggleProps {
	fn: (select: any) => void
	toggleActive: string
	toggles: myToggle[]
}

const MyToggle: FC<myToggleProps> = ({ fn, toggleActive, toggles }) => {
	const { language } = useAppSelector(state => state.lang)

	return (
		<div className={styles.myToggle}>
			{toggles.map(toggle => (
				<div
					key={toggle.id}
					onClick={() => fn(toggle.id)}
					className={`${styles.myToggleEl} ${
						toggle.id === toggleActive ? styles.active : ''
					}`}
				>
					{toggle.name ? toggle.name : language[toggle.id as keyof ILanguage]}
				</div>
			))}
		</div>
	)
}

export default MyToggle
