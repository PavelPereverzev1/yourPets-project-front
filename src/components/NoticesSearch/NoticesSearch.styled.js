import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 280px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 608px;
  }
`;

export const Queryform = styled.input`
  display: flex;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: var(--gray);
  width: 100%;
  height: 44px;
  padding: 0 10px 0 20px;
  box-shadow: var(--boxShadowDefault);
  border-radius: 24px;
  border: none;
  outline: none;

  &::placeholder {
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.56px;
    color: var(--gray);
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 20px;
    font-size: 20px;
    letter-spacing: 0.8px;

    &::placeholder {
      font-size: 20px;
      letter-spacing: 0.8px;
    }
  }
`;

export const ButtonSearch = styled.button`
  background-color: inherit;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: right var(--transition);
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
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

export const DelateIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--yellow);
`;
