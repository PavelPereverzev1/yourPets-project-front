import styled from 'styled-components';

export const FormSellMoreDetails = styled.form`
  display: flex;
  gap: 24px;
`;

export const SexPhotoblock = styled.div`
  display: flex;
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
export const SexItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const IconSex = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  background-color: #111;
`;

export const NameSex = styled.p`
  display: inline-block;

  color: #888;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.64px;
`;

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
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  background-color: var(--blueLight);
`;
export const PhotoInput = styled.input`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;
export const UploadIcon = styled.svg`
  width: 48px;
  height: 48px;
  stroke-width: 2px;
  fill: #111;
`;

export const LocationPriceBlock = styled.div`
  padding: 12px 16px;
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
  align-items: center;
  gap: 10px;

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
