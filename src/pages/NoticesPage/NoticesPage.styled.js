import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
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

export const AddBtnContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-right: 10vw;
  pointer-events: none;
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--white);
`;
