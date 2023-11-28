import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import { NoticesFilters } from 'components/Filter/NoticesFilters';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeTitle, Wrapper } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <Wrapper>
      <NoticeTitle>Find your favorite pet</NoticeTitle>
      <NoticesSearch />
      <NoticeCategoriesNav />
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList />
    </Wrapper>
  );
};

export default NoticesPage;
