import styled from 'styled-components';

export const StepsBlockWrapper = styled.div`
  width: 392px;
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StepBlock = styled.div`
  width: 100%;
`;

export const StepName = styled.p`
  color: ${props => props.color || '#888'};
  text-align: start;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 12px;
`;
export const StepLine = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.bg || '#cce4fb'};
`;
