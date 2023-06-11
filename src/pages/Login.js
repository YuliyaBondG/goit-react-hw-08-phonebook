import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  Form,
  InputStyled,
  Label,
  Btn,
} from 'components/Phonebook.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
            autoComplete="current-pasword"
            required
            onChange={handleChange}
          />
        </Label>
        <Btn type="submit">Log In</Btn>
      </Form>
    </Container>
  );
}
