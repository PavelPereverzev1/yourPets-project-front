import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthBtnLog = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 16px;
  border: 2px solid var(--yellow);
  color: var(--white);
  background-color: var(--yellow);
  padding: 8px 20px;
  gap: 8px;
  transition: transform 200ms linear;

  @media screen and (min-width: 768px) {
    width: 142px;
  }
  &:hover,
  &:focus {
    color: var(--white);
    border: 2px solid transparent;
    background-color: var(--yellow);
    cursor: pointer;
    transform: scale(1.1);
  }
  &:hover svg,
  &:focus svg {
    fill: var(--white);
  }
`;

export const AuthBtnReg = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 16px;
  border: 2px solid var(--yellow);
  color: var(--yellow);
  background-color: var(--white);
  padding: 8px 20px;
  gap: 8px;
  transition: transform 200ms linear;

  @media screen and (min-width: 768px) {
    width: 142px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--white);
  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;
