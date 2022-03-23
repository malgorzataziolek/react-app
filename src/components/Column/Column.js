import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';

const Column = props => {
	const cards = useSelector(state => state.cards).filter(
		card => card.columnId === props.id
	);
	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>
			<ul className={styles.cards}>
				{cards.map(cards => (
					<Card key={cards.id} {...cards}></Card>
				))}
			</ul>
			<CardForm columnId={props.id}></CardForm>
		</article>
	);
};

export default Column;
