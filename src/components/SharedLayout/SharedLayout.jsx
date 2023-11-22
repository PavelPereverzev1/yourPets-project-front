import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;