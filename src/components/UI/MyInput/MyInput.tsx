import { ChangeEvent, FC } from 'react'
import styles from './MyInput.module.scss'

interface inputProps {
	type: string
	value: string | number
	label: string
	placeholder?: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput: FC<inputProps> = ({
	type,
	value,
	label,
	placeholder,
	onChange,
}) => {
	return (
		<div className={styles.myInput_block}>
			<label htmlFor={String(value)}>{label}</label>
			<input
				className={styles.myInput}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default MyInput
