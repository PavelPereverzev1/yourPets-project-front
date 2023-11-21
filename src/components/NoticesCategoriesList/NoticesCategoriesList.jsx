// import React from 'react'
import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesCategoriesList.styled';
import { selectNotices } from 'redux/notices/noticesSelectors';
import { useEffect } from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoriesList = () => {
  // select items from redux state

  const notices = useSelector(selectNotices);

  useEffect(() => {
    console.log(notices);
  }, [notices]);

  return (
    <>
      <NoticesList>
        <NoticeCategoryItem data={notices} />
      </NoticesList>
    </>
  );
};

export default NoticesCategoriesList;
