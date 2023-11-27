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
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import { getNoticesThunk } from 'redux/notices/noticesOperations';
import { setPage } from 'redux/notices/noticesSlices';
import { deleteNoticeById } from 'redux/notices/noticesOperations.js';

const NoticesCategoriesList = () => {
  const [active, setActive] = useState(false);
  const [noticeDetail, setNoticeDetail] = useState('');
  const [activeAttention, setActiveAttention] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);

  const notices = useSelector(selectNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalNotices = useSelector(selectTotalNotices);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalNotices / 12);

  useEffect(() => {
    dispatch(getNoticesThunk(query));
  }, [dispatch, query]);

  const handlePageChange = page => {
    dispatch(setPage(page));
  };

  const handleLearnMore = noticeId => {
    setNoticeDetail(noticeId);
    setActive(true);
  };

  const handleAttentionModal = () => {
    setActiveAttention(true);
  };
  const handleDeleteModal = () => {
    setActiveDelete(true);
  };
  const handleDeleteByIdNotice = async () => {
    try {
      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(deleteNoticeById({ id: notices.id }));

      if (requestStatus === 'rejected') {
        throw new Error(payload);
      }

      setActiveDelete(false);
    } catch (error) {
      const { message } = error;

      console.log(message);
    }
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
                  handleAttentionModal={handleAttentionModal}
                  handleDeleteModal={handleDeleteModal}
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
      <AttentionModal
        active={activeAttention}
        setActive={setActiveAttention}
      ></AttentionModal>
      <DeleteModal
        active={activeDelete}
        setActive={setActiveDelete}
        yes={handleDeleteByIdNotice}
      ></DeleteModal>
    </>
  );
};

export default NoticesCategoriesList;
