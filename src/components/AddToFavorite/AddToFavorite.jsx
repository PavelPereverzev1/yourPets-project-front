import React from 'react';
import { FavoriteIcon } from './FavoriteIcon';
import { AddToFavoriteButton, AddToFavoriteText } from './AddToFavorite.styled';

const AddToFavorite = () => {
  // const handleAddToFavorite = (id) => {
  //   if(!isLoggedIn){
  //     setIsLoggedIn(isLoggedIn)
  //   }
  //   if (isLoggedIn) {
  //     Notify.failure('Please, sign in');
  //   } else {

  //     const updatedData = dataf.map((item) =>
  //       item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
  //     );
  //     setDataf(updatedData);
  //   }
  // };
  //onClick={() => handleAddToFavorite(item.id)}

  return (
    <AddToFavoriteButton>
      <AddToFavoriteText>Add to</AddToFavoriteText>
      <FavoriteIcon></FavoriteIcon>
    </AddToFavoriteButton>
  );
};

export default AddToFavorite;
