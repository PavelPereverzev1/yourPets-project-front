import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImg from '../BackgroundImg/BackgroundImg';
import LoaderGif from '../../components/LoaderGif/LoaderGif';

import ChooseOptionForm from './Step1/ChooseOptionForm';
import PersonalDetailsForm from './Step2/PersonalDetailsForm';
import MoreDetailsForm from './Step3/MoreDetailsForm';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCategory } from 'redux/notices/noticesSlices';
axios.defaults.baseURL = 'https://yourpets-project-backend.onrender.com';

function AddPetForm() {
  const initialFormData = {
    noticeType: 'your-pet',
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const makeRequest = async formData => {
    const requestData = new FormData();

    try {
      if (formData.noticeType === 'your-pet') {
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

        await axios.post('/pets', requestData);
      }
      if (
        formData.noticeType === 'lost/found' ||
        formData.noticeType === 'in-good-hands'
      ) {
        for (const key in formData) {
          if (key !== 'price') {
            requestData.append(key, formData[key]);
          }
        }

        await axios.post('/notices', requestData);
      }
      if (formData.noticeType === 'sell') {
        for (const key in formData) {
          requestData.append(key, formData[key]);
        }

        await axios.post('/notices', requestData);
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleNextStep = async (newData, final = false) => {
    setFormData(prev => ({ ...prev, ...newData }));

    if (final) {
      setIsLoading(true);
      await makeRequest(newData);
      if (formData.noticeType !== 'your-pet') {
        dispatch(setCategory('own'));
        navigate('/notices/own');
      } else {
        navigate('/user');
      }

      setIsLoading(false);
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

  return isLoading ? (
    <LoaderGif />
  ) : (
    <BackgroundImg>{steps[currentStep]}</BackgroundImg>
  );
}

export default AddPetForm;
