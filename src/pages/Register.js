import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Label,
  InputStyled,
  Btn,
  Form,
  Container,
} from 'components/Phonebook.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <InputStyled
            type="text"
            name="name"
            value={name}
            autoFocus
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Email
          <InputStyled
            type="email"
            name="email"
            value={email}
            autoComplete="email"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <InputStyled
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            required
            onChange={handleChange}
          />
        </Label>
        <Btn type="submit">Register</Btn>
      </Form>
    </Container>
  );
}
