import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
	const cards = useSelector(state => getFavoriteCards(state));
	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite</PageTitle>
			<article className={styles.column}>
				<ul className={styles.card}>
					{cards.map(card => (
						<Card key={card.id} cardId={card.id} title={card.title} />
					))}
				</ul>
			</article>
		</div>
	);
};

export default Favorite;
