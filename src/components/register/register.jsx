import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';
import { RegisterContainer, RegisterTitle } from './register.styled';

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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Registration page</RegisterTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </label>
        <label htmlFor={emailInputId}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
        </label>
        <label htmlFor={passwordInputId}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id={passwordInputId}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </RegisterContainer>
  );
}
