import { useDispatch, useSelector } from 'react-redux';
import {
  NoticesList,
  NotFoundPetsMessage,
} from './NoticesCategoriesList.styled';
import {
  selectCurrentPage,
  selectIsLoading,
  selectNotices,
  selectQuery,
  selectTotalNotices,
} from 'redux/notices/noticesSelectors';
import { useEffect, useState } from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import Pagination from '../Pagination/Pagination';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { getNoticesThunk } from 'redux/notices/noticesOperations';
import { setPage } from 'redux/notices/noticesSlices';

const NoticesCategoriesList = () => {
  const [active, setActive] = useState(false);
  const [noticeDetail, setNoticeDetail] = useState('');

  const notices = useSelector(selectNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalNotices = useSelector(selectTotalNotices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesThunk(query));
  }, [dispatch, query]);

  const totalPages = Math.ceil(totalNotices / 12);

  const handlePageChange = page => {
    dispatch(setPage(page));
  };

  const handleLearnMore = noticeId => {
    setNoticeDetail(noticeId);
    setActive(true);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <NoticesList>
          {notices.length > 0 ? (
            notices.map(item => {
              return (
                <NoticeCategoryItem
                  key={item.id}
                  notice={item}
                  handleLearnMore={handleLearnMore}
                ></NoticeCategoryItem>
              );
            })
          ) : (
            <NotFoundPetsMessage>
              No Pets found, reload page or try again later
            </NotFoundPetsMessage>
          )}
        </NoticesList>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {active && (
        <ModalNotice
          active={active}
          setActive={setActive}
          noticeDetail={noticeDetail}
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
