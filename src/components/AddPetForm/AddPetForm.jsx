import React, { useState } from 'react';
import sprite from '../../images/icons/sprite.svg';
import { Link } from 'react-router-dom';

import axios from 'axios';

import {
  Wrapper,
  ButtonsBlock,
  Title,
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from './AddPetForm.syled';
import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

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
  };

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
          <ButtonWhite>
            <BtnIcon>
              <use href={`${sprite}#icon-arrow-left`} />
            </BtnIcon>
            <Link to="/"></Link>
            Cancel
          </ButtonWhite>
        )}
        {currentStep > 1 && (
          <ButtonWhite onClick={backStep}>
            <BtnIcon>
              <use href={`${sprite}#icon-arrow-left`} />
            </BtnIcon>
            Back
          </ButtonWhite>
        )}
        {currentStep < totalSteps && (
          <ButtonBlue onClick={nextStep}>
            Next
            <BtnIcon>
              <use href={`${sprite}#icon-pawprint-1`} />
            </BtnIcon>
          </ButtonBlue>
        )}
        {currentStep === 3 && (
          <ButtonBlue onClick={handleSubmit}>
            <Link to="/"></Link>
            Done
            <BtnIcon>
              <use href={`${sprite}#icon-pawprint-1`} />
            </BtnIcon>
          </ButtonBlue>
        )}
      </ButtonsBlock>
    </Wrapper>
  );
}

export default AddPetForm;
