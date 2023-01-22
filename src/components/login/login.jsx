import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';

import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginLabelContainer,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './login.styled';
import authOperations from 'redux/authOperations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/contacts/filter');
  };

  return (
    <LoginContainer>
      <LoginTitle>Log in page</LoginTitle>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabelContainer>
          <LoginLabel htmlFor={emailInputId}>
            E-mail
            <LoginInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </LoginLabel>
          <LoginLabel htmlFor={passwordInputId}>
            Password
            <LoginInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id={passwordInputId}
            />
          </LoginLabel>
        </LoginLabelContainer>
        <LoginButton type="submit">Submit</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}
