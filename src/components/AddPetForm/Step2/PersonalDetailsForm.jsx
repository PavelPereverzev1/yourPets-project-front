import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
// import { FormContext } from '../AddPetForm';
// import { temporaryBox } from './PersonalDetailsForm.styled';
import {
  FormPersonalDetails,
  DetailWrapper,
  DetailInput,
  DetailLabel,
} from './PersonalDetailsForm.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import sprite from '../../../images/icons/sprite.svg';
import {
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';

const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter the pet's name")
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  birthday: Yup.string()
    .required('Enter the date in DD-MM-YYYY format')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d\d$/,
      'Invalid date format'
    ),

  type: Yup.string()
    .required('Enter the type')
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  titleOfAdd: Yup.string()
    .required('Enter the title of the add')
    .min(3, 'min 3 symbols')
    .max(16, 'max 16 symbols'),
});

const PersonalDetailsForm = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  // const formProps = useContext(FormContext);
  // const {
  //   formData,
  //   handleChange,
  //   currentStep,
  //   totalSteps,
  //   nextStep,
  //   backStep,
  //   handleSubmit,
  // } = formProps;

  return (
    <BackgroundCard>
      <TitleComponent name="Add pet" />
      <StepsBlock step={2} />
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormPersonalDetails>
            <div>
              {values.category !== 'your pet' && (
                <DetailWrapper>
                  <DetailLabel htmlFor="titleOfAdd"> Title of add</DetailLabel>
                  <DetailInput id="titleOfAdd" name="titleOfAdd"></DetailInput>
                  <ErrorMessage name="titleOfAdd" />
                </DetailWrapper>
              )}

              <DetailWrapper>
                <DetailLabel htmlFor="name"> Pet's name</DetailLabel>
                <DetailInput id="name" name="name"></DetailInput>
                <ErrorMessage name="name" />
              </DetailWrapper>

              <DetailWrapper>
                <DetailLabel htmlFor="date"> Date Of Birth</DetailLabel>
                <DetailInput
                  id="date"
                  name="birthday"
                  placeholder="DD-MM-YYYY"
                ></DetailInput>
                <ErrorMessage name="date" />
              </DetailWrapper>

              <DetailWrapper>
                <DetailLabel htmlFor="type"> Type</DetailLabel>
                <DetailInput id="type" name="type"></DetailInput>
                <ErrorMessage name="type" />
              </DetailWrapper>
            </div>
            <ButtonWhite type="button" onClick={() => props.prev(values)}>
              <BtnIcon>
                <use href={`${sprite}#icon-arrow-left`} />
              </BtnIcon>
              Back
            </ButtonWhite>
            <ButtonBlue type="submit">
              Next
              <BtnIcon>
                <use href={`${sprite}#icon-pawprint-1`} />
              </BtnIcon>
            </ButtonBlue>
          </FormPersonalDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default PersonalDetailsForm;
