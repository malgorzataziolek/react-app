import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.navBar}>
				<div className={styles.icon}>
					<i className='fa fa-tasks'></i>
				</div>
				<div className={styles.main_nav}>
					<a href='home'>Home</a>
					<a href='favorite'>Favourite</a>
					<a href='about'>About</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
