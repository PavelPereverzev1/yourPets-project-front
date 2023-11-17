import React from 'react';
import {
  DetailWrapper,
  DetailInput,
  DetailLabel,
} from './AddMoreDetails.styled';

const AddMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <DetailWrapper>
          <DetailLabel htmlFor="upload">Load the pet's image</DetailLabel>
          <DetailInput
            type="file"
            accept=".JPG, .PNG"
            id="upload"
            hidden
            // onChange={handleFileUpload}
          />
        </DetailWrapper>

        <DetailWrapper>
          <DetailLabel htmlFor="comments">Comments</DetailLabel>
          <DetailInput
            type="text"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter your comment"
          />
        </DetailWrapper>
      </form>
    </div>
  );
};

export default AddMoreDetailsForm;
