import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const NoticesRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const { categoryName } = useParams();

  const isNotLoggedIn = !isLoggedIn && !isRefreshing;
  const isPrivateRoute = categoryName === 'own' || categoryName === 'favorite';
  const shouldRedirect = isNotLoggedIn && isPrivateRoute;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
