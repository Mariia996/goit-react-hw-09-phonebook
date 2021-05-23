import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {registerUser} from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './RegisterUserForm.module.css';

const RegisterUserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const onSubmit = (body) => dispatch(registerUser(body));

    const nameInputId = uuidv4();
    const emailInputId = uuidv4();
    const passwordInputId = uuidv4();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                console.log(`Тип поля - ${name} не обрабатывается`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, password });
    };

    return (
            <form className={styles.registerFormField} onSubmit={handleSubmit}>
                <label htmlFor={nameInputId} className={styles.inputTitle}>Name</label>
                <input type="text"
                    name="name"
                    id={nameInputId}
                    value={name}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your name'}/>

                <label htmlFor={emailInputId} className={styles.inputTitle}>E-mail</label>
                <input type="email"
                    name="email"
                    id={emailInputId}
                    value={email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your email'}/>

                <label htmlFor={passwordInputId} className={styles.inputTitle}>Password</label>
                <input type="password"
                    name="password"
                    id={passwordInputId}
                    value={password}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your password'}/>
                <button type="submit" className={styles.btn}>Register</button>
            </form>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmit:(body) => dispatch(registerUser(body))
//     }
// }

export default RegisterUserForm;