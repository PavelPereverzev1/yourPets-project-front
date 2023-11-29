import { styled } from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100vw;
  height: 100%;
  padding-top: 20px;
  padding-right: 10vw;
  pointer-events: none;
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
