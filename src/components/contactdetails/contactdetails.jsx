import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getContacts } from 'redux/selectors';
import avatarDefault from './avatarDefault.jpg';
import { FaTrash } from 'react-icons/fa';
import { deleteContact } from 'redux/operations';

import {
  ContactDetailsContainer,
  ContactAvatar,
  ContactDetailsName,
  ContactDetailsMore,
  DelButon,
} from './contactdetails.styled';

const ContactDetails = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const params = useParams();
  const navigate = useNavigate();

  const sortData = () => {
    const index = items.findIndex(contacts => contacts.id === params.id);
    return items[index];
  };

  const onDeleteContact = () => {
    dispatch(deleteContact(params.id));
    navigate('/contacts/filter');
  };

  return (
    <>
      <ContactDetailsContainer>
        <ContactDetailsName>Contact details</ContactDetailsName>

        <ContactAvatar src={avatarDefault} alt={sortData().name} />
        <ContactDetailsName>name: {sortData().name}</ContactDetailsName>
        <ContactDetailsMore>number: {sortData().number}</ContactDetailsMore>

        <DelButon type="button" onClick={() => onDeleteContact()}>
          <FaTrash />
        </DelButon>
      </ContactDetailsContainer>
    </>
  );
};

export default ContactDetails;
