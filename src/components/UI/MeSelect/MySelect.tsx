import { ChangeEvent, FC } from 'react'
import styles from './MySelect.module.scss'
import { ILanguages } from '../../../languages/lang'

interface mySelectProps {
	defaultValue: keyof ILanguages
	setSelect: (value: keyof ILanguages) => void
	options: string[]
}

const MySelect: FC<mySelectProps> = ({ defaultValue, setSelect, options }) => {
	return (
		<select
			onChange={(e: ChangeEvent<HTMLSelectElement>) =>
				setSelect(e.target.value as keyof ILanguages)
			}
			defaultValue={defaultValue}
			className={styles.mySelect}
		>
			{options.map(item => (
				<option key={item}>{item}</option>
			))}
		</select>
	)
}

export default MySelect
