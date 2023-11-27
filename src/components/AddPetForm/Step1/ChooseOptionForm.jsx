import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

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
    .oneOf(['sell', 'lost-found', 'in-good-hands', 'your pet']),
});

const ChooseOptionForm = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  const navigate = useNavigate();

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
                    value="lost-found"
                  />
                  lost/found
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="noticeType"
                    value="in-good-hands"
                  />
                  in good hands
                </Label>
                <ErrorComponent name="noticeType" />
              </RadioWrapper>

              <ButtonsWrapper>
                <ButtonBlue type="submit">
                  Next
                  <BtnIcon>
                    <use
                      href={`${sprite}#icon-pawprint-1`}
                      fill="var(--background)"
                    />
                  </BtnIcon>
                </ButtonBlue>
                <ButtonWhite
                  type="button"
                  onClick={() => {
                    navigate('/user');
                  }}
                >
                  <BtnIcon>
                    <use
                      href={`${sprite}#icon-arrow-left`}
                      stroke="var(--blueLink)"
                    />
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
