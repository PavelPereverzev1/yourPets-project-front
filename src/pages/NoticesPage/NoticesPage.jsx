import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { selectQuery } from 'redux/notices/noticesSelectors';
import { useEffect } from 'react';
import { getNoticesThunk } from 'redux/notices/noticesOperations';
import { useDispatch, useSelector } from 'react-redux';
import { NoticesFilters } from 'components/Filter/NoticesFilters';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesThunk(query));
  }, [dispatch, query]);

  return (
    <>
      <NoticesSearch />
      <NoticeCategoriesNav />
      <NoticesFilters />
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;
