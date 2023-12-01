import styled from 'styled-components';

const errorColor = 'var(--red)';
const primaryColor = 'var(--blueLink)';

const generateBorderColor = ({ mistake }) =>
  mistake === 'true' ? errorColor : primaryColor;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(19 / 14);
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    gap: 8px;
    line-height: calc(26.5 / 20);
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(21 / 14);
  letter-spacing: 0.64px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border: 1px solid;
  border-color: ${generateBorderColor};
  padding: 8px 16px;
  max-height: 40px;

  @media screen and (min-width: 768px) {
    max-height: 48px;
    font-size: 16px;
    line-height: calc(24 / 16);
    padding: 12px 16px;
  }
`;
