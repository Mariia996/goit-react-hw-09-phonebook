import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addContactsFetch } from '../../../../../../redux/phonebook/reducer/contacts/phonebook-operations';
import { getAllContacts } from '../../../../../../redux/phonebook/reducer/contacts/phonebook-selectors';
import {fields} from "./fields";
import styles from './FormAddContacts.module.css';

const FormAddContacts = ({ contacts, onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
        case 'name':
            setName(value);
            break;
        case 'number':
            setNumber(value);
            break;
        default:
            console.log(`Тип поля - ${name} не обрабатывается`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = contacts.find(contact => {
            return (contact.name === name || contact.number === number);
        });
        (result) ? alert(`${name} is already in contacts`) : onSubmit({ name, number });
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.formField} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={nameInputId} className={styles.nameInput}>Name</label>
                 <input
                    className={styles.unputField}
                    onChange={handleChange}
                    type={fields.nameValue.type}
                    value={name}
                    name="name"
                    id={nameInputId}
                    pattern={fields.nameValue.pattern}
                    title={fields.nameValue.title}
                    required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={numberInputId} className={styles.nameInput}>Number</label>
                <input
                    className={styles.unputField}
                    onChange={handleChange}
                    id={numberInputId}
                    type={fields.numberValue.type}
                    value={number}
                    name="number"
                    pattern={fields.numberValue.pattern}
                    title={fields.numberValue.title}
                    required />
            </div>
            <button type="submit" className={styles.btn}>Add contact</button>
        </form>
     );
}

const mapStateToProps = state => {
    return {
        contacts: getAllContacts(state),
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (value) => dispatch(addContactsFetch(value))

})

export default connect(mapStateToProps, mapDispatchToProps)(FormAddContacts);