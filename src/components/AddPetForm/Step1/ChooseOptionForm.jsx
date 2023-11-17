import React from 'react';

const ChooseOptionForm = (formData, handleChange, handleSubmit) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <button onClick={backStep}>Your Pet</button>
          <label htmlFor="fname">Ім'я</label>
          <input
            type="text"
            name="yourPet"
            value={formData.yourPet}
            onChange={handleChange}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default ChooseOptionForm;
