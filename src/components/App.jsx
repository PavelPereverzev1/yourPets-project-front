// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import MainPage from 'pages/MainPage/MainPage';
// import NoticesPage from 'pages/NoticesPage/NoticesPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import { GlobalStyle } from './GlobalStyle.styled';
// import AddPetPage from 'pages/AddPetPage/AddPetPage';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import UserPage from 'pages/UserPage/UserPage';

// export const App = () => {
//   return (
//     <>
//       <GlobalStyle />
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<MainPage />} />
//           <Route path="/notices" element={<Navigate to={'/notices/sell'} />} />
//           <Route path="/notices/:categories" element={<NoticesPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/add-pet" element={<AddPetPage />} />
//           <Route path="/user" element={<UserPage />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/AuthSlice/operations';
import { useAuth } from 'hooks/useAuth';
import { GlobalStyle } from './GlobalStyle.styled';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const NewsPage = lazy(()=> import('pages/NewsPage'));
const OurFriendsPage = lazy(()=> import('pages/OurFriendsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

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
            <Route path="news" element={<NewsPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />
            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            <Route path="notices" element={<Navigate to={'/notices/sell'} />} />
            <Route
              path="notices/favorite"
              element={
                <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
              }
            />
            <Route
              path="notices/own"
              element={
                <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
              }
            />
            <Route path="/notices/:categories" element={<NoticesPage />} />
            <Route
              path="add-pet"
              element={
                <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    )
  );
};