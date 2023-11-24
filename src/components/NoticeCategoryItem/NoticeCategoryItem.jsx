import React, {
  useState,
  // useEffect
} from 'react';
import {
  ImageBlock,
  Image,
  TextDiv,
  Text,
  Item,
  LearnMore,
  TextMore,
  LearnMoreDiv,
  InGoodHands,
  Favorite,
  InfoLocation,
  InfoAge,
  InfoPol,
  InfoText,
  Remove
} from './NoticeCategoryItem.styled.js';
import AttentionModal from 'components/Modals/AttentionModal/AttentionModal.jsx';
import DeleteModal from 'components/Modals/DeleteModal/DeleteModal.jsx'
import { useAuth } from '../../hooks/useAuth.js';

import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
  RemoveIcon,
} from './SvgIcons.jsx';


const NoticeCategoryItem = ({ notice }) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);

const [modalActive, setModalActive] = useState(false)
const [deleteModalActive, setDeleteModalActive] = useState(false)





const toggleFavorite = (noticeId) => {
  setFavorites(prevFavorites => {
    const isPetInFavorites = prevFavorites.find(favorite => favorite.id === noticeId);

    if (!isPetInFavorites) {
      return [...prevFavorites, noticeId];
    } else {
      return prevFavorites.filter(favorite => favorite.id !== noticeId);
    }
  });
};


 



  return (
    <>
        <Item key={notice.id}>
          <ImageBlock>
            <InGoodHands>{notice.noticeType}</InGoodHands>
            <Favorite  onClick={() => setModalActive(true)}>
              <FavoriteIcon></FavoriteIcon>
            </Favorite>
            {isLoggedIn && (
              <>
              <Favorite onClick={() => toggleFavorite(notice.id)}>
                <FavoriteIcon isfavorite={favorites.some((favorite) => favorite === notice.id)}></FavoriteIcon>
                
              </Favorite>
              <Remove onClick={() => setDeleteModalActive(true)}>
                <RemoveIcon></RemoveIcon>
              </Remove>
              </>

            )}
            <InfoLocation>
              <LocationIcon></LocationIcon>
              <InfoText>
                {notice.location.length > 5
                  ? notice.location.slice(0, 5) + '...'
                  : notice.location}
              </InfoText>
            </InfoLocation>
            <InfoAge>
              <AgeIcon></AgeIcon>
              <InfoText>{notice.age} year</InfoText>
            </InfoAge>
            <InfoPol>
              {notice.sex === 'male' ? (
                <MaleIcon></MaleIcon>
              ) : notice.sex === 'female' ? (
                <FemaleIcon></FemaleIcon>
              ) : null}
              <InfoText>{notice.sex}</InfoText>
            </InfoPol>
            <Image src={notice.photoURL}></Image>
          </ImageBlock>
          <TextDiv>
            <Text>{notice.title}</Text>
          </TextDiv>
          <LearnMoreDiv>
            <LearnMore  >
              <TextMore>Learn more</TextMore>
              <PetIcon></PetIcon>
            </LearnMore>
          </LearnMoreDiv>
        </Item>
        <AttentionModal active={modalActive} setActive={setModalActive}></AttentionModal>
        <DeleteModal active={deleteModalActive} setActive={setDeleteModalActive} ></DeleteModal>

      
    </>
  );
};


export default NoticeCategoryItem;