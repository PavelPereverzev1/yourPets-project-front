import sprite from '../../../images/icons/sprite.svg';
import { AuthBtn, Svg } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <>
      <AuthBtn to="/login">
        Log IN
        <Svg>
          <use href={`${sprite}#icon-pawprint-1`} />
        </Svg>
      </AuthBtn>
      <AuthBtn to="/register">Registration</AuthBtn>
    </>
  );
}

export default AuthNavigation;
