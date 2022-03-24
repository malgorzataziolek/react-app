import React, { useState } from 'react';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearching } from '../../redux/store';

const SearchForm = () => {
	const dispatch = useDispatch();
	const textInputValue = TextInput.value;
	const [searchString, setSearchString] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		console.log(textInputValue);
		dispatch(updateSearching({ searchString }));
	};
	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				placeholder='Search...'
				value={searchString}
				onChange={e => setSearchString(e.target.value)}
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
