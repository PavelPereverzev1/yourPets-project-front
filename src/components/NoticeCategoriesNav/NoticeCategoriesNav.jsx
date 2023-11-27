import {
  NavElements,
  NavList,
  NavElement,
  StyledNavLink,
  NoticeNavContainer,
  NavBtn,
} from './style/NoticeCategoriesNav.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/AuthSlice';
import { setCategory } from 'redux/notices/noticesSlices';

export const NoticeCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <NoticeNavContainer>
      <NavElements aria-label="Notice menu">
        <NavList>
          <NavElement>
            <NavBtn type="button" onClick={() => dispatch(setCategory('sell'))}>
              <StyledNavLink to="/notices/sell">sell</StyledNavLink>
            </NavBtn>
          </NavElement>
          <NavElement>
            <NavBtn
              type="button"
              onClick={() => dispatch(setCategory('lost-found'))}
            >
              <StyledNavLink to="/notices/lost-found">lost/found</StyledNavLink>
            </NavBtn>
          </NavElement>
          <NavElement>
            <NavBtn
              type="button"
              onClick={() => dispatch(setCategory('in-good-hands'))}
            >
              <StyledNavLink to="/notices/in-good-hands">
                in good hands
              </StyledNavLink>
            </NavBtn>
          </NavElement>
          {isLoggedIn && (
            <NavElement>
              <NavBtn
                type="button"
                onClick={() => dispatch(setCategory('favorite'))}
              >
                <StyledNavLink to="/notices/favorite">
                  favorite ads
                </StyledNavLink>
              </NavBtn>
            </NavElement>
          )}
          {isLoggedIn && (
            <NavElement>
              <NavBtn
                type="button"
                onClick={() => dispatch(setCategory('own'))}
              >
                <StyledNavLink to="/notices/own">my ads</StyledNavLink>
              </NavBtn>
            </NavElement>
          )}
        </NavList>
      </NavElements>
    </NoticeNavContainer>
  );
};
