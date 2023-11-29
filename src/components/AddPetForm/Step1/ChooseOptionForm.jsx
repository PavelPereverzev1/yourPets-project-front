import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import BackgroundCard from '../BackgroundCard';
import StepsBlock from '../StepsBlock';
import FieldRadio from '../FieldRadio/FieldRadio';
import ErrorComponent from '../ErrorComponent';

import sprite from '../../../images/icons/sprite.svg';
import {
  Title,
  FormChooseOption,
  RadioWrapper,
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
    .oneOf(['sell', 'lost-found', 'in-good-hands', 'your-pet']),
});

const ChooseOptionForm = ({ next, data }) => {
  const handleSubmit = values => {
    next(values);
    console.log('set noticeType:', data.noticeType);
  };
  const navigate = useNavigate();

  return (
    <>
      <BackgroundCard $noticetype={data.noticeType}>
        <Title>Add pet</Title>
        <StepsBlock step={1} />
        <Formik
          validationSchema={stepOneValidationSchema}
          initialValues={data}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <FormChooseOption>
              <RadioWrapper>
                <FieldRadio
                  onChange={() => {
                    setFieldValue('noticeType', 'your-pet');
                  }}
                  text="your pet"
                  value="your-pet"
                  checked={values.noticeType === 'your-pet'}
                />
                <FieldRadio
                  onChange={() => setFieldValue('noticeType', 'sell')}
                  text="sell"
                  value="sell"
                  checked={values.noticeType === 'sell'}
                />
                <FieldRadio
                  onChange={() => setFieldValue('noticeType', 'lost-found')}
                  text="lost/found"
                  value="lost-found"
                  checked={values.noticeType === 'lost-found'}
                />
                <FieldRadio
                  onChange={() => setFieldValue('noticeType', 'in-good-hands')}
                  text="in good hands"
                  value="in-good-hands"
                  checked={values.noticeType === 'in-good-hands'}
                />

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
