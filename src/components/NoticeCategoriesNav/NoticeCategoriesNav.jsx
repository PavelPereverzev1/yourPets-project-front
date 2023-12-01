import { useWindowSize } from 'hooks/useResize';
import sprite from 'images/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/AuthSlice';
import { setCategory } from 'redux/notices/noticesSlices';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router';
import {
  NavElements,
  NavList,
  NavElement,
  StyledNavLink,
  NoticeNavContainer,
  NavBtn,
  AddIcon,
} from './style/NoticeCategoriesNav.styled';
import { useState } from 'react';
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';

export const NoticeCategoriesNav = () => {
  const [screenWidth] = useWindowSize();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalActive, setModalActive] = useState(false);
  const handleModalActive = ()=> setModalActive(true);
  const handleClick = () => navigate('/add-pet');

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
      {screenWidth >= 768 && (
        <ButtonComponent $variant="filled" width="129px" onClick={isLoggedIn ? handleClick: handleModalActive}>
          <AddIcon>
            <use href={`${sprite}#icon-plus-small`} />
          </AddIcon>
          Add Pet
        </ButtonComponent>
      )}
      <AttentionModal active={modalActive} setActive={setModalActive}/>
    </NoticeNavContainer>
  );
};
