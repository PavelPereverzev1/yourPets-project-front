import React from 'react';
import {
  NavElements,
  NavList,
  NavElement,
  StyledNavLink,
} from './style/NoticeCategoriesNav.styled';
// import NoticeCard from './NoticeCategoryItem/NoticeCategoryItem/NoticeCategoryItem.jsx';
export const NoticeCategoriesNav = () => {
  const isUser = true;
  return (
    <>
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
          {isUser && (
            <NavElement>
              <StyledNavLink to="/notices/favorite">favorite ads</StyledNavLink>
            </NavElement>
          )}
          {isUser && (
            <NavElement>
              <StyledNavLink to="/notices/own">my ads</StyledNavLink>
            </NavElement>
          )}
          {/* <NoticeCard></NoticeCard> */}
        </NavList>
      </NavElements>
    </>
  );
};
