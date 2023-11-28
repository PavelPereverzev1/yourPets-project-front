import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import { NoticesFilters } from 'components/Filter/NoticesFilters';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticeCategoriesNav />
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;
