import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite</PageTitle>
			<p className={styles.subtitle}>lorem ipsum</p>
		</div>
	);
};

export default Favorite;
