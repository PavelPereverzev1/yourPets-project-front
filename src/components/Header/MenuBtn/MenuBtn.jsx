import sprite from '../../../images/icons/sprite.svg';
import React from 'react';
import { MenuButton, Svg } from './MenuBtn.styled';

const MenuBtn = ({ isOpen, onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      {isOpen ? (
        <Svg>
          <use href={`${sprite}#icon-cross-small`} />
        </Svg>
      ) : (
        <Svg>
          <use href={`${sprite}#icon-menu-hamburger`} />
        </Svg>
      )}
    </MenuButton>
  );
};

export default MenuBtn;
