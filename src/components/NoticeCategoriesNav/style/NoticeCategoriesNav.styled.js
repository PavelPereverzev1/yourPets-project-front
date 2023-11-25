import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  height: 35px;
  padding: 8px 16px;
  border-radius: 40px;
  background: ${props =>
    props.isActive ? 'var(--blueLink)' : 'var(--blueLight)'};
  color: ${props => (props.isActive ? 'var(--background)' : 'var(--blueLink)')};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.56px;
  transition: background-color var(--transition), color var(--transition);

  &:hover,
  &.active {
    background-color: var(--blueLink);
    color: var(--background);
  }
`;

const NoticeNavContainer = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export { NavElements, NavList, NavElement, StyledNavLink, NoticeNavContainer };
