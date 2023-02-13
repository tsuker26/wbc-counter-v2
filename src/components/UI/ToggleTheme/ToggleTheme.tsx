import { FC } from 'react'
import styles from './ToggleTheme.module.scss'
import { useTheme } from '../../../hook/useTheme'

const ToggleTheme: FC = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div className={styles.myToggle}>
			<div className={`${styles.input_block} ${styles.light} `}>
				<input
					onClick={() => setTheme('light')}
					className={`${styles.input} ${styles.light} `}
					type='radio'
					name={'theme'}
					checked={theme === 'light'}
				/>
			</div>
			<div className={`${styles.input_block} ${styles.dark} `}>
				<input
					onClick={() => setTheme('dark')}
					className={`${styles.input} ${styles.dark} `}
					type='radio'
					name={'theme'}
					checked={theme === 'dark'}
				/>
			</div>
		</div>
	)
}

export default ToggleTheme
