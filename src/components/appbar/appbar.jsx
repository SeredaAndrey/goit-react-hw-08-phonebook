import { BarContainer, BarTitle } from './appbar.styled';
import { useSelector } from 'react-redux';

import AuthNav from 'components/authnav/authnav';
import UserMenu from 'components/usermenu/usermenu';
import authSelectors from 'redux/authSelector';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <BarContainer>
      <BarTitle>Contact phonebook</BarTitle>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </BarContainer>
  );
};

export default AppBar;
