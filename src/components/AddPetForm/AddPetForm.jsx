import React, { createContext, useState } from 'react';
import BackgroundImg from '../BackgroundImg/BackgroundImg';

import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

// import axios from 'axios';

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
    isError: 'false',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };
  const steps = [
    <ChooseOptionForm next={handleNextStep} data={formData} />,
    <PersonalDetailsForm
      next={handleNextStep}
      prev={handleBackStep}
      data={formData}
    />,
    <MoreDetailsForm
      next={handleNextStep}
      prev={handleBackStep}
      data={formData}
    />,
  ];

  console.log('data:', formData);
  // const handleSubmit = async e => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post(
  //         'http://localhost:3001/form',
  //         formData
  //       );
  //       if (response.data.success) {
  //         alert('Data sent successfully');
  //       }
  //     } catch (error) {
  //       console.error('Error sending data', error);
  //     }

  //     console.log('Спрацював сабміт:', formData);
  //     setFormData(initialFormData);
  // };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log(formData);
  // };

  // const nextStep = () => {
  //   setCurrentStep(currentStep + 1);
  //   console.log(formData);
  // };

  // const backStep = () => {
  //   setCurrentStep(currentStep - 1);
  //   console.log(formData);
  // };

  // const formProps = {
  //   formData,
  //   handleChange,
  //   currentStep,
  //   totalSteps,
  //   nextStep,
  //   backStep,
  //   handleSubmit,
  // };

  return (
    <BackgroundImg>
      {steps[currentStep]}
      {/* <FormContext.Provider value={formProps}>
        {currentStep === 1 && <ChooseOptionForm />}
        {currentStep === 2 && <PersonalDetailsForm />}
        {currentStep === 3 && <MoreDetailsForm />}
      </FormContext.Provider> */}
    </BackgroundImg>
  );
}

export default AddPetForm;
