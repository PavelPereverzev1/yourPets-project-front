import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import ChooseOptionForm from './ChooseOptionForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import MoreDetailsForm from './MoreDetailsForm';

function AddPetForm() {
  const [formData, setFormData] = useState({
    category: '',
    petsName: '',
    petsDateOfBirth: '',
    type: '',
    titleOfAdd: '',
    petsImage: '',
    comments: '',
    location: '',
    price: '',
    sex: 'null',
  });

  const [currentStep, setCurrnetStep] = useState(1);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/form', formData);
      if (response.data.success) {
        alert('Data sent successfully');
      }
    } catch (error) {
      console.error('Error sending data', error);
    }
  };
  const nextStep = () => {
    setCurrnetStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrnetStep(currentStep - 1);
  };

  const totalSteps = 3; // need to be update with actual number of forms

  return (
    <div>
      {currentStep === 1 && (
        <ChooseOptionForm formData={formData} handleChange={handleChange} />
      )}
      {currentStep === 2 && (
        <PersonalDetailsForm formData={formData} handleChange={handleChange} />
      )}

      {currentStep === 3 && (
        <MoreDetailsForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Navigation buttons */}
      <div>
        {currentStep === 1 && (
          <button>
            <Link to="/">Cancel</Link>
          </button>
        )}
        {currentStep > 1 && <button onClick={backStep}>Back</button>}
        {currentStep < totalSteps && <button onClick={nextStep}>Next</button>}
        {currentStep === 3 && <button onClick={handleSubmit}>Done</button>}
      </div>
    </div>
  );
}

export default AddPetForm;
