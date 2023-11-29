import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    height: 44px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    gap: 22px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
  }
`;
