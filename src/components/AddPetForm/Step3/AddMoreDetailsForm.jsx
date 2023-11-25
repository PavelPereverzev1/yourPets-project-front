import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  FormAddMoreDetails,
  DetailWrapper,
  PhotoBlock,
  PhotoLabel,
  ImagePreview,
  DefaultImage,
  UploadIcon,
  PhotoInput,
  CommentsInput,
  CommentsLabel,
} from './AddMoreDetails.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import {
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';
import PreviewImage from '../PreviewImage/PreviewImage';

const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];

const stepThreeValidationSchema = Yup.object().shape({
  file: Yup.mixed()
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
      <TitleComponent name="Add pet" />
      <StepsBlock step={3} />
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={data}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormAddMoreDetails>
            <PhotoBlock>
              <PhotoLabel htmlFor="file">Load the pet’s image:</PhotoLabel>

              <ImagePreview>
                <PhotoInput
                  ref={fileRef}
                  hidden
                  type="file"
                  id="file"
                  name="file"
                  onChange={event => {
                    setFieldValue('file', event.target.files[0]);
                  }}
                />
                {values.file !== null ? (
                  <PreviewImage file={values.file} />
                ) : (
                  <DefaultImage>
                    <UploadIcon>
                      <use href={`${sprite}#icon-plus`} />
                    </UploadIcon>
                  </DefaultImage>
                )}
              </ImagePreview>
              <ErrorMessage name="file" />
            </PhotoBlock>

            <DetailWrapper>
              <CommentsLabel htmlFor="comments"> Comments</CommentsLabel>
              <CommentsInput
                id="comments"
                name="comments"
                placeholder="Enter your comment"
              ></CommentsInput>
              <ErrorMessage name="comments" />
            </DetailWrapper>

            <ButtonWhite type="button" onClick={() => prev(values)}>
              <BtnIcon>
                <use href={`${sprite}#icon-arrow-left`} />
              </BtnIcon>
              Back
            </ButtonWhite>
            <ButtonBlue type="submit">
              Done
              <BtnIcon>
                <use href={`${sprite}#icon-pawprint-1`} />
              </BtnIcon>
            </ButtonBlue>
          </FormAddMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default AddMoreDetailsForm;
