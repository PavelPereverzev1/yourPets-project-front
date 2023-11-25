import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import { Link } from 'react-router-dom';
import {
  ButtonsWrapper,
  ButtonWhite,
  ButtonBlue,
  BtnIcon,
} from './ButtonsBlock.styled';

const ButtonsBlock = () => {
  return (
    <ButtonsWrapper>
      <ButtonWhite>
        <BtnIcon>
          <use href={`${sprite}#icon-arrow-left`} />
        </BtnIcon>
        <Link to="/"></Link>
        Cancel
      </ButtonWhite>

      <ButtonWhite>
        <BtnIcon>
          <use href={`${sprite}#icon-arrow-left`} />
        </BtnIcon>
        Back
      </ButtonWhite>

      <ButtonBlue>
        Next
        <BtnIcon>
          <use href={`${sprite}#icon-pawprint-1`} />
        </BtnIcon>
      </ButtonBlue>

      <ButtonBlue>
        <Link to="/"></Link>
        Done
        <BtnIcon>
          <use href={`${sprite}#icon-pawprint-1`} />
        </BtnIcon>
      </ButtonBlue>
    </ButtonsWrapper>
  );
};

export default ButtonsBlock;
