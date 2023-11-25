import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import { Container } from './SharedLayout.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { resetAuthError } from 'redux/AuthSlice';

const SharedLayout = () => {
  const { authError } = useAuth();
  const dispatch = useDispatch();

  Report.init({
    failure: {
      svgColor: '#F43F5E',
      titleColor: '#111111',
      messageColor: '#111111',
      buttonBackground: '#F43F5E',
      backOverlayColor: 'rgba(0,0,0,0.2)',
    },
  });

  useEffect(() => {
    if (authError) {
      Report.failure('Authentication Error', authError, 'Okay', () =>
        dispatch(resetAuthError())
      );
    }
  }, [authError, dispatch]);

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
