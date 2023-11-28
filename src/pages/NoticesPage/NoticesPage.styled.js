import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const NoticeTitle = styled.h1`
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
