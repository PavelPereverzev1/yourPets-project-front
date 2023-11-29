import styled, { keyframes } from 'styled-components';

const animation = keyframes`
 0% { background-color: var(--blueLight); }
 50% { background-color: #f0f0f0; }
 100% { background-color: var(--blueLight); }
`;

export const SkeletonList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px 0 40px 0;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const SkeletonItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 456px;
  background-color: var(--white);
  border-radius: 0 0 40px 40px;
  box-shadow: var(--boxShadowDefault);

  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const SkeletonImageBlock = styled.div`
  width: 100%;
  height: 288px;
  animation: ${animation} 1s ease-in-out infinite;
`;

export const SkeletonButton = styled.div`
  height: 40px;
  width: 248px;
  margin: auto;
  margin-bottom: 24px;
  border-radius: 40px;
  animation: ${animation} 1s ease-in-out infinite;
`;
