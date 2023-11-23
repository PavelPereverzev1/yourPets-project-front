import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`;
