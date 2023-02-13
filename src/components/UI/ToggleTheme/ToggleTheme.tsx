import { FC } from 'react'
import styles from './ToggleTheme.module.scss'
import { useTheme } from '../../../hook/useTheme'

const ToggleTheme: FC = () => {
	const { setTheme } = useTheme()
	return (
		<div className={styles.myToggle}>
			<div className={`${styles.input_block} ${styles.light} `}>
				<input
					className={`${styles.input} ${styles.light} `}
					type='radio'
					name={'theme'}
				/>
			</div>
			<div className={`${styles.input_block} ${styles.dark} `}>
				<input
					className={`${styles.input} ${styles.dark} `}
					type='radio'
					name={'theme'}
				/>
			</div>
		</div>
	)
}

export default ToggleTheme
