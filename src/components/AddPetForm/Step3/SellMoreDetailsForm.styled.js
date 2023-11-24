import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const FormSellMoreDetails = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const BlocksWrapper = styled.div`
  display: flex;
`;

export const SexPhotoblock = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 48px;
`;
export const Sexblock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SexList = styled.div`
  display: flex;
  flex-direction: row;
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

export const SexBtn = styled(Field)`
  display: flex;
  flex-direction: row;
  gap: 12px;

  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
`;
export const IconSex = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--blueLink);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

//Photoblock
export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const PhotoLabel = styled.label`
  display: inline-block;
  width: 114px;
  hight: 100%;

  color: #111;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;
export const ImagePreview = styled.div`
  position: relative;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
`;
export const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blueLight);
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
export const UploadIcon = styled.svg`
  width: 48px;
  height: 48px;
  stroke-width: 2px;
  fill: #111;
`;

//LocationPriceblock
export const LocationPriceBlock = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const DetailLabel = styled.label`
  color: #111;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.5px;
`;

export const DetailInput = styled.input`
  display: flex;
  padding: 12px 16px;

  border-radius: 40px;
  border: 1px solid #54adff;
`;

export const CommentsInput = styled.textarea`
  display: block;
  text-align: start;
  overflow-wrap: break-word;
  min-height: 79px;
  padding: 12px 16px;

  border-radius: 20px;
  border: 1px solid var(--blueLink);
`;
export const CommentsLabel = styled.label`
  color: #111;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.5px;
`;
