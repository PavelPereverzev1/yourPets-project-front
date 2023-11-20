// import React from 'react'
import { NoticesList } from './NoticesCategoriesList.styled';
const NoticesCategoriesList = ({ children }) => {
  // select items from redux state
  return (
    <>
      <NoticesList>
        {children}
      </NoticesList>
    </>
  );
};

export default NoticesCategoriesList;