import { FC } from 'react'
import styles from './Table.module.scss'
import { useAppSelector } from '../../hook/useApp'

const TableHead: FC = () => {
	const { language } = useAppSelector(state => state.lang)
	return (
		<div className={`${styles.table_row} ${styles.head}`}>
			<div className={`${styles.table_cell} ${styles.cell}`}>
				{language.cell}
			</div>
			<div className={styles.table_cell}>{language.count}</div>
			<div className={styles.table_cell}>{language.relative}</div>
			<div className={styles.table_cell}>{language.absolute}</div>
		</div>
	)
}

export default TableHead
