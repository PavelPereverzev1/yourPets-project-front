import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import UserPage from 'pages/UserPage';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
      <UserPage />
    </>
  );
};

export default SharedLayout;
