import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';

import BackgroundCard from '../BackgroundCard';
import PreviewImage from '../PreviewImage/PreviewImage';
import ErrorComponent from '../ErrorComponent';

import sprite from '../../../images/icons/sprite.svg';
import {
  FormAddMoreDetails,
  BlocksWrapper,
  DetailWrapper,
  PhotoBlock,
  PhotoLabel,
  ImagePreview,
  DefaultImage,
  UploadIcon,
  PhotoInput,
  CommentsInput,
} from './AddMoreDetails.styled';
import StepsBlock from '../StepsBlock';
import {
  ButtonsWrapper,
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';

import { Title } from '../Step1/ChooseOptionForm.styled';

const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];

const stepThreeValidationSchema = Yup.object().shape({
  photo: Yup.mixed()
    .nullable()
    .required('Select a file')
    .test(
      'FILE_SIZE',
      'Uploaded file must be 3MB or less',
      value => !value || (value && value.size <= 3145728)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),

  comments: Yup.string().max(120, 'max 120 symbols'),
});

const AddMoreDetailsForm = ({ next, prev, data }) => {
  const handleSubmit = values => {
    next(values, true);
  };
  const fileRef = useRef(null);

  return (
    <BackgroundCard>
      <Title>Add pet</Title>
      <StepsBlock step={3} />
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={data}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormAddMoreDetails>
            <BlocksWrapper>
              <PhotoBlock>
                <PhotoLabel htmlFor="photo">
                  Load the <br /> pet’s image:
                </PhotoLabel>

                <ImagePreview>
                  <PhotoInput
                    ref={fileRef}
                    hidden
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={event => {
                      setFieldValue('photo', event.target.files[0]);
                    }}
                  />
                  {values.photo !== null ? (
                    <PreviewImage photo={values.photo} />
                  ) : (
                    <DefaultImage>
                      <UploadIcon>
                        <use
                          href={`${sprite}#icon-plus`}
                          stroke="var(--blueLink)"
                        />
                      </UploadIcon>
                    </DefaultImage>
                  )}
                </ImagePreview>
                <ErrorComponent name="photo" />
              </PhotoBlock>

              <DetailWrapper>
                <label htmlFor="comments"> Comments</label>
                <CommentsInput
                  id="comments"
                  name="comments"
                  placeholder="Enter your comments"
                  component="textarea"
                  rows="4"
                ></CommentsInput>
                <ErrorComponent name="comments" />
              </DetailWrapper>
            </BlocksWrapper>

            <ButtonsWrapper>
              <ButtonBlue type="submit">
                Done
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
          </FormAddMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default AddMoreDetailsForm;
