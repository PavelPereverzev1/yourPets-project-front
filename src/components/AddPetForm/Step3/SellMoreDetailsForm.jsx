import React from 'react';
import {
  FormSellMoreDetails,
  SexPhotoblock,
  Sexblock,
  SexList,
  SexItem,
  IconSex,
  NameSex,
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
    <div>
      <FormSellMoreDetails onSubmit={handleSubmit}>
        <SexPhotoblock className="sexPhotoblock">
          <Sexblock className="sexblock">
            <h3>The Sex</h3>
            <SexList>
              <SexItem>
                <IconSex></IconSex>
                <NameSex>Female</NameSex>
              </SexItem>
              <SexItem>
                <IconSex></IconSex>
                <NameSex>Male</NameSex>
              </SexItem>
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
                <use xlinkHref="../../../images/icons/sprite.svg#icon-plus"></use>
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
    </div>
  );
};

export default SellMoreDetailsForm;
