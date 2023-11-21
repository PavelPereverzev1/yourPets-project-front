import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  FormSellMoreDetails,
  SexPhotoblock,
  Sexblock,
  SexList,
  SexBtn,
  IconSex,
  PhotoBlock,
  ImagePreview,
  PhotoInput,
  PhotoLabel,
  UploadIcon,
  LocationPriceBlock,
  DetailWrapper,
  DetailLabel,
  DetailInput,
  CommentsLabel,
  CommentsInput,
} from './SellMoreDetailsForm.styled';

const SellMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <FormSellMoreDetails onSubmit={handleSubmit}>
        <SexPhotoblock className="sexPhotoblock">
          <Sexblock className="sexblock">
            <h3>The Sex</h3>
            <SexList>
              <SexBtn
                type="button"
                name="sex"
                value="female"
                onClick={handleChange}
              >
                <IconSex>
                  <use href={`${sprite}#icon-female`} />
                </IconSex>
                Female
              </SexBtn>
              <SexBtn
                type="button"
                name="sex"
                value="male"
                onClick={handleChange}
              >
                <IconSex>
                  <use href={`${sprite}#icon-male`} />
                </IconSex>
                Male
              </SexBtn>
            </SexList>
          </Sexblock>
          <PhotoBlock>
            <PhotoLabel htmlFor="upload">Load the pet's image</PhotoLabel>

            <ImagePreview id="default-svg-preview">
              <PhotoInput
                type="file"
                accept=".JPG, .PNG"
                id="upload"
                // onChange={handleFileUpload}
              />
              <UploadIcon>
                <use href={`${sprite}#icon-plus`} />
              </UploadIcon>
            </ImagePreview>
          </PhotoBlock>
        </SexPhotoblock>
        <LocationPriceBlock className="locationPriceBlock">
          <DetailWrapper>
            <DetailLabel htmlFor="location">Location</DetailLabel>
            <DetailInput
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Kyiv"
            />
          </DetailWrapper>
          {formData.category !== 'in good hands' && (
            <DetailWrapper>
              <DetailLabel htmlFor="price">Price</DetailLabel>
              <DetailInput
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="000 USD"
              />
            </DetailWrapper>
          )}
          <DetailWrapper>
            <CommentsLabel htmlFor="comments">Comments</CommentsLabel>
            <CommentsInput
              type="text"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter your comment"
            />
          </DetailWrapper>
        </LocationPriceBlock>
      </FormSellMoreDetails>
    </>
  );
};

export default SellMoreDetailsForm;
