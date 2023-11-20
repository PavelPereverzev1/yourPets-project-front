import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// const NavContainer = styled.div`
//   width: 100%;
//   min-width: 280px;
//   margin: 20px auto auto 24px;
// `;
const NavElements = styled.nav``;
const NavList = styled.ul`
  width: 203px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 312px;
  }
  @media screen and (min-width: 1200px) {
    width: 540px;
  }
`;
const NavElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  height: 35px;
  padding: 8px 16px;
  border-radius: 40px;
  background: ${props => (props.isActive ? '#54ADFF' : '#CCE4FB')};
  color: ${props => (props.isActive ? '#FEF9F9' : '#54ADFF')};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
  &:hover {
    background-color: #54adff;
    color: #fef9f9;
  }
  &.active {
    background: #54adff;
    color: #fef9f9;
  }
`;

export { NavElements, NavList, NavElement, StyledNavLink };
