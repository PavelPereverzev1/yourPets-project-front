import { styled } from 'styled-components';

export const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  top: 60px;
  padding-top: 30px;
  background-color: #fef9f9;
  bottom: 0;
  gap: 40px;
  z-index: 15;

  @media screen and (min-width: 768px) {
    top: 70px;
    padding-top: 60px;
  }
`;
