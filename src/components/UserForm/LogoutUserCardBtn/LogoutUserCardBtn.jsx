import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/AuthSlice/operations';
import { Btn, Icon } from './LogoutUserCardBtn.styled';
import sprite from 'images/icons/sprite.svg';
import LogOutModal from 'components/Modals/LogOutModal/LogOutModal';

const LogoutUserCardBtn = () => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Btn onClick={() => setModalActive(true)}>
        <Icon>
          <use href={`${sprite}#icon-logout`} />
        </Icon>
        Log out
      </Btn>
      <LogOutModal
        active={modalActive}
        setActive={setModalActive}
        yes={handleLogout}
      />
    </>
  );
};

export default LogoutUserCardBtn;
