import React from 'react';
import {
  StepBlock,
  StepLine,
  StepName,
  StepsBlockWrapper,
} from './StepsBlock.styled';

const StepsBlock = () => {
  return (
    <StepsBlockWrapper>
      <StepBlock>
        <StepName>Choose option</StepName>
        <StepLine />
      </StepBlock>
      <StepBlock>
        <StepName>Persons details</StepName>
        <StepLine />
      </StepBlock>
      <StepBlock>
        <StepName>More info</StepName>
        <StepLine />
      </StepBlock>
    </StepsBlockWrapper>
  );
};

export default StepsBlock;
