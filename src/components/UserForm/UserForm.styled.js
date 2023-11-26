import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 355px;
    align-items: end;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 22px 0 21px 0;

  @media screen and (min-width: 768px) {
    gap: 10px;
    padding: 0 0 16px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 0 10px 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 190px;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${props => (props.$isValid ? 'var(--blueLink)' : 'red')};
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  @media screen and (min-width: 768px) {
    width: 255px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }
`;
