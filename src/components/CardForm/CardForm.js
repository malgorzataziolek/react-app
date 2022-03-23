import React from 'react';
import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
	const dispatch = useDispatch();
	const columnId = props.columnId;
	const [title, setTitle] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
		setTitle('');
	};
	return (
		<form onSubmit={handleSubmit} className={styles.cardForm}>
			<TextInput
				value={title}
				onChange={e => setTitle(e.target.value)}></TextInput>
			<Button>Add card</Button>
		</form>
	);
};

export default CardForm;
