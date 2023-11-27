import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToFavoriteIcon } from './AddToFavoriteIcon';
import {
  AddToFavoriteButton,
  AddToFavoriteText
} from './AddToFavorite.styled';
import { useAuth } from '../../hooks/useAuth';

import {
  addNoticeToFavorite,
  deleteNoticeFromFavorite
} from 'redux/notices/noticesOperations.js';

const AddToFavorite = ({ notice, handleAttentionModal }) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);
  const dispatch = useDispatch();

  const toggleFavorite = async (noticeId) => {
    try {
     
      if (favorites.includes(noticeId)) {
        const {
          meta: { requestStatus },
          payload
        } = await dispatch(deleteNoticeFromFavorite({ id: noticeId }));

        if (requestStatus === 'rejected') {
          throw new Error(payload);
        }

        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite !== noticeId)
        );
      } else {
        const {
          meta: { requestStatus },
          payload
        } = await dispatch(addNoticeToFavorite({ id: noticeId }));

        if (requestStatus === 'rejected') {
          throw new Error(payload);
        }

        setFavorites((prevFavorites) => [...prevFavorites, noticeId]);
      }
    } catch (error) {
      const { message } = error;
      console.log(message);
    }
  };

  return (
    <>
    {!isLoggedIn && (
      <AddToFavoriteButton onClick={() => handleAttentionModal(true)}>
        <AddToFavoriteIcon>
          <AddToFavoriteText>Add to </AddToFavoriteText>
        </AddToFavoriteIcon>
      </AddToFavoriteButton>
    )}
    {isLoggedIn && (
      <AddToFavoriteButton onClick={() => toggleFavorite(notice._id)}>
        <AddToFavoriteIcon
          isfavorite={favorites.some(favorite => favorite === notice._id)}
        ></AddToFavoriteIcon>
      </AddToFavoriteButton>
    )}
  </>
  );
};

export default AddToFavorite;