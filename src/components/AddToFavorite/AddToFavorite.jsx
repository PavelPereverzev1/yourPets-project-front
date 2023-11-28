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
  const [isFavoriteNotice, setIsFavoriteNotice] = useState(() =>
    favorites.some(favorite => favorite === notice.id)
  );
  const [isFavoriteButtonDisabled, setIsFavoriteButtonDisabled] =
    useState(false);
 

  const dispatch = useDispatch();

  const toggleFavorite = async noticeId => {
   
    try {
      setIsFavoriteButtonDisabled(true);

      if (favorites.includes(noticeId)) {
        setIsFavoriteNotice(false);

        const {
          meta: { requestStatus },
          payload,
        } = await dispatch(deleteNoticeFromFavorite({ id: noticeId }));

        if (requestStatus === 'rejected') {
          setIsFavoriteNotice(true);

          setIsFavoriteButtonDisabled(false);

          throw new Error(payload);
        }

        setFavorites(prevFavorites =>
          prevFavorites.filter(favorite => favorite !== noticeId)
        );

        setIsFavoriteButtonDisabled(false);

        return;
      }

      setIsFavoriteNotice(true);

      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(addNoticeToFavorite({ id: noticeId }));

      if (requestStatus === 'rejected') {
        setIsFavoriteNotice(false);

        setIsFavoriteButtonDisabled(false);

        throw new Error(payload);
      }

      setFavorites(prevFavorites => [...prevFavorites, noticeId]);

      setIsFavoriteButtonDisabled(false);

      return;
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
      <AddToFavoriteButton disabled={isFavoriteButtonDisabled} onClick={() => toggleFavorite(notice._id)}>
      <AddToFavoriteText>Add to </AddToFavoriteText>
      <AddToFavoriteIcon
        isFavorite={isFavoriteNotice}
      ></AddToFavoriteIcon>
    </AddToFavoriteButton>
    )}
  </>
  );
};

export default AddToFavorite;