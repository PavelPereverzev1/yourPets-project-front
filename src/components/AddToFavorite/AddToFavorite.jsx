import { AddToFavoriteIcon } from './AddToFavoriteIcon';
import { AddToFavoriteButton, AddToFavoriteText } from './AddToFavorite.styled';
import { useAuth } from '../../hooks/useAuth';
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal';
import { useState } from 'react';

const AddToFavorite = ({ notice }) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);
  const [active, setActive] = useState(false);

  const handleAddToFavorite = noticeId => {
    if (!isLoggedIn) {
      setActive(true);
    } else {
      setFavorites(prevFavorites => {
        const isPetInFavorites = prevFavorites.includes(noticeId);

        if (!isPetInFavorites) {
          return [...prevFavorites, noticeId];
        } else {
          return prevFavorites.filter(favorite => favorite !== noticeId);
        }
      });
    }
  };

  return (
    <>
      <AddToFavoriteButton onClick={() => handleAddToFavorite(notice._id)}>
        <AddToFavoriteText>Add to </AddToFavoriteText>
        <AddToFavoriteIcon
          isFavorite={favorites.some(favorite => favorite === notice._id)}
        ></AddToFavoriteIcon>
      </AddToFavoriteButton>
      {active && <AttentionModal active={active} setActive={setActive} />}
    </>
  );
};

export default AddToFavorite;
