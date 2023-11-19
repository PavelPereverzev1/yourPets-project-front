import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  AddMoreDetailsWrapper,
  DetailWrapper,
  PhotoBlock,
  PhotoLabel,
  ImagePreview,
  UploadIcon,
  PhotoInput,
  CommentsInput,
  CommentsLabel,
} from './AddMoreDetails.styled';
// import iconPlus from '../../../images/icons/sprite.svg';

const AddMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <AddMoreDetailsWrapper onSubmit={handleSubmit}>
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
      </AddMoreDetailsWrapper>
    </div>
  );
};

export default AddMoreDetailsForm;
