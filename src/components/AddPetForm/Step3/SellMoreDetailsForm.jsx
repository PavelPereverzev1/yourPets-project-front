import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';

import BackgroundCard from '../BackgroundCard';
import PreviewImage from '../PreviewImage/PreviewImage';
import StepsBlock from '../StepsBlock';
import GenderFieldRadio from '../GenderFieldRadio';
import ErrorComponent from '../ErrorComponent';

import sprite from '../../../images/icons/sprite.svg';
import {
  FormSellMoreDetails,
  BlocksWrapper,
  SexPhotoblock,
  Sexblock,
  SexList,
  PhotoBlock,
  ImagePreview,
  DefaultImage,
  PhotoInput,
  PhotoLabel,
  UploadIcon,
  LocationPriceBlock,
  DetailWrapper,
  DetailInput,
  CommentsInput,
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

  comments: Yup.string().max(120, 'max 120 symbols'),
});

const stepThreeValidationSchemaSell = Yup.object().shape({
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
    <BackgroundCard noticetype={data.noticeType}>
      <Title>Add pet</Title>
      <StepsBlock step={3} />
      <Formik
        validationSchema={
          data.noticeType !== 'sell'
            ? stepThreeValidationSchema
            : stepThreeValidationSchemaSell
        }
        initialValues={data}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormSellMoreDetails>
            <BlocksWrapper>
              <SexPhotoblock>
                <Sexblock role="group" aria-labelledby="gender-radio-group">
                  The Sex
                  <SexList>
                    <GenderFieldRadio
                      value="female"
                      text="Female"
                      onChange={() => setFieldValue('sex', 'female')}
                      checked={values.sex === 'female'}
                      stroke="#F43F5E"
                      fill=""
                      iconName="icon-female"
                      iconSize=""
                    />
                    <GenderFieldRadio
                      value="male"
                      text="Male"
                      onChange={() => setFieldValue('sex', 'male')}
                      checked={values.sex === 'male'}
                      stroke="#54ADFF"
                      fill=""
                      iconName="icon-male"
                      iconSize=""
                    />
                  </SexList>
                  <ErrorComponent name="sex" />
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
              </SexPhotoblock>

              <LocationPriceBlock>
                <DetailWrapper>
                  <label htmlFor="location"> Location</label>
                  <DetailInput
                    id="location"
                    name="location"
                    placeholder="Kyiv"
                  ></DetailInput>
                  <ErrorComponent name="location" />
                </DetailWrapper>

                {values.noticeType === 'sell' && (
                  <DetailWrapper>
                    <label htmlFor="price"> Price</label>
                    <DetailInput
                      type="number"
                      id="price"
                      name="price"
                      placeholder="100"
                    ></DetailInput>
                    <ErrorComponent name="price" />
                  </DetailWrapper>
                )}

                <DetailWrapper>
                  <label htmlFor="comments"> Comments</label>
                  <CommentsInput
                    id="comments"
                    name="comments"
                    placeholder="Enter your comments"
                    component="textarea"
                    rows="4"
                    noticeType={values.noticeType}
                  ></CommentsInput>
                  <ErrorComponent name="comments" />
                </DetailWrapper>
              </LocationPriceBlock>
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
          </FormSellMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default SellMoreDetailsForm;
