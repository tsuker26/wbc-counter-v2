import { FC } from 'react'
import styles from './Table.module.scss'
import { useAppSelector } from '../../hook/useApp'

const Table: FC = () => {
	const { language } = useAppSelector(state => state.lang)

	return (
		<div className={styles.table_block}>
			<div className={styles.column}>
				<div className={styles.row}>{language.cell}</div>
				<div className={styles.row}>{language.netrophil}</div>
				<div className={styles.row}>{language.monocyte}</div>
				<div className={styles.row}>{language.lymphocyte}</div>
				<div className={styles.row}>{language.eosinophil}</div>
				<div className={styles.row}>{language.basophil}</div>
			</div>
			<div className={styles.column}>
				<div className={styles.row}>{language.count}</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
			</div>
			<div className={styles.column}>
				<div className={styles.row}>{language.relative}</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
			</div>
			<div className={styles.column}>
				<div className={styles.row}>{language.absolute}</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
				<div className={styles.row}>0</div>
			</div>
		</div>
	)
}

export default Table
