import { styled } from 'styled-components';

export const ButtonLogout = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 135px;
  height: 40px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border-radius: 20px;
  border: transparent;
  outline: none;
  cursor: pointer;
  color: var(--white);
  background-color: var(--blueLink);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    position: static;
  }

  &:hover,
  &:focus {
    background-image: var(--blueGradient);
    background-origin: border-box;
    background-repeat: no-repeat;
    border: transparent;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
