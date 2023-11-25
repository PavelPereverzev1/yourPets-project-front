import { styled } from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--white);
`;
