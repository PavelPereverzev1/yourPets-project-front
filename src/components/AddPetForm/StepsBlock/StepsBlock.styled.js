import styled from 'styled-components';

export const StepsBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 392px;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StepBlock = styled.div`
  width: 100%;
`;

export const StepName = styled.p`
  color: ${props => props.color || 'var(--gray)'};
  text-align: start;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 27px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const StepLine = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.color || 'var(--blueLight)'};
`;
