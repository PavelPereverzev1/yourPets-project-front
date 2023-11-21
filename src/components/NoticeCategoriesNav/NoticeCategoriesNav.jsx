import React, { useEffect } from 'react';
import {
  NavElements,
  NavList,
  NavElement,
  StyledNavLink,
  NoticeNavContainer,
} from './style/NoticeCategoriesNav.styled';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from 'redux/notices/noticesQuerySlice';
import { selectIsLoggedIn } from 'redux/AuthSlice';
import { NoticesFilters } from 'components/Filter/NoticesFilters';
export const NoticeCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    switch (location.pathname) {
      case '/notices/sell':
        dispatch(setCategory('sell'));
        break;
      case '/notices/lost-found':
        dispatch(setCategory('lost-found'));
        break;
      case '/notices/in-good-hands':
        dispatch(setCategory('in-good-hands'));
        break;
      default:
        break;
    }
  }, [dispatch, location]);

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
      <NoticesFilters />
    </NoticeNavContainer>
  );
};
