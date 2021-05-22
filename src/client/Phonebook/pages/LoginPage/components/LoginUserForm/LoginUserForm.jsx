import { useState } from 'react';

import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { loginUser } from '../../../../../../redux/phonebook/reducer/auth/operations';

import styles from './LoginUserForm.module.css';

const LoginUserForm = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInputId = uuidv4();
    const passwordInputId = uuidv4();

    const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
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
        onSubmit({ email, password });
    };

    return (
        <form className={styles.registerFormField} onSubmit={handleSubmit}>
                <label htmlFor={emailInputId} className={styles.inputTitle}>Enter you E-mail</label>
                <input type="email"
                    name="email"
                    id={emailInputId}
                    value={email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your email'}/>

                <label htmlFor={passwordInputId} className={styles.inputTitle}>Enter you password</label>
                <input type="password"
                    name="password"
                    id={passwordInputId}
                    value={password}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={'Enter your password'}/>
                <button type="submit" className={styles.btn}>Login</button>
            </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (value) => dispatch(loginUser(value))
    }
}

export default connect(null, mapDispatchToProps)(LoginUserForm);

