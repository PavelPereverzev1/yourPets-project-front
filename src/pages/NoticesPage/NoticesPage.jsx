import { Filter } from 'components/Filter/Filter';
import { NoticeCategoriesNav } from 'components/NoticeCategoriesNav/NoticeCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuery } from 'redux/notices/noticesSelectors';
import debounce from 'lodash.debounce';
import { setQuery } from 'redux/notices/noticesQuerySlice';
import { useEffect } from 'react';

const NoticesPage = () => {
  // const query = useSelector(selectQuery);

  // useEffect(() => {
  //   console.log(query);
  // }, [query]);

  // const dispatch = useDispatch();

  // const debouncedSetFilter = debounce(value => {
  //   dispatch(setQuery(value));
  // }, 300);

  // useEffect(() => {
  //   return () => {
  //     debouncedSetFilter.cancel();
  //   };
  // }, [debouncedSetFilter]);

  return (
    <>
      <NoticesSearch />
      <NoticeCategoriesNav />
      <Filter />
    </>
  );
};

export default NoticesPage;
