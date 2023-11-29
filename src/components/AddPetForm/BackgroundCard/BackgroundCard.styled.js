import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  background: #fff;
  margin: 0 auto;
  padding: 20px 8px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
    width: ${props =>
      props.noticetype === 'sell' ||
      props.noticetype === 'lost-found' ||
      props.noticetype === 'in-good-hands'
        ? '704px'
        : '458px'};
  }

  @media screen and (min-width: 1280px) {
    width: ${props =>
      props.noticetype === 'sell' ||
      props.noticetype === 'lost-found' ||
      props.noticetype === 'in-good-hands'
        ? '882px'
        : '458px'};
  }
`;
