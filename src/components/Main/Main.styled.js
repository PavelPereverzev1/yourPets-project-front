import styled from 'styled-components';

export const MainContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
  }
`;

export const MainTitle = styled.h1`
  margin: 50px auto 20px;
  width: 280px;
  font-size: 32px;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin: 80px auto 27px;
    width: 588px;
    font-size: 68px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin: 188px 0 248px;
    width: 700px;
    font-size: 68px;
    line-height: 130%;
    font-weight: 800;
  }
`;

export const MainPetsPicture = styled.img`
  display: block;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  max-width: 140%;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 130%;
    transform: translate(-50%);
  }

  @media screen and (min-width: 1280px) {
    transform: translate(-60%);
  }
`;
