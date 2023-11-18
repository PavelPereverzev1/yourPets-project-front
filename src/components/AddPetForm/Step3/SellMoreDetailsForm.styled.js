import styled from 'styled-components';

export const FormSellMoreDetails = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 24px;
`;

export const SexPhotoblock = styled.div`
  width: 182px;
  padding: 12px 16px;
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

export const DetailInput = styled.input`
  display: flex;
  width: 394px;
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
