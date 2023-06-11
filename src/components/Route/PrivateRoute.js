import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to="/login" replace />}</>;
}
