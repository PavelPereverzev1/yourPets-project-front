import { styled } from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const NavbarLink = styled.a`
  font-family: Manrope500;
  font-size: 32px;
  transition: transform 250ms linear;
  color: black;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: #ffc107;
    cursor: pointer;
  }

  &.active {
    font-family: Manrope700;
    color: #ffc107;
  }
`;
