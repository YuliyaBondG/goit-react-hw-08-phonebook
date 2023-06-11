import { NavLinkStyle, Nav } from 'components/Phonebook.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <NavLinkStyle to="/register">Register</NavLinkStyle>
      <NavLinkStyle to="/login">Log In</NavLinkStyle>
    </Nav>
  );
};
