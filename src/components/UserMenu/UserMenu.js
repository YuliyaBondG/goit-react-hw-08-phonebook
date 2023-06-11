import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import authSelectors from 'redux/auth/selectors';
import { Wrapper, OutBtn, Username } from '../Phonebook.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.selectUserEmail);

  return (
    <Wrapper>
      <p>Welcome,</p>
      <Username>{email}</Username>
      <OutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </OutBtn>
    </Wrapper>
  );
};
