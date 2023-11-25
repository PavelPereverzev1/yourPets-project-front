import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import BackgroundCard from '../BackgroundCard';
import StepsBlock from '../StepsBlock';
import ErrorComponent from '../ErrorComponent';

import sprite from '../../../images/icons/sprite.svg';
import {
  Title,
  FormChooseOption,
  RadioButton,
  RadioWrapper,
  Label,
} from './ChooseOptionForm.styled';
import {
  ButtonsWrapper,
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';

const stepOneValidationSchema = Yup.object().shape({
  noticeType: Yup.string()
    .required('Choose one of the available categories')
    .oneOf(['sell', 'lost/found', 'in good hands', 'your pet']),
});

const ChooseOptionForm = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <>
      <BackgroundCard>
        <Title>Add pet</Title>
        <StepsBlock step={1} />
        <Formik
          validationSchema={stepOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormChooseOption>
              <RadioWrapper
                role="group"
                aria-labelledby="noticeType-radio-group"
              >
                <Label>
                  <RadioButton
                    type="radio"
                    name="noticeType"
                    value="your pet"
                  />
                  your pet
                </Label>

                <Label>
                  <RadioButton type="radio" name="noticeType" value="sell" />
                  sell
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="noticeType"
                    value="lost/found"
                  />
                  lost/found
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="noticeType"
                    value="in good hands"
                  />
                  in good hands
                </Label>
                <ErrorComponent name="noticeType" />
              </RadioWrapper>

              <ButtonsWrapper>
                <ButtonBlue type="submit">
                  Next
                  <BtnIcon>
                    <use href={`${sprite}#icon-pawprint-1`} />
                  </BtnIcon>
                </ButtonBlue>
                <ButtonWhite type="button">
                  <BtnIcon>
                    <use href={`${sprite}#icon-arrow-left`} />
                  </BtnIcon>
                  Cancel
                </ButtonWhite>
              </ButtonsWrapper>
            </FormChooseOption>
          )}
        </Formik>
      </BackgroundCard>
    </>
  );
};

export default ChooseOptionForm;
