import { NavLink } from 'react-router-dom';
import { AuthNavButtonContainer } from './authnav.styled';
import { ImEnter } from 'react-icons/im';

const AuthNav = () => {
  return (
    <AuthNavButtonContainer>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="login">
        <ImEnter /> LogIn
      </NavLink>
    </AuthNavButtonContainer>
  );
};

export default AuthNav;
