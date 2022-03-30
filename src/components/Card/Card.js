import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getToggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {
	const cardId = props.cardId;
	const dispatch = useDispatch();

	const clickFavorite = e => {
		e.preventDefault();
		dispatch(getToggleCardFavorite(cardId));
	};
	const card = useSelector(state =>
		state.cards.filter(card => card.id === cardId)
	);
	const isFavorite = card[0].isFavorite;
	return (
		<li className={styles.card}>
			{props.title}
			<button className={styles.favoriteButton} onClick={clickFavorite}>
				<span
					className={
						clsx(styles.icon, { [styles.active]: isFavorite }) + ' fa fa-star-o'
					}></span>
			</button>
		</li>
	);
};

export default Card;
