import React, { useContext } from 'react';
import { FormContext } from '../AddPetForm';
import AddMoreDetailsForm from './AddMoreDetailsForm';
import SellMoreDetailsForm from './SellMoreDetailsForm';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import ButtonsBlock from '../ButtonsBlock';

const MoreDetailsForm = () => {
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
    <>
      {formData.category === 'your pet' ? (
        <BackgroundCard>
          <TitleComponent name="Add pet" />
          <StepsBlock step={currentStep} />
          <AddMoreDetailsForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ButtonsBlock
            currentStep={currentStep}
            totalSteps={totalSteps}
            nextStep={nextStep}
            backStep={backStep}
            handleSubmit={handleSubmit}
          />
        </BackgroundCard>
      ) : (
        <BackgroundCard width="882px">
          <TitleComponent name="Add pet" />
          <StepsBlock step={currentStep} />
          <SellMoreDetailsForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ButtonsBlock
            currentStep={currentStep}
            totalSteps={totalSteps}
            nextStep={nextStep}
            backStep={backStep}
            handleSubmit={handleSubmit}
          />
        </BackgroundCard>
      )}
    </>
  );
};

export default MoreDetailsForm;
