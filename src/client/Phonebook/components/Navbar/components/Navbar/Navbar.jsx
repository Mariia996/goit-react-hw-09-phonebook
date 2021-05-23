import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import shortid from 'shortid';

import { isLogin } from '../../../../../../redux/phonebook/reducer/auth/selectors';
import { menuItems } from './menuItems';

import AuthNav from '../../../AuthNav/components/AuthNav';
import UserMenu from '../../../UserMenu/components/UserMenu';

import styles from './Navbar.module.css';

const Navbar = () => {
    const isAuthenticated = useSelector(isLogin);


    const { home, homeText, phonebook, phonebookText } = menuItems;
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarRow}>
                    <NavLink exact to={home} className={styles.logoLink}>Phonebook</NavLink>
                    <ul className={styles.navbarMenu}>
                        <li className={styles.navbarMenuItem}>
                            <NavLink exact to={home} className={styles.navbarMenuLink} activeClassName={styles.navbarMenuLinkActive} key={shortid.generate()}>{homeText}</NavLink>
                        </li>
                        <li className={styles.navbarMenuItem}>
                            {isAuthenticated && <NavLink exact to={phonebook} className={styles.navbarMenuLink} activeClassName={styles.navbarMenuLinkActive} key={shortid.generate()}>{phonebookText}</NavLink>}
                        </li>
                        </ul>
                        </div>
                    {isAuthenticated ? <UserMenu /> : <AuthNav /> }
                </nav>
            </div>
        </header>
     );
}

export default Navbar;