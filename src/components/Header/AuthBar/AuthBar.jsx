import React from 'react';

import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { AuthContainer } from './AuthBar.styled';

function AuthBar() {
  return (
    <AuthContainer>
      <AuthNavigation />
    </AuthContainer>
  );
}

export default AuthBar;
