import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import operations from '../../redux/authOperations';
import {
  RegisterContainer,
  RegisterTitle,
  RegisterForm,
  RegisterLabel,
  RegisterLabelContainer,
  RegisterButton,
  RegisterInput,
} from './register.styled';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Registration page</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabelContainer>
          <RegisterLabel htmlFor={nameInputId}>
            Name
            <RegisterInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              id={nameInputId}
            />
          </RegisterLabel>
          <RegisterLabel htmlFor={emailInputId}>
            E-mail
            <RegisterInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id={emailInputId}
            />
          </RegisterLabel>
          <RegisterLabel htmlFor={passwordInputId}>
            Password
            <RegisterInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id={passwordInputId}
            />
          </RegisterLabel>
        </RegisterLabelContainer>
        <RegisterButton type="submit">Submit</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
}
