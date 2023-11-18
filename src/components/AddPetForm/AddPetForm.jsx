import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Wrapper, ButtonsBlock, Title } from './AddPetForm.syled';
import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import StepsBlock from './StepsBlock/StepsBlock';

function AddPetForm() {
  const initialFormData = {
    category: '',
    petsName: '',
    petsDateOfBirth: '',
    petsType: '',
    titleOfAdd: '',
    petsImage: '',
    comments: '',
    location: '',
    price: '',
    sex: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/form', formData);
      if (response.data.success) {
        alert('Data sent successfully');
      }
    } catch (error) {
      console.error('Error sending data', error);
    }

    console.log('Спрацював сабміт:', formData);
    setFormData(initialFormData);
    // setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };
  // console.log(currentStep);

  const backStep = () => {
    setCurrentStep(currentStep - 1);
    console.log(currentStep);
  };

  const totalSteps = 3; // need to be update with actual number of forms

  return (
    <Wrapper>
      <Title>Add pet </Title>
      <StepsBlock></StepsBlock>
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
            <Link to="/">Home</Link>
          </ButtonComponent>
        )}
        {currentStep > 1 && (
          <ButtonComponent name="Back" width="100px" onClick={backStep} />
        )}
        {currentStep < totalSteps && (
          <ButtonComponent name="Next" width="100px" onClick={nextStep} />
        )}
        {currentStep === 3 && (
          <ButtonComponent name="Done" width="100px" onClick={handleSubmit}>
            <Link to="/">Home</Link>
          </ButtonComponent>
        )}
      </ButtonsBlock>
    </Wrapper>
  );
}

export default AddPetForm;
