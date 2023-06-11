import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function RestrictedRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <>{shouldRedirect ? <Navigate to={redirectTo} replace /> : children}</>
  );
}
