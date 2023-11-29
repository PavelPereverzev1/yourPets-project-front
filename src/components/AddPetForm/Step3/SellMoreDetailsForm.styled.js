import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Card = styled.div`
  position: relative;
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  background: #fff;
  margin: 0 auto;
  padding: 20px 8px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 882px;
  }
`;

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
  margin-bottom: 20px;

  color: var(--black);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 34px;

    font-size: 20px;
    line-height: 27px;
  }
`;
// SexPhotoblock
export const SexPhotoblock = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 40px;
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

  @media screen and (min-width: 768px) {
    gap: 4px;
  }
`;

export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
export const PhotoLabel = styled.label`
  display: inline-block;
  width: 81px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
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

  &:hover,
  &:focus {
    border: none;
  }
`;

// LocationPriceblock
export const LocationPriceBlock = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
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

const InputStyles = `
display: flex;
text-align: start;
justify-content: center;
width: 100%;
padding: 8px 16px;
border: 1px solid var(--blueLink);

  &:hover,
  &:focus {
    border: 1px solid var(--blueLink);
  }
`;

export const DetailInput = styled(Field)`
  ${InputStyles}
  height: 40px;
  border-radius: 40px;

  &::placeholder {
    color: var(--gray);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.56px;
  }

  @media screen and (min-width: 768px) {
    height: 48px;
    padding: 12px 16px;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.64px;
    }
  }
`;

export const CommentsInput = styled(Field)`
  ${InputStyles}
  height: 92px;
  flex-shrink: 0;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 79px;
  }
`;
