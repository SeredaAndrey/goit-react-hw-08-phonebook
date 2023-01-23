import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import authSelectors from 'redux/authSelector';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate replace to="login" />}
    </Route>
  );
}
