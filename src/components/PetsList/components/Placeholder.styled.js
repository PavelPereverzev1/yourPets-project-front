import styled from 'styled-components';

const MisisngPetElement = styled.li`
  width: 280px;
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: var(--boxShadowDefault);
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    width: 704px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 820px;
  }
`;

const MissingPetDis = styled.p`
  padding: 40px 0 24px 0;
  font-weight: 500;
  text-align: center;
  font-size: 14px;
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.64px;
  }
`;
export { MisisngPetElement, MissingPetDis };
