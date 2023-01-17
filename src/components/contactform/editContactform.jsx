import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getContacts } from 'redux/selectors';
import { editContact } from 'redux/operations';

import shortid from 'shortid';
import {
  EditContactInputForm,
  LabelFormContainer,
  LabelForm,
  InputForm,
  AddButon,
  ContactInputFormTitle,
} from './contactform.styled';

export default function EditContactForm() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const initialValue = () => {
    const index = items.findIndex(contacts => contacts.id === params.id);
    return items[index];
  };

  const [name, setName] = useState(() => initialValue().name);
  const [number, setNumber] = useState(() => initialValue().number);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    const contactId = params.id;
    event.preventDefault();

    dispatch(editContact({ contactId, name, number }));

    formReset();
    navigate(-1);
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <EditContactInputForm onSubmit={handleSubmit}>
      <ContactInputFormTitle>Edit contact</ContactInputFormTitle>
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
      <AddButon type="submit">Edit contact</AddButon>
    </EditContactInputForm>
  );
}
