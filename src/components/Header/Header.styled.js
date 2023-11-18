import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 20px;
  }
`;
