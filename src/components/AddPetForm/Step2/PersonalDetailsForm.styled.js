import styled from 'styled-components';
import { Form as FormikForm, Field} from 'formik';

export const temporaryBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #111;
  border-radius: 20px;
`;

export const FormPersonalDetails = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const DetailInput = styled(Field)`
  display: flex;
  width: 394px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;

  border-radius: 40px;
  border: 1px solid #54adff;
`;

export const DetailLabel = styled.label`
  color: #111;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.5px;
`;
