import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
// import { NoticesFilters } from 'components/Filter/NoticesFilters';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { useLocation } from 'react-router-dom';
import { setCategory } from 'redux/notices/noticesQuerySlice';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

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
    <>
      <NoticesSearch />
      <NoticeCategoriesNav />
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;
