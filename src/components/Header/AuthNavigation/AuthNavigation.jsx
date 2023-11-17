import { Link } from 'react-router-dom';

import { AuthBtn } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <>
      <AuthBtn as={Link} to="/login">
        Log IN
      </AuthBtn>
      <AuthBtn as={Link} to="/register">
        Registration
      </AuthBtn>
    </>
  );
}

export default AuthNavigation;
