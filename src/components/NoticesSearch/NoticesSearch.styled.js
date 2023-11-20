import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
`;

export const Queryform = styled.input`
  width: 280px;
  height: 44px;
  border-radius: 24px;
  border: none;
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 3px 8px 14px 0 #88c6fd30;
  outline: none;
  padding-left: 20px;
  padding-right: 10px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: #888888;

  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0 #74b1e8;
  }

  &::placeholder {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #888888;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 244px;
  display: flex;
`;

export const ButtonSearch = styled.button`
  background-color: inherit;
  border: none;
  width: 24px;
  height: 24px;
`;

export const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const ButtonCancel = styled.button`
  background-color: inherit;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const DelateIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #ffc107;
`;
