import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import {
  ContactItemContainer,
  ContactName,
  DelButon,
} from './contactitem.styled';

const ContactItem = ({ id, name, onDeleteContact }) => {
  const location = useLocation();
  return (
    <ContactItemContainer key={id}>
      <NavLink to={`../contacts/${id}`} state={{ from: location }}>
        <ContactName>Name: {name}</ContactName>
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
};
