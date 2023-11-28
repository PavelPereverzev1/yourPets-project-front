import sprite from '../../../images/icons/sprite.svg';
import { AuthBtnLog, AuthBtnReg, Svg } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <>
      <AuthBtnLog to="/login">
        Log IN
        <Svg>
          <use href={`${sprite}#icon-pawprint-1`} />
        </Svg>
      </AuthBtnLog>
      <AuthBtnReg to="/register">Registration</AuthBtnReg>
    </>
  );
}

export default AuthNavigation;
