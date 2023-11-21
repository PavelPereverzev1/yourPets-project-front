import { styled } from 'styled-components';

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  border: 2px solid #54adff;
  cursor: pointer;
  a {
    color: #54adff;
    font-weight: 700;
    font-size: 16px;
  }
  &:hover {
    background-color: #54adff;
    border: 2px solid #fff;
    a {
      color: #fff;
    }
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;
