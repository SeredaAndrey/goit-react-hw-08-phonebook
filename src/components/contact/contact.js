import {
  ContactPrimaryContainer,
  ContactTitle,
  ContactLinkContainer,
} from './contact.styled';
import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <ContactPrimaryContainer>
      <ContactTitle>Contacts phonebook</ContactTitle>

      <ContactLinkContainer>
        <NavLink to="filter">Search contact</NavLink>
        <NavLink to="add">Add contact</NavLink>
      </ContactLinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContactPrimaryContainer>
  );
}
