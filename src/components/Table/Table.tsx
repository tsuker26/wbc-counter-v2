import { FC } from 'react'
import styles from './Table.module.scss'
import { useAppSelector } from '../../hook/useApp'

const Table: FC = () => {
	const { language } = useAppSelector(state => state.lang)

	return (
		<div className={styles.table_block}>
			<div className={`${styles.table_row} ${styles.head}`}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.cell}
				</div>
				<div className={styles.table_cell}>{language.count}</div>
				<div className={styles.table_cell}>{language.relative}</div>
				<div className={styles.table_cell}>{language.absolute}</div>
			</div>
			<div className={styles.table_row}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.netrophil}
				</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
			</div>
			<div className={styles.table_row}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.monocyte}
				</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
			</div>
			<div className={styles.table_row}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.lymphocyte}
				</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
			</div>
			<div className={styles.table_row}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.eosinophil}
				</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
			</div>
			<div className={styles.table_row}>
				<div className={`${styles.table_cell} ${styles.cell}`}>
					{language.basophil}
				</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
				<div className={styles.table_cell}>0</div>
			</div>
		</div>
	)
}

export default Table
