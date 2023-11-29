import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/AuthSlice/operations';
import { useAuth } from 'hooks/useAuth';
import { GlobalStyle } from './GlobalStyles';
import { selectCategory } from 'redux/notices/noticesSelectors';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const noticesCategory = useSelector(selectCategory);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />

            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />}>
              <Route
                index
                element={<Navigate to={`${noticesCategory}`} replace />}
              />
              <Route path=":categoryName" element={<NoticesPage />} />
              <Route
                path="favorite"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<NoticesPage />}
                  />
                }
              />
              <Route
                path="own"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<NoticesPage />}
                  />
                }
              />
            </Route>

            <Route path="/friends" element={<OurFriendsPage />} />

            <Route
              path="/add-pet"
              element={
                <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="/user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    )
  );
};
