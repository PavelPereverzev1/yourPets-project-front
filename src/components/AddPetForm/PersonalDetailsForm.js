import React from 'react';

const PersonalDetailsForm = (formData, handleChange, handleSubmit) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petsName">Pet's name</label>
          <input
            type="text"
            name="petsName"
            value={formData.petsName}
            onChange={handleChange}
            placeholder="Введіть текст"
          />
        </div>
        <div>
          <label htmlFor="petsDateOfBirth">Date of birth</label>
          <input
            type="text"
            name="petsDateOfBirth"
            value={formData.petsDateOfBirth}
            onChange={handleChange}
            placeholder="Введіть текст"
          />
        </div>
        <div>
          <label htmlFor="petsType">Type</label>
          <input
            type="text"
            name="petsType"
            value={formData.petsType}
            onChange={handleChange}
            placeholder="Введіть текст"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
