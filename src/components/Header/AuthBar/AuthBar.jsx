import React from 'react';
import { useAuth } from '../../../hooks/useAuth';

import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserBar from '../UserBar/UserBar';
import { AuthContainer } from './AuthBar.styled';

function AuthBar({ name = true }) {
  const { isLoggedIn } = useAuth();

  return (
    <AuthContainer>
      {isLoggedIn ? <UserBar name={name} /> : <AuthNavigation />}
    </AuthContainer>
  );
}

export default AuthBar;
