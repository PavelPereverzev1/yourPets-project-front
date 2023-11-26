import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const FormSellMoreDetails = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: var(--black);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SexPhotoblock = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Sexblock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const SexList = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioButton = styled(Field)`
  appearance: none;
  cursor: pointer;
  // display: none;
`;

export const Label = styled.label`
  display: inline-flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 40px;
  background-color: transparent;

  color: var(--gray);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;

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
  stroke: var(--gray);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

//Photoblock
export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const PhotoLabel = styled.label`
  display: inline-block;
  width: 81px;
  hight: 100%;

  &:before {
    content: 'Load the pet’s image:';
  }

  @media screen and (max-width: 767px) {
    &:before {
      content: 'Ad photo:';
    }
  }
`;
export const ImagePreview = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
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
  gap: 20px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const DetailLabel = styled.label``;

const InputStyles = `
display: flex;
text-align: start;
justify-content: center;
width: 264px;
padding: 8px 16px;
border: 1px solid var(--blueLink);
`;

export const DetailInput = styled(Field)`
  ${InputStyles}
  height: 40px;
  border-radius: 40px;
`;

export const CommentsInput = styled(Field)`
  ${InputStyles}

  flex-shrink: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;

  border-radius: 20px;
`;
export const CommentsLabel = styled.label``;
