import { NavTitle, NavLinkContainer } from './nav.styled';
import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <NavTitle>Contacts phonebook</NavTitle>
      <NavLinkContainer>
        <NavLink to="filter">Search contact</NavLink>
        <NavLink to="add">Add contact</NavLink>
      </NavLinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
