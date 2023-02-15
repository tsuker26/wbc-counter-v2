import { ChangeEvent, FC } from 'react'
import styles from './Setting.module.scss'
import MyInput from '../UI/MyInput/MyInput'
import { useAppDispatch, useAppSelector } from '../../hook/useApp'
import { setDefault, setMaxCount, setWbc } from '../../store/slice/cellsSlice'
import MyButton from '../UI/MyButton/MyButton'

const Setting: FC = () => {
	const { wbc, maxCount } = useAppSelector(state => state.cells)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.setting_block}>
			<MyInput
				type={'number'}
				value={wbc}
				label={'WBC 10⁹/L'}
				placeholder={'10⁹/L'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					dispatch(setWbc(+e.target.value))
				}
			/>
			<MyInput
				type={'number'}
				value={maxCount}
				label={'Max Count'}
				placeholder={'Max count'}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					dispatch(setMaxCount(+e.target.value))
				}
			/>
			<div className={styles.buttons}>
				<MyButton fn={() => dispatch(setDefault())}>Default</MyButton>
			</div>
			{/*<MyInput*/}
			{/*	type={'text'}*/}
			{/*	value={newCell}*/}
			{/*	label={'New Cell'}*/}
			{/*	placeholder={'Add new cell'}*/}
			{/*	onChange={(e: ChangeEvent<HTMLInputElement>) =>*/}
			{/*		setNewCell(e.target.value)*/}
			{/*	}*/}
			{/*/>*/}
			{/*<MyButton fn={() => dispatch(setAddNewCell(newCell))}>Add</MyButton>*/}
		</div>
	)
}

export default Setting
