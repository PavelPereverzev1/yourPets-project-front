import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
`;

export const MainTitleMobile = styled.h1`
  margin-top: 60px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;
  color: var(--black);

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    font-size: 68px;
    line-height: 1.47;
    text-align: left;
    width: 588px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MainTitleDesktop = styled.h2`
  font-size: 68px;
  font-style: normal;
  font-weight: 800;
  line-height: 1.3;

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const MainPetsPicture = styled.img`
  position: absolute;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    position: static;
  }
`;
