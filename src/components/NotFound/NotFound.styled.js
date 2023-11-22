import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  gap: 60px;
  max-width: 822px;
  margin: auto;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    gap: 70px;
  }
  @media screen and (min-width: 1280px) {
    gap: 18px;
  }
`;
export const Title = styled.h1`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.78px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 62px;
  }
`;
export const TitleMob = styled.span`
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
