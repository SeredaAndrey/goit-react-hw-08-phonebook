/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios';
import { useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import avatarDefault from './avatarDefault.jpg';
import { FaTrash, FaMarker } from 'react-icons/fa';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import {
  ContactPrimariContainer,
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsMore,
  DelButon,
  RedactButon,
  ButtonContainer,
} from './contactdetails.styled';
// import { useEffect } from 'react';

const ContactDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  // const [Details, setDetails] = useState([]);
  const { items } = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(getContactForId());
  // }, [dispatch, params, items]);

  const onDeleteContact = () => {
    dispatch(deleteContact(params.id));
    navigate('/contacts/filter');
  };

  const onEditContact = () => {
    // dispatch(editContact(params.id));
    navigate('edit');
  };

  const getContactForId = async () => {
    return items.filter(item => item.id === params.id);
  };

  //  const fetchContactsById = createAsyncThunk(
  //   'contacts/fetchAll',
  //   async thunkAPI => {
  //     try {
  //       const responce = await axios.get('/contacts');
  //       return responce.data;
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );

  return (
    <ContactPrimariContainer>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src={avatarDefault} alt={getContactForId().name} />
        <ContactDetailsName>name: {getContactForId().name}</ContactDetailsName>
        <ContactDetailsMore>
          number: {getContactForId().number}
        </ContactDetailsMore>

        <ButtonContainer>
          <RedactButon type="button" onClick={() => onEditContact()}>
            <FaMarker />
          </RedactButon>

          <DelButon type="button" onClick={() => onDeleteContact()}>
            <FaTrash />
          </DelButon>
        </ButtonContainer>
      </ContactDetailsContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContactPrimariContainer>
  );
};

export default ContactDetails;
