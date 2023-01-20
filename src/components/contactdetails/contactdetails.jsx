/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react';
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

const ContactDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { items } = useSelector(getContacts);

  const onDeleteContact = () => {
    dispatch(deleteContact(params.id));
    navigate('/contacts/filter');
  };

  const onEditContact = () => {
    // dispatch(editContact(params.id));
    navigate('edit');
  };

  const getContactData = () => {
    return items.filter(item => item.id === params.id)[0];
  };

  return (
    <ContactPrimariContainer>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src={avatarDefault} alt={getContactData().name} />
        <ContactDetailsName>name: {getContactData().name}</ContactDetailsName>
        <ContactDetailsMore>
          number: {getContactData().number}
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
