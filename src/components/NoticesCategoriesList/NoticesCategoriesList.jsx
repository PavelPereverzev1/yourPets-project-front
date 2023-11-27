import { useDispatch, useSelector } from 'react-redux';
import {
  NoticesList,
  NotFoundPetsMessage,
} from './NoticesCategoriesList.styled';
import {
  selectIsLoading,
  selectNotices,
  selectQuery,
} from 'redux/notices/noticesSelectors';
import { useEffect, useState } from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import Pagination from '../Pagination/Pagination';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal';
import { getNoticesThunk } from 'redux/notices/noticesOperations';
import { deleteNoticeById } from 'redux/notices/noticesOperations.js';

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const query = useSelector(selectQuery);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesThunk(query));
  }, [dispatch, query]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(notices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = notices.slice(startIndex, endIndex);
  const [active, setActive] = useState(false);
  const [noticeDetail, setNoticeDetail] = useState('');
  const [activeAttention, setActiveAttention] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);

  const handlePageChange = page => {
    setCurrentPage(page);
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
          {currentPageItems.length > 0 ? (
            notices.map(item => {
              return (
                <NoticeCategoryItem
                  key={item._id}
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
