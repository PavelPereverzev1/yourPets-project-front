import React from 'react';
// import { FormContext } from '../AddPetForm';
import {
  FormChooseOption,
  RadioButton,
  RadioWrapper,
  Label,
} from './ChooseOptionForm.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
// import ButtonsBlock from '../ButtonsBlock';
import sprite from '../../../images/icons/sprite.svg';
import {
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';
// import ErrorComponent from '../ErrorComponent';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object().shape({
  category: Yup.string()
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
        <TitleComponent name="Add pet" />
        <StepsBlock step={1} />
        <Formik
          validationSchema={stepOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormChooseOption>
              <RadioWrapper role="group" aria-labelledby="category-radio-group">
                <Label>
                  <RadioButton type="radio" name="category" value="your pet" />
                  your pet
                </Label>

                <Label>
                  <RadioButton type="radio" name="category" value="sell" />
                  sell
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="category"
                    value="lost/found"
                  />
                  lost/found
                </Label>

                <Label>
                  <RadioButton
                    type="radio"
                    name="category"
                    value="in good hands"
                  />
                  in good hands
                </Label>
                <ErrorMessage name="category" />
              </RadioWrapper>

              <ButtonWhite type="button">
                <BtnIcon>
                  <use href={`${sprite}#icon-arrow-left`} />
                </BtnIcon>
                Cancel
              </ButtonWhite>
              <ButtonBlue type="submit">
                Next
                <BtnIcon>
                  <use href={`${sprite}#icon-pawprint-1`} />
                </BtnIcon>
              </ButtonBlue>
            </FormChooseOption>
          )}
        </Formik>
      </BackgroundCard>
    </>
  );
};

export default ChooseOptionForm;
