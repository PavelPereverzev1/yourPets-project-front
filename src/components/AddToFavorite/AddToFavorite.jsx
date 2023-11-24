import React, { useState } from 'react';
import { FavoriteIcon } from './FavoriteIcon';
import { AddToFavoriteButton, AddToFavoriteText } from './AddToFavorite.styled';
import { useAuth } from '../../hooks/useAuth';
import Notify from 'notiflix';

const AddToFavorite = ({ notice }) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);

  const handleAddToFavorite = id => {
    if (!isLoggedIn) {
      Notify.failure('Please, sign in');
    } else {
      console.log(notice.id);
    }
  };

  return (
    <AddToFavoriteButton>
      <AddToFavoriteText>Add to</AddToFavoriteText>
      <FavoriteIcon isFavorite={notice.isFavorite}></FavoriteIcon>
    </AddToFavoriteButton>
  );
};

export default AddToFavorite;
