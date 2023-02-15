import { FC } from 'react'
import styles from './Table.module.scss'
import { ICell } from '../../data/data'
import { useAppDispatch, useAppSelector } from '../../hook/useApp'
import { setCount } from '../../store/slice/cellsSlice'

interface RowProps {
	cell: ICell
}

const Row: FC<RowProps> = ({ cell }) => {
	const { language } = useAppSelector(state => state.lang)
	const dispatch = useAppDispatch()
	return (
		<>
			<div
				className={`${styles.table_row} ${styles.body}`}
				onClick={() => dispatch(setCount(cell.id))}
			>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language[cell.name]}
				</div>
				<div className={styles.table_cell}>{cell.count}</div>
				<div className={styles.table_cell}>{cell.relative.toFixed(2)}</div>
				<div className={styles.table_cell}>{cell.absolute.toFixed(2)}</div>
				<div className={styles.delete}>x</div>
			</div>
		</>
	)
}

export default Row
