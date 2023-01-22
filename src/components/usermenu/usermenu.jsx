import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import authOperations from 'redux/authOperations';
import authSelectors from 'redux/authSelector';

import { UserMenuTitle, ExitButton } from './usermenu.styled';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <UserMenuTitle>Welcome, {name}</UserMenuTitle>
      <ExitButton
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
          navigate('/');
        }}
      >
        Exit
      </ExitButton>
    </>
  );
};

export default UserMenu;
