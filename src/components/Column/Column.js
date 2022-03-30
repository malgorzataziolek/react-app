import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../redux/store';

const Column = props => {
	const cards = useSelector(state => getFilteredCards(state, props.id));
	console.log('Column render');
	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>
			<ul className={styles.cards}>
				{cards.map(cards => (
					<Card
						key={cards.id}
						title={cards.title}
						columnId={cards.columnId}
						cardId={cards.id}></Card>
				))}
			</ul>
			<CardForm columnId={props.id}></CardForm>
		</article>
	);
};

export default Column;
