import React from 'react';
import { RadioButton, RadioWrapper, Label } from './ChooseOptionForm.styled';

const ChooseOptionForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <RadioWrapper>
          <Label htmlFor="yourPet">
            <RadioButton
              type="radio"
              name="category"
              value="yourPet"
              onChange={handleChange}
              checked={formData.category === 'yourPet'}
            />
            your pet
          </Label>

          <Label htmlFor="sell">
            <RadioButton
              type="radio"
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
              name="category"
              value="lostFound"
              onChange={handleChange}
              checked={formData.category === 'lostFound'}
            />
            lost/found
          </Label>

          <Label htmlFor="inGoodHands">
            <RadioButton
              type="radio"
              name="category"
              value="inGoodHands"
              onChange={handleChange}
              checked={formData.category === 'inGoodHands'}
            />
            in good hands
          </Label>
        </RadioWrapper>
      </form>
    </div>
  );
};

export default ChooseOptionForm;
