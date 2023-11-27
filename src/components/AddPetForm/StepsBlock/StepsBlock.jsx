import React from 'react';
import {
  StepBlock,
  StepLine,
  StepName,
  StepsBlockWrapper,
} from './StepsBlock.styled';

const StepsBlock = ({ step }) => {
  let firstStepColor = '';
  let secondStepColor = '';
  let thirdStepColor = '';

  switch (step) {
    case 1:
      firstStepColor = '#54ADFF';
      break;
    case 2:
      firstStepColor = '#00C3AD';
      secondStepColor = '#54ADFF';
      break;
    case 3:
      firstStepColor = '#00C3AD';
      secondStepColor = '#00C3AD';
      thirdStepColor = '#54ADFF';
      break;
    default:
      break;
  }

  return (
    <StepsBlockWrapper>
      <StepBlock>
        <StepName color={firstStepColor}>Choose option</StepName>
        <StepLine color={firstStepColor} />
      </StepBlock>
      <StepBlock>
        <StepName color={secondStepColor}>Persons details</StepName>
        <StepLine color={secondStepColor} />
      </StepBlock>
      <StepBlock>
        <StepName color={thirdStepColor}>More info</StepName>
        <StepLine color={thirdStepColor} />
      </StepBlock>
    </StepsBlockWrapper>
  );
};

export default StepsBlock;
