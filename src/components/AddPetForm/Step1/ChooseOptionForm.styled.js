import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const FormChooseOption = styled(FormikForm)`
  width: 100%;
`;

export const RadioWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const RadioButton = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;

  opacity: 1;
`;

export const Label = styled.label`
  position: relative;
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
