import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

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
  margin-bottom: 68px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-bottom: 112px;
  }
`;
