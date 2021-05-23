import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../../../../../redux/phonebook/reducer/auth/selectors';
import { logoutUser } from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logoutUser());

    return (
        <div className={styles.userContainer}>
            <div className={styles.imgContainer}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1998/1998767.svg" alt="User Avatar"
                    className={styles.userAvatar} width="26" height="26" />
                </div>
            <p className={styles.menuText}>Welcome, {user.email}</p>
            <a href="#" onClick={onLogout} className={styles.logoutLink}>Logout</a>
    </div>
    );
}

export default UserMenu;