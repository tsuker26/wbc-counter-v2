import { FC } from 'react'
import styles from './Table.module.scss'

interface RowProps {
	cell: string
}

const Row: FC<RowProps> = ({ cell }) => {
	return (
		<>
			<div className={`${styles.table_row} ${styles.body}`}>
				<div className={`${styles.table_cell} ${styles.cell}`}>{cell}</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.delete}>x</div>
			</div>
		</>
	)
}

export default Row
