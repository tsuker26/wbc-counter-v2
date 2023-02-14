import { FC } from 'react'
import styles from './Table.module.scss'
import { useAppSelector } from '../../hook/useApp'
import Row from './Row'

const Table: FC = () => {
	const { language } = useAppSelector(state => state.lang)
	const cells = [
		`${language.netrophil}`,
		`${language.monocyte}`,
		`${language.lymphocyte}`,
		`${language.eosinophil}`,
		`${language.basophil}`,
	]
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
			{cells.map(cell => (
				<Row key={cell} cell={cell} />
			))}
		</div>
	)
}

export default Table
