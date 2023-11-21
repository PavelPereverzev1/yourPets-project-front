import styled from 'styled-components';

export const NoticesList = styled.ul`
  margin-top: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 24px;
  }

@media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  column-gap: 32px;
  row-gap: 24px;
  max-width: 1280px;
}
`;

export const NotFoundPetsMessage = styled.p`
  color: #111111;
  font-weight: 700;
  font-size: 24px;
  margin: 40px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;