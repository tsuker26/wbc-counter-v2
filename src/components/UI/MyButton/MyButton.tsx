import { FC, PropsWithChildren } from 'react'
import styles from './MyButton.module.scss'

interface buttonProps {
	fn: () => void
}

const MyButton: FC<PropsWithChildren<buttonProps>> = ({ fn, children }) => (
	<button className={styles.myButton} onClick={fn}>
		{children}
	</button>
)

export default MyButton
