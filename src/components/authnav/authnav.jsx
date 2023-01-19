import { NavLink } from 'react-router-dom';
import { AuthNavButtonContainer } from './authnav.styled';

const AuthNav = () => {
  return (
    <AuthNavButtonContainer>
      <NavLink to="register">Registration</NavLink>
      <NavLink to="login">LogIn</NavLink>
    </AuthNavButtonContainer>
  );
};

export default AuthNav;
