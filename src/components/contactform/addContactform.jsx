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
} from './addContactform.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');

  const firstNnameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const lastNnameInputId = shortid.generate();
  const cityInputId = shortid.generate();

  const handleChangeFirstName = event => {
    setFirstName(event.currentTarget.value);
  };
  const handleChangeLastName = event => {
    setLastName(event.currentTarget.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleChangeCity = event => {
    setCity(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let flag = false;
    if (items && items !== []) {
      for (const contact of items) {
        if (contact.firstname === firstname) {
          alert(`${firstname} is alredy in contacts`);
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      const fullname = firstname + ' ' + lastname;
      dispatch(
        addContact({
          fullname,
          firstname,
          lastname,
          email,
          number,
          city,
        })
      );
    }

    formReset();
  };

  const formReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setNumber('');
    setCity('');
  };

  return (
    <ContactInputForm onSubmit={handleSubmit}>
      <LabelForm htmlFor={firstNnameInputId}>
        Firstname
        <InputForm
          type="text"
          firstname="firstname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={firstname}
          onChange={handleChangeFirstName}
          id={firstNnameInputId}
        />
      </LabelForm>
      <LabelForm htmlFor={lastNnameInputId}>
        Lastname
        <InputForm
          type="text"
          lastname="lastname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={lastname}
          onChange={handleChangeLastName}
          id={lastNnameInputId}
        />
      </LabelForm>
      <LabelForm htmlFor={emailInputId}>
        E-mail adress
        <InputForm
          type="text"
          email="email"
          value={email}
          onChange={handleChangeEmail}
          id={emailInputId}
        />
      </LabelForm>
      <LabelForm htmlFor={cityInputId}>
        City
        <InputForm
          type="text"
          city="city"
          value={city}
          onChange={handleChangeCity}
          id={cityInputId}
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
