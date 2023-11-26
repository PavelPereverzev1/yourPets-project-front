import React, { useState } from 'react';

import BackgroundImg from '../BackgroundImg/BackgroundImg';

import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

import axios from 'axios';
axios.defaults.baseURL = 'https://yourpets-project-backend.onrender.com';

function AddPetForm() {
  const initialFormData = {
    noticeType: '',
    name: '',
    birthday: '',
    petType: '',
    title: '',
    photo: null,
    comments: '',
    location: '',
    price: '',
    sex: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = async formData => {
    console.log('formData:', formData);
    let url;
    try {
      if (formData.noticeType === 'your pet') {
        url = '/pets';
      } else {
        url = '/notices';
      }

      const requestData = new FormData();

      if (formData.noticeType === 'your pet') {
        for (const key in formData) {
          if (
            key !== 'noticeType' &&
            key !== 'title' &&
            key !== 'location' &&
            key !== 'price' &&
            key !== 'sex'
          ) {
            requestData.append(key, formData[key]);
          }
        }
      } else {
        for (const key in formData) {
          requestData.append(key, formData[key]);
        }
      }

      const response = await axios.post(url, requestData);
      console.log('Дані, що відправляю:', requestData);
      console.log('Response from server:', response.data);

      // if (formData.noticeType === 'your pet') {
      // } else {
      // }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleNextStep = (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));

    if (final) {
      console.log('data send in request', newData);
      makeRequest(newData);
      setFormData(initialFormData);
      setCurrentStep(0);
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

  return <BackgroundImg>{steps[currentStep]}</BackgroundImg>;
}

export default AddPetForm;
