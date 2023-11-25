import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Title = styled.h1`
  color: var(--black);
  font-family: Manrope;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  margin-left: 16px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FormChooseOption = styled(FormikForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RadioWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const RadioButton = styled(Field)`
  appearance: none;
  cursor: pointer;
  display: none;
`;

export const Label = styled.label`
  display: block;

  height: 35px;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: var(--blueLight);

  color: var(--blueLink);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  cursor: pointer;

  &:hover {
    color: var(--white);
    background-color: var(--blueLink);
  }

  ${RadioButton}:checked + & {
    color: var(--white);
    background-color: var(--blueLink);
  }
`;
