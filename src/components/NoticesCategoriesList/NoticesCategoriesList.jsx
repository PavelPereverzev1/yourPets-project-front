// import React from 'react'
import { useSelector } from 'react-redux';
import { NoticesList, NotFoundPetsMessage } from './NoticesCategoriesList.styled';
import { selectNotices } from 'redux/notices/noticesSelectors';
import {useState, useEffect } from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import Pagination from '../Pagination/Pagination';
const NoticesCategoriesList = () => {

  const notices = useSelector(selectNotices);

  useEffect(() => {
    console.log(notices);
  }, [notices]);


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(notices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = notices.slice(startIndex, endIndex);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <>
      <NoticesList>
      {currentPageItems.length > 0 ? (
            notices.map(item => (
              <NoticeCategoryItem
                key={item.id}
                notice={item}
              ></NoticeCategoryItem>
            ))
          ) : (
            <NotFoundPetsMessage>No Pets found, reload page or try again later</NotFoundPetsMessage>
          )}
      </NoticesList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default NoticesCategoriesList;
