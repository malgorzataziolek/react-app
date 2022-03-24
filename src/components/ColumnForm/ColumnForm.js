import React from 'react';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addColumn({ title, icon }));
		setTitle('');
		setIcon('');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.ColumnForm}>
			Title:{' '}
			<TextInput value={title} onChange={e => setTitle(e.target.value)} />
			Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
			<Button>Add column</Button>
		</form>
	);
};

export default ColumnForm;
