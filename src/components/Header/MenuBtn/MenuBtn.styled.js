import { styled } from 'styled-components';

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--yellow);
`;
