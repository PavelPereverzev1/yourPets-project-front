import SharedLayout from '../components/SharedLayout/SharedLayout';
import MainPage from '../pages/MainPage/MainPage';
import NoticesPage from '../pages/NoticesPage/NoticesPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { GlobalStyle } from './GlobalStyle.styled';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};
