import React, { useContext } from 'react';
import { FormContext } from '../AddPetForm';
import {
  Form,
  RadioButton,
  RadioWrapper,
  Label,
} from './ChooseOptionForm.styled';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import ButtonsBlock from '../ButtonsBlock';

const ChooseOptionForm = () => {
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
      <BackgroundCard>
        <TitleComponent name="Add pet" />
        <StepsBlock step={currentStep} />

        <Form onSubmit={handleSubmit}>
          <RadioWrapper role="goup" aria-labelledby="category-radio-group">
            <Label htmlFor="yourPet">
              <RadioButton
                type="radio"
                id="yourPet"
                name="category"
                value="your pet"
                onChange={handleChange}
                checked={formData.category === 'your pet'}
              />
              your pet
            </Label>

            <Label htmlFor="sell">
              <RadioButton
                type="radio"
                id="sell"
                name="category"
                value="sell"
                onChange={handleChange}
                checked={formData.category === 'sell'}
              />
              sell
            </Label>

            <Label htmlFor="lostFound">
              <RadioButton
                type="radio"
                id="lostFound"
                name="category"
                value="lost/found"
                onChange={handleChange}
                checked={formData.category === 'lost/found'}
              />
              lost/found
            </Label>

            <Label htmlFor="inGoodHands">
              <RadioButton
                type="radio"
                id="inGoodHands"
                name="category"
                value="in good hands"
                onChange={handleChange}
                checked={formData.category === 'in good hands'}
              />
              in good hands
            </Label>
          </RadioWrapper>
        </Form>
        <ButtonsBlock
          currentStep={currentStep}
          totalSteps={totalSteps}
          nextStep={nextStep}
          backStep={backStep}
          handleSubmit={handleSubmit}
        />
      </BackgroundCard>
    </>
  );
};

export default ChooseOptionForm;
