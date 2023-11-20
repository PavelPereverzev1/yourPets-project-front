import React, { createContext, useContext, useState } from 'react';
// import sprite from '../../images/icons/sprite.svg';
// import { Link } from 'react-router-dom';

import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

import axios from 'axios';

// import {
//   ButtonsBlock,
//   ButtonBlue,
//   ButtonWhite,
//   BtnIcon,
// } from './AddPetForm.syled';

export const FormContext = createContext();

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
  const totalSteps = 3; // need to be update with actual number of forms

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep(currentStep - 1);
    console.log(currentStep);
  };
  const formProps = {
    formData,
    handleChange,
    currentStep,
    totalSteps,
    nextStep,
    backStep,
    handleSubmit,
  };

  return (
    <FormContext.Provider value={formProps}>
      {currentStep === 1 && <ChooseOptionForm />}
      {currentStep === 2 && <PersonalDetailsForm />}

      {currentStep === 3 && <MoreDetailsForm />}
    </FormContext.Provider>
  );
}

export default AddPetForm;
