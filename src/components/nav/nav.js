import { NavTitle, NavLinkContainer } from './nav.styled';

import { NavLink, Outlet } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <NavTitle>Contacts phonebook</NavTitle>
      <NavLinkContainer>
        <NavLink to="filter">Search contact</NavLink>
        <NavLink to="add">Add contact</NavLink>
      </NavLinkContainer>
      <Outlet />
    </>
  );
};
