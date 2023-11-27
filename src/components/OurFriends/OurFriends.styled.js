import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 74px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 175px;
  }
`;
export const Title = styled.h1`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.78px;
  margin-bottom: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 65.57px;
  }
`;
export const WrapperSponsors = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
    justify-content: start;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (min-width: 1250px) {
    justify-content: center;
  }
`;
export const WrapperCard = styled.div`
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  background-color: var(--white);
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  transform: scale(1);
  transition: transform var(--transition);
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    width: 330px;
    margin-bottom: 0;
  }
`;
export const TitleCard = styled(Link)`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27.32px;
  color: var(--blueLink);
  &:focus,
  :hover {
    text-decoration: underline;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
  text-align: start;
  gap: 12px;
  @media screen and (min-width: 1250px) {
    gap: 20px;
  }
`;
export const LogoCard = styled.img`
  width: 100px;
  height: 68px;
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
  }
  @media screen and (min-width: 1250px) {
    width: 146px;
    height: 104px;
  }
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InfoItem = styled.li`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;
  line-height: 1rem;
  max-height: 3rem;
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TimeItem = styled.li`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;
`
export const InfoLink = styled(Link)`
  color: #111111;
  transition: color var(--transition);
  &:focus,
  :hover {
    color: var(--blueLink);
  }
`;
export const BigText = styled.span`
  font-weight: 600;
  display: block;
`;
