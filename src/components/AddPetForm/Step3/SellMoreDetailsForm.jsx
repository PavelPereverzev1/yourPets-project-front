import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';

import BackgroundCard from '../BackgroundCard';
import PreviewImage from '../PreviewImage/PreviewImage';
import StepsBlock from '../StepsBlock';

import sprite from '../../../images/icons/sprite.svg';
import {
  FormSellMoreDetails,
  BlocksWrapper,
  SexPhotoblock,
  Sexblock,
  SexList,
  RadioButton,
  IconSex,
  PhotoBlock,
  ImagePreview,
  DefaultImage,
  PhotoInput,
  PhotoLabel,
  UploadIcon,
  LocationPriceBlock,
  DetailWrapper,
  CommentsLabel,
  CommentsInput,
  Label,
} from './SellMoreDetailsForm.styled';
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

  sex: Yup.string().required('Select gender').oneOf(['male', 'female']),

  location: Yup.string().required('Enter location'),

  price: Yup.number()
    .required('Enter price')
    .min(1, 'The price must be greater than 0'),

  comments: Yup.string().max(120, 'max 120 symbols'),
});

const SellMoreDetailsForm = ({ next, prev, data }) => {
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
          <FormSellMoreDetails>
            <BlocksWrapper>
              <SexPhotoblock>
                <Sexblock role="group" aria-labelledby="gender-radio-group">
                  <h3>The Sex</h3>
                  <SexList>
                    <Label>
                      <IconSex>
                        <use href={`${sprite}#icon-female`} />
                      </IconSex>
                      <RadioButton type="radio" name="sex" value="female" />
                      Female
                    </Label>

                    <Label>
                      <IconSex>
                        <use href={`${sprite}#icon-male`} />
                      </IconSex>
                      <RadioButton type="radio" name="sex" value="male" />
                      Male
                    </Label>
                  </SexList>

                  <ErrorMessage name="sex" />
                </Sexblock>

                <PhotoBlock>
                  <PhotoLabel htmlFor="photo">Load the pet’s image:</PhotoLabel>

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
                          <use href={`${sprite}#icon-plus`} />
                        </UploadIcon>
                      </DefaultImage>
                    )}
                  </ImagePreview>
                  <ErrorMessage name="photo" />
                </PhotoBlock>
              </SexPhotoblock>

              <LocationPriceBlock>
                <DetailWrapper>
                  <label htmlFor="location"> Location</label>
                  <Field
                    id="location"
                    name="location"
                    placeholder="Kyiv"
                  ></Field>
                  <ErrorMessage name="location" />
                </DetailWrapper>

                {values.noticeType === 'sell' && (
                  <DetailWrapper>
                    <label htmlFor="price"> Price</label>
                    <Field
                      id="price"
                      name="price"
                      placeholder="000 USD"
                    ></Field>
                    <ErrorMessage name="price" />
                  </DetailWrapper>
                )}

                <DetailWrapper>
                  <CommentsLabel htmlFor="comments"> Comments</CommentsLabel>
                  <CommentsInput
                    id="comments"
                    name="comments"
                    placeholder="Enter your comment"
                  ></CommentsInput>
                  <ErrorMessage name="comments" />
                </DetailWrapper>
              </LocationPriceBlock>
            </BlocksWrapper>

            <ButtonsWrapper>
              <ButtonBlue type="submit">
                Done
                <BtnIcon>
                  <use href={`${sprite}#icon-pawprint-1`} />
                </BtnIcon>
              </ButtonBlue>
              <ButtonWhite type="button" onClick={() => prev(values)}>
                <BtnIcon>
                  <use href={`${sprite}#icon-arrow-left`} />
                </BtnIcon>
                Back
              </ButtonWhite>
            </ButtonsWrapper>
          </FormSellMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default SellMoreDetailsForm;
