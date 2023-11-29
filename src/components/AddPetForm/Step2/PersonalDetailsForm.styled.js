import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const FormPersonalDetails = styled(FormikForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const DetailInput = styled(Field)`
  display: block;
  width: 264px;
  padding: 8px 16px;
  align-items: center;

  border-radius: 40px;
  border: 1px solid var(--blueLink);

  &:hover,
  &:focus {
    border: 1px solid var(--blueLink);
  }

  &::placeholder {
    color: var(--gray);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.56px;
  }

  @media screen and (min-width: 768px) {
    width: 394px;
    padding: 12px 16px;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.64px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const DetailLabel = styled.label`
  color: var(--black);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
