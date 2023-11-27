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
  line-height: 1.4;
  text-align: left;
  font-weight: 700;
  font-style: normal;

  @media screen and (min-width: 768px) {
    margin: 80px auto 27px;
    width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
  @media screen and (min-width: 1280px) {
    margin: 188px 0 248px;
    width: 700px;
    line-height: 1.3;
    font-size: 70px;
  }
`;

export const MainPetsPicture = styled.img`
  display: block;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  max-width: 150%;
  height: auto;

  @media screen and (min-width: 1280px) {
    right: 100px;
    top: 20px;
  }
`;
