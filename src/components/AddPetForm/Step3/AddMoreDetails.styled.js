import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const FormAddMoreDetails = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;

  color: var(--black);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }
`;
// PhotoBlock
export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;
export const PhotoLabel = styled.label`
  display: inline-block;
  width: 81px;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 114px;
  }
`;
export const ImagePreview = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
    margin-right: auto;
  }
`;
export const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blueLight);
`;
export const UploadIcon = styled.svg`
  width: 48px;
  height: 48px;
`;
export const PhotoInput = styled.input`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

// CommentsBlock
export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;
export const CommentsInput = styled(Field)`
  display: flex;
  text-align: start;
  justify-content: center;
  /* height: 92px; */
  width: 100%;
  padding: 8px 16px;
  border: 1px solid var(--blueLink);

  flex-shrink: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  overflow-y: auto;

  border-radius: 20px;

  &::placeholder {
    color: var(--gray);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.56px;
  }

  @media screen and (min-width: 768px) {
    /* height: 79px; */
    padding: 12px 16px;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.64px;
    }
  }
`;
