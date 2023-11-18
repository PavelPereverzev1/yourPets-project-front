import styled from 'styled-components';

export const AddMoreDetailsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;
export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;
export const CommentsInput = styled.textarea`
  display: block;
  text-align: start;
  overflow-wrap: break-word;
  width: 394px;
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
