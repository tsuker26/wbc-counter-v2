import { FC } from 'react'
import styles from './Table.module.scss'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { useAppSelector } from '../../hook/useApp'

const Table: FC = () => {
	const { total, maxCount } = useAppSelector(state => state.total)

	return (
		<div className={styles.table_block}>
			<TableHead />
			<TableBody />
			<div className={`${styles.table_row} ${styles.max}`}>
				{total}/{maxCount}
			</div>
		</div>
	)
}

export default Table
