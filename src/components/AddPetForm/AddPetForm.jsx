import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Wrapper, ButtonsBlock } from './AddPetForm.syled';
import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';

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
    <Wrapper>
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
      <ButtonsBlock>
        {currentStep === 1 && (
          <ButtonComponent name="Cancel" width="100px">
            <Link to="/">Cancel</Link>
          </ButtonComponent>
        )}
        {currentStep > 1 && (
          <ButtonComponent name="Back" width="100px" onClick={backStep} />
        )}
        {currentStep < totalSteps && (
          <ButtonComponent name="Next" width="100px" onClick={nextStep} />
        )}
        {currentStep === 3 && (
          <ButtonComponent name="Done" width="100px" onClick={handleSubmit} />
        )}
      </ButtonsBlock>
    </Wrapper>
  );
}

export default AddPetForm;
