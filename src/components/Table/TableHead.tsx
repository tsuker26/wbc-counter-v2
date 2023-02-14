import { FC } from 'react'
import styles from './Table.module.scss'
import { useAppSelector } from '../../hook/useApp'

const TableHead: FC = () => {
	const { language } = useAppSelector(state => state.lang)
	return (
		<div className={`${styles.row} ${styles.head}`}>
			<div className={`${styles.column} ${styles.head}`}>{language.cell}</div>
			<div className={`${styles.column} ${styles.head}`}>{language.count}</div>
			<div className={`${styles.column} ${styles.head}`}>
				{language.relative}
			</div>
			<div className={`${styles.column} ${styles.head}`}>
				{language.absolute}
			</div>
		</div>
	)
}

export default TableHead
