import {
  NavElements,
  NavList,
  NavElement,
  StyledNavLink,
  NoticeNavContainer,
} from './style/NoticeCategoriesNav.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/AuthSlice';

export const NoticeCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NoticeNavContainer>
      <NavElements aria-label="Notice menu">
        <NavList>
          <NavElement>
            <StyledNavLink to="/notices/sell">sell</StyledNavLink>
          </NavElement>
          <NavElement>
            <StyledNavLink to="/notices/lost-found">lost/found</StyledNavLink>
          </NavElement>
          <NavElement>
            <StyledNavLink to="/notices/in-good-hands">
              in good hands
            </StyledNavLink>
          </NavElement>
          {isLoggedIn && (
            <NavElement>
              <StyledNavLink to="/notices/favorite">favorite ads</StyledNavLink>
            </NavElement>
          )}
          {isLoggedIn && (
            <NavElement>
              <StyledNavLink to="/notices/own">my ads</StyledNavLink>
            </NavElement>
          )}
        </NavList>
      </NavElements>
    </NoticeNavContainer>
  );
};
