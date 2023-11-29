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

const NoticesPage = () => {
  const [screenWidth] = useWindowSize();
  const navigate = useNavigate();
  const handleClick = () => navigate('/add-pet');

  return (
    <Wrapper>
      <NoticeTitle>Find your favorite pet</NoticeTitle>
      <NoticesSearch />
      <NoticeCategoriesNav />
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList />
      {screenWidth < 768 && (
        <AddBtnContainer>
          <ButtonComponent $variant="round" onClick={handleClick}>
            <AddIcon>
              <use href={`${sprite}#icon-plus`} />
            </AddIcon>
            Add Pet
          </ButtonComponent>
        </AddBtnContainer>
      )}
    </Wrapper>
  );
};

export default NoticesPage;
