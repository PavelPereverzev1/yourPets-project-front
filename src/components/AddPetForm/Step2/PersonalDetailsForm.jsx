import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

import BackgroundCard from '../BackgroundCard';
import StepsBlock from '../StepsBlock';
// import FieldInput from '../FieldInput';
import ErrorComponent from '../ErrorComponent';

import {
  FormPersonalDetails,
  FieldsWrapper,
  DetailWrapper,
  DetailInput,
  DetailLabel,
} from './PersonalDetailsForm.styled';
import { Title } from '../Step1/ChooseOptionForm.styled';
import sprite from '../../../images/icons/sprite.svg';
import {
  ButtonsWrapper,
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';

const stepTwoValidationSchemaAdd = Yup.object().shape({
  name: Yup.string()
    .required("Enter the pet's name")
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  birthday: Yup.string()
    .required('Enter the date in DD-MM-YYYY format')
    .matches(
      /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      'Invalid date format'
    ),

  petType: Yup.string()
    .required('Enter the type')
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),
});

const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter the pet's name")
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  birthday: Yup.string()
    .required('Enter the date in DD-MM-YYYY format')
    .matches(
      /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      'Invalid date format'
    ),

  petType: Yup.string()
    .required('Enter the type')
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  title: Yup.string()
    .required('Enter the title of the add')
    .min(3, 'min 3 symbols')
    .max(60, 'max 60 symbols'),
});

const PersonalDetailsForm = ({ next, prev, data }) => {
  const handleSubmit = values => {
    next(values);
  };

  return (
    <BackgroundCard>
      <Title>Add pet</Title>
      <StepsBlock step={2} />
      <Formik
        validationSchema={
          data.noticeType !== 'your-pet'
            ? stepTwoValidationSchema
            : stepTwoValidationSchemaAdd
        }
        initialValues={data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormPersonalDetails>
            <FieldsWrapper>
              {values.noticeType !== 'your-pet' && (
                <DetailWrapper>
                  {/* <FieldInput id="" name="" placeholder="Enter title of add" /> */}
                  <DetailLabel htmlFor="title"> Title of add</DetailLabel>
                  <DetailInput
                    id="title"
                    name="title"
                    placeholder="Enter title of add"
                  ></DetailInput>
                  <ErrorComponent name="title" />
                </DetailWrapper>
              )}

              <DetailWrapper>
                <DetailLabel htmlFor="name"> Pet's name</DetailLabel>
                <DetailInput
                  id="name"
                  name="name"
                  placeholder="Type name pet"
                ></DetailInput>
                <ErrorComponent name="name" />
              </DetailWrapper>

              <DetailWrapper>
                <DetailLabel htmlFor="birthday"> Date Of Birth</DetailLabel>
                <DetailInput
                  id="birthday"
                  name="birthday"
                  placeholder="YYYY-MM-DD"
                ></DetailInput>
                <ErrorComponent name="birthday" />
              </DetailWrapper>

              <DetailWrapper>
                <DetailLabel htmlFor="petType"> Type</DetailLabel>
                <DetailInput
                  id="petType"
                  name="petType"
                  placeholder="Type of pet"
                ></DetailInput>
                <ErrorComponent name="petType" />
              </DetailWrapper>
            </FieldsWrapper>

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
              <ButtonWhite type="button" onClick={() => prev(values)}>
                <BtnIcon>
                  <use
                    href={`${sprite}#icon-arrow-left`}
                    stroke="var(--blueLink)"
                  />
                </BtnIcon>
                Back
              </ButtonWhite>
            </ButtonsWrapper>
          </FormPersonalDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default PersonalDetailsForm;
