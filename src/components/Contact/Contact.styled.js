import { styled } from 'styled-components';

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  border: 2px solid var(--blueLink);
  cursor: pointer;
  a {
    color: var(--blueLink);
    font-weight: 700;
    font-size: 16px;
    line-height: 21.86px;
  }
  &:hover {
    background-color: var(--blueLink);
    border: 2px solid var(--white);
    a {
      color: var(--white);
    }
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;
