import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdPersonAdd } from 'react-icons/md';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import shortid from 'shortid';
import {
  AddContactInputForm,
  LabelFormContainer,
  LabelForm,
  InputForm,
  AddButon,
} from './contactform.styled';

export default function AddContactForm() {
  const navigate = useNavigate();
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
      dispatch(addContact({ name, number }));
    }

    formReset();
    navigate('/contacts/filter');
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AddContactInputForm onSubmit={handleSubmit}>
      <LabelFormContainer>
        <LabelForm htmlFor={nameInputId}>
          name
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
          number
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
      </LabelFormContainer>
      <AddButon type="submit">
        <MdPersonAdd /> Add contact
      </AddButon>
    </AddContactInputForm>
  );
}
