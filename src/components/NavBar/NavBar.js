import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.navBar}>
				<div className={styles.icon}>
					<i className='fa fa-tasks'></i>
				</div>
				<div className={styles.main_nav}>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/about'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/favorite'>
								Favorite
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
