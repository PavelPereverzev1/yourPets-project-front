import React, { useContext } from 'react';
import { FormContext } from '../AddPetForm';
import {
  FormPersonalDetails,
  DetailWrapper,
  DetailInput,
  DetailLabel,
} from './PersonalDetailsForm.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import ButtonsBlock from '../ButtonsBlock';

const PersonalDetailsForm = () => {
  const formProps = useContext(FormContext);
  const {
    formData,
    handleChange,
    currentStep,
    totalSteps,
    nextStep,
    backStep,
    handleSubmit,
  } = formProps;

  return (
    <BackgroundCard>
      <TitleComponent name="Add pet" />
      <StepsBlock step={currentStep} />
      <FormPersonalDetails onSubmit={handleSubmit}>
        {formData.category !== 'your pet' && (
          <DetailWrapper>
            <DetailLabel htmlFor="titleOfAdd">Title of add</DetailLabel>
            <DetailInput
              type="text"
              name="titleOfAdd"
              value={formData.titleOfAdd}
              onChange={handleChange}
              placeholder="Title of add"
            />
          </DetailWrapper>
        )}
        <DetailWrapper>
          <DetailLabel htmlFor="petsName">Pet's name</DetailLabel>
          <DetailInput
            type="text"
            name="petsName"
            value={formData.petsName}
            onChange={handleChange}
            placeholder="Name of pet"
          />
        </DetailWrapper>
        <DetailWrapper>
          <DetailLabel htmlFor="petsDateOfBirth">Date of birth</DetailLabel>
          <DetailInput
            type="text"
            name="petsDateOfBirth"
            value={formData.petsDateOfBirth}
            onChange={handleChange}
            placeholder="00.00.0000"
          />
        </DetailWrapper>
        <DetailWrapper>
          <DetailLabel htmlFor="petsType">Type</DetailLabel>
          <DetailInput
            type="text"
            name="petsType"
            value={formData.petsType}
            onChange={handleChange}
            placeholder="Type of pets"
          />
        </DetailWrapper>
      </FormPersonalDetails>
      <ButtonsBlock
        currentStep={currentStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        backStep={backStep}
        handleSubmit={handleSubmit}
      />
    </BackgroundCard>
  );
};

export default PersonalDetailsForm;
