import { FC } from 'react'
import styles from './Table.module.scss'
import { ICell } from '../../data/data'
import { useAppSelector } from '../../hook/useApp'

interface RowProps {
	cell: ICell
}

const Row: FC<RowProps> = ({ cell }) => {
	const { language } = useAppSelector(state => state.lang)
	return (
		<>
			<div className={`${styles.table_row} ${styles.body}`}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language[cell.name]}
				</div>
				<div className={styles.table_cell}>{cell.count}</div>
				<div className={styles.table_cell}>{cell.relative}</div>
				<div className={styles.table_cell}>{cell.absolute}</div>
				<div className={styles.delete}>x</div>
			</div>
		</>
	)
}

export default Row
