import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import { Link } from 'react-router-dom';
import {
  ButtonsWrapper,
  ButtonWhite,
  ButtonBlue,
  BtnIcon,
} from './ButtonsBlock.styled';

const ButtonsBlock = ({
  currentStep,
  totalSteps,
  nextStep,
  backStep,
  handleSubmit,
}) => {
  return (
    <ButtonsWrapper>
      {currentStep === 1 && (
        <ButtonWhite>
          <BtnIcon>
            <use href={`${sprite}#icon-arrow-left`} />
          </BtnIcon>
          <Link to="/"></Link>
          Cancel
        </ButtonWhite>
      )}
      {currentStep > 1 && (
        <ButtonWhite onClick={backStep}>
          <BtnIcon>
            <use href={`${sprite}#icon-arrow-left`} />
          </BtnIcon>
          Back
        </ButtonWhite>
      )}
      {currentStep < totalSteps && (
        <ButtonBlue onClick={nextStep}>
          Next
          <BtnIcon>
            <use href={`${sprite}#icon-pawprint-1`} />
          </BtnIcon>
        </ButtonBlue>
      )}
      {currentStep === totalSteps && (
        <ButtonBlue onClick={handleSubmit}>
          <Link to="/"></Link>
          Done
          <BtnIcon>
            <use href={`${sprite}#icon-pawprint-1`} />
          </BtnIcon>
        </ButtonBlue>
      )}
    </ButtonsWrapper>
  );
};

export default ButtonsBlock;
