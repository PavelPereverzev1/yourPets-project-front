import sprite from '../../../images/icons/sprite.svg';

import { ButtonLogout, Svg } from './LogoutBtn.styled';

const LogoutBtn = () => {
  return (
    <>
      <ButtonLogout>
        Log out
        <Svg>
          <use href={`${sprite}#icon-logout`} />
        </Svg>
      </ButtonLogout>
    </>
  );
};

export default LogoutBtn;
