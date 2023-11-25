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
`;
export const WrapperSponsors = styled.div`
  @media screen and (min-width: 768px) {
display: flex;
flex-wrap: wrap;
gap: 32px;
  }
`
export const WrapperCard = styled.div`
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  background-color: white;
  text-align: center;
  margin-bottom: 20px;
  /* align-items: center;
  justify-content: center; */
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
  color: #54adff;
`;
export const WrapperInfo = styled.div`
  margin-top: 16px;
  display: flex;
  text-align: start;
  gap: 12px;
`;
export const LogoCard = styled.img`
display: block;
  width: 100px;
  height: 68px;
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
`
export const InfoLink = styled(Link)`
  color: #111111;
  &:focus, :hover{
    color:#54ADFF;
  }
`;
export const BigText = styled.span`
  font-weight: 600;
  display: block;
`;