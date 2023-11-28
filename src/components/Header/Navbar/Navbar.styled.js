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
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1.28px;
  color: var(--black);
  transition: color var(--transition);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 1.92px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }

  &:hover,
  &:focus {
    color: var(--yellow);
  }

  &.active {
    color: var(--yellow);
  }
`;
