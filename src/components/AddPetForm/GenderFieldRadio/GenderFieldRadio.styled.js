import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${props => (props.checked ? '#54ADFF' : '#fff')};
  border-radius: 40px;
  cursor: pointer;
`;
export const Icon = styled.svg`
  stroke: ${props => (props.checked ? '#fff' : props.stroke)};
`;
export const Text = styled.span`
  color: ${props => (props.checked ? '#fff' : '#ccc')};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.64px;
`;

export const Input = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;
