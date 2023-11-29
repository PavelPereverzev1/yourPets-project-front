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
import { setCategory, setPage } from 'redux/notices/noticesSlices';
import {
  getNoticesThunk,
  deleteNoticeById,
} from 'redux/notices/noticesOperations';
import LoaderGif from 'components/LoaderGif/LoaderGif';
import { useLocation } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const [active, setActive] = useState(false);
  const [noticeDetail, setNoticeDetail] = useState('');
  const [activeAttention, setActiveAttention] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);
  const [deleteModalTitle, setDeleteModalTitle] = useState('');

  const notices = useSelector(selectNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalNotices = useSelector(selectTotalNotices);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalNotices / 12);
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes(query.category)) {
      dispatch(setCategory('sell'));
      return;
    }
    dispatch(getNoticesThunk(query));
  }, [dispatch, location.pathname, notices.length, query]);

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

  const handleDeleteModal = notice => {
    setDeleteModalTitle(notice.title);
    setNoticeDetail(notice._id);
    setActiveDelete(true);
  };

  const handleDeleteByIdNotice = async () => {
    try {
      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(deleteNoticeById({ id: noticeDetail }));

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
        <LoaderGif />
      ) : (
        <>
          <NoticesList>
            {notices.length > 0 ? (
              notices.map(item => {
                return (
                  <NoticeCategoryItem
                    key={item._id}
                    notice={item}
                    handleLearnMore={() => handleLearnMore(item._id)}
                    handleAttentionModal={handleAttentionModal}
                    handleDeleteModal={() => handleDeleteModal(item)}
                  />
                );
              })
            ) : (
              <NotFoundPetsMessage>
                No Pets found, reload page or try again later
              </NotFoundPetsMessage>
            )}
          </NoticesList>
        </>
      )}
      {!isLoading && notices.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      {active && (
        <ModalNotice
          active={active}
          setActive={setActive}
          noticeDetail={noticeDetail}
          handleAttentionModal={handleAttentionModal}
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
        title={deleteModalTitle}
      />
    </>
  );
};

export default NoticesCategoriesList;
