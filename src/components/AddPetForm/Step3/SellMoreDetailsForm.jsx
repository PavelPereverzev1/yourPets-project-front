import React from 'react';

const SellMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <div className="sexPhotoblock">
          <div className="sex"></div>
          <div className="photo"></div>
        </div>
        <div className="locationPriceBlock">
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
          <div>
            <label htmlFor="comments">Comments</label>
            <input
              type="text"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter your comment"
            />
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default SellMoreDetailsForm;
