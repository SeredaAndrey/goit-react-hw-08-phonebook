import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import {
  ContactItemContainer,
  ContactName,
  ContactTelephone,
  DelButon,
} from './contactitem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const location = useLocation();
  return (
    <ContactItemContainer key={id}>
      {/* <ContactAvatar src={avatar} alt="name" /> */}
      <NavLink to={`../contacts/${id}`} state={{ from: location }}>
        <ContactName>{name}:</ContactName>
        <ContactTelephone>{number}</ContactTelephone>
      </NavLink>
      <DelButon type="button" onClick={() => onDeleteContact(id)}>
        <FaTrash />
      </DelButon>
    </ContactItemContainer>
  );
};

export default ContactItem;

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
