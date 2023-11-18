import React from 'react';
import {
  FormSellMoreDetails,
  SexPhotoblock,
  LocationPriceBlock,
  DetailWrapper,
  CommentsLabel,
  CommentsInput,
} from './SellMoreDetailsForm.styled';

const SellMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <FormSellMoreDetails onSubmit={handleSubmit}>
        <SexPhotoblock className="sexPhotoblock">
          <div className="sex"></div>
          <div className="photo"></div>
        </SexPhotoblock>
        <LocationPriceBlock className="locationPriceBlock">
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Kyiv"
            />
          </div>
          {formData.category !== 'in good hands' && (
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="000 USD"
              />
            </div>
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
