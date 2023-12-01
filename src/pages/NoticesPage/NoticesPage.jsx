import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router';
import sprite from 'images/icons/sprite.svg';
import {
  AddBtnContainer,
  AddIcon,
  NoticeTitle,
  Wrapper,
} from './NoticesPage.styled';
import { useWindowSize } from 'hooks/useResize';
import { useState } from 'react';
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/AuthSlice';

const NoticesPage = () => {
  const [screenWidth] = useWindowSize();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [modalActive, setModalActive] = useState(false);
  const handleModalActive = () => setModalActive(true);
  const handleClick = () => navigate('/add-pet');

  return (
    <Wrapper>
      <NoticeTitle>Find your favorite pet</NoticeTitle>
      <NoticesSearch />
      <NoticeCategoriesNav />
      <NoticesCategoriesList />
      {screenWidth < 768 && (
        <AddBtnContainer>
          <ButtonComponent
            $variant="round"
            onClick={isLoggedIn ? handleClick : handleModalActive}
          >
            <AddIcon>
              <use href={`${sprite}#icon-plus`} />
            </AddIcon>
            Add Pet
          </ButtonComponent>
        </AddBtnContainer>
      )}
      <AttentionModal active={modalActive} setActive={setModalActive} />
    </Wrapper>
  );
};

export default NoticesPage;
