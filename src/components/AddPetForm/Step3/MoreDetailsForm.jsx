import React from 'react';
// import AddMoreDetailsForm from './AddMoreDetailsForm';
import SellMoreDetailsForm from './SellMoreDetailsForm';

const MoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <SellMoreDetailsForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* {formData.category === 'your pet' ? (
        <AddMoreDetailsForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SellMoreDetailsForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )} */}
    </>
  );
};

export default MoreDetailsForm;
