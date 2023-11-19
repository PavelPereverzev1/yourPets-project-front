import { AuthBtn } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <>
      <AuthBtn to="/login">Log IN</AuthBtn>
      <AuthBtn to="/register">Registration</AuthBtn>
    </>
  );
}

export default AuthNavigation;
