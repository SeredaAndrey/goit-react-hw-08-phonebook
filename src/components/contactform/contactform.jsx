import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import shortid from 'shortid';
import {
  ContactInputForm,
  LabelForm,
  InputForm,
  AddButon,
} from './contactform.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let flag = false;
    if (items && items !== []) {
      for (const contact of items) {
        if (contact.name === name) {
          alert(`${name} is alredy in contacts`);
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      console.log('add contact', name);
      dispatch(addContact({ name, number }));
    }

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactInputForm onSubmit={handleSubmit}>
      <LabelForm htmlFor={nameInputId}>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          id={nameInputId}
        />
      </LabelForm>
      <LabelForm htmlFor={numberInputId}>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
          id={numberInputId}
        />
      </LabelForm>
      <AddButon type="submit">Add contact</AddButon>
    </ContactInputForm>
  );
}
