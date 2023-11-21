import sprite from '../../../images/icons/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/AuthSlice/operations';
import LogOutModal from '../../Modals/LogOutModal/LogOutModal';

import { ButtonLogout, Svg } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <ButtonLogout onClick={() => setModalActive(true)}>
        Log out
        <Svg>
          <use href={`${sprite}#icon-logout`} />
        </Svg>
      </ButtonLogout>
      <LogOutModal
        active={modalActive}
        setActive={setModalActive}
        yes={handleLogout}
      />
    </>
  );
};

export default LogoutBtn;
