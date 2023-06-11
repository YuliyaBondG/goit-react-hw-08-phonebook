import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';
import { NavLinkStyle, Nav } from 'components/Phonebook.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Nav>
      <NavLinkStyle to="/">Home</NavLinkStyle>
      {isLoggedIn && <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>}
    </Nav>
  );
};
