import { ChangeEvent, FC } from 'react'
import styles from './ToggleTheme.module.scss'
import { Theme, useTheme } from '../../../hook/useTheme'

const ToggleTheme: FC = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div className={styles.myToggle}>
			<div className={`${styles.input_block} ${styles.light} `}>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTheme(e.target.value as Theme)
					}
					className={`${styles.input} ${styles.light} `}
					type='radio'
					name={'theme'}
					value={Theme.light}
					checked={theme === Theme.light}
				/>
			</div>
			<div className={`${styles.input_block} ${styles.dark} `}>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTheme(e.target.value as Theme)
					}
					className={`${styles.input} ${styles.dark} `}
					type='radio'
					name={'theme'}
					value={Theme.dark}
					checked={theme === Theme.dark}
				/>
			</div>
		</div>
	)
}

export default ToggleTheme
