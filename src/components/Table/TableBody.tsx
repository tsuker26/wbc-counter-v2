import { FC } from 'react'
import Row from './Row'
import { useAppSelector } from '../../hook/useApp'

const TableBody: FC = () => {
	const { cells } = useAppSelector(state => state.cells)
	return (
		<>
			{cells.map(cell => (
				<Row key={cell.id} cell={cell} />
			))}
		</>
	)
}

export default TableBody
