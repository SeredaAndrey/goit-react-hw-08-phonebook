import { BarContainer, BarTitle } from './appbar.styled';

import AuthNav from 'components/authnav/authnav';
import UserMenu from 'components/usermenu/usermenu';

const AppBar = () => {
  return (
    <BarContainer>
      <BarTitle>Contact phonebook</BarTitle>
      <AuthNav />
      <UserMenu />
    </BarContainer>
  );
};

export default AppBar;
