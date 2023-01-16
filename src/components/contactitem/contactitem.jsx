import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import {
  ContactItemContainer,
  ContactName,
  DelButon,
} from './contactitem.styled';

const ContactItem = ({ id, fullname, onDeleteContact }) => {
  const location = useLocation();
  return (
    <ContactItemContainer key={id}>
      <NavLink to={`/contacts/filter/${id}`} state={{ from: location }}>
        <ContactName>{fullname}</ContactName>
      </NavLink>
      {/* <DelButon type="button" onClick={() => onDeleteContact(id)}>
        <FaTrash />
      </DelButon> */}
    </ContactItemContainer>
  );
};

export default ContactItem;

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
};
