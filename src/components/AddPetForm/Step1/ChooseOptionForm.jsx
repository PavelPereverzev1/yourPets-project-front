import React from 'react';
import { RadioButton, RadioWrapper, Label } from './ChooseOptionForm.styled';

const ChooseOptionForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default ChooseOptionForm;
