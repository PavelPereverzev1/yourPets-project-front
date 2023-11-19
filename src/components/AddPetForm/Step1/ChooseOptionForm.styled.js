import styled from 'styled-components';

export const RadioWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

export const RadioButton = styled.input`
  position: absolute;
`;

export const Label = styled.label`
  display: block;

  height: 35px;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: #cce4fb;

  color: #54adff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #54adff;
  }

  ${RadioButton}:checked + & {
    color: #ffffff;
    background-color: #54adff;
  }
`;
