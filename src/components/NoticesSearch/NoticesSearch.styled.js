import styled from 'styled-components';

export const Form = styled.form`
  position: relative;

  display: inline-block;

  @media screen and (min-width: 768px){
   display: flex;
   justify-content: center;
   align-items: center;
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

  @media screen and (min-width: 768px) {
    width: 608px;
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 20px;

    &::placeholder {
      font-size: 20px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

export const ButtonSearch = styled.button`
  background-color: inherit;
  border: none;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: ${({ hasQuery }) => (hasQuery ? '225px' : '244px')};
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    left: ${({ hasQuery }) => (hasQuery ? '240px' : '260px')};
  }
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

  position: absolute;
  top: 50%;
  left: 250px;
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    left: 270px;
  }
`;

export const DelateIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #ffc107;
`;
