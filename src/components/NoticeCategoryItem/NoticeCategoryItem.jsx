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
  Remove,
} from './NoticeCategoryItem.styled.js';

import { useAuth } from '../../hooks/useAuth.js';
import { useDispatch } from 'react-redux';
import {
  addNoticeToFavorite,
  deleteNoticeFromFavorite,
} from 'redux/notices/noticesOperations.js';
import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
  RemoveIcon,
} from './SvgIcons.jsx';

const NoticeCategoryItem = ({ notice, handleLearnMore, handleAttentionModal, handleDeleteModal }) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);


  const dispatch = useDispatch();

  

  const toggleFavorite = async noticeId => {
    try {
      if (favorites.includes(noticeId)) {
        const {
          meta: { requestStatus },
          payload,
        } = await dispatch(deleteNoticeFromFavorite({ id: noticeId }));

        if (requestStatus === 'rejected') {
          throw new Error(payload);
        }

        return setFavorites(prevFavorites =>
          prevFavorites.filter(favorite => favorite !== noticeId)
        );
      }

      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(addNoticeToFavorite({ id: noticeId }));

      if (requestStatus === 'rejected') {
        throw new Error(payload);
      }

      return setFavorites(prevFavorites => [...prevFavorites, noticeId]);
    } catch (error) {
      const { message } = error;

      console.log(message);
    }
  };

  return (
    <>
      <Item key={notice.id}>
        <ImageBlock>
          <InGoodHands>{notice.noticeType}</InGoodHands>
          <Favorite onClick={() => handleAttentionModal(true)}>
            <FavoriteIcon></FavoriteIcon>
          </Favorite>
          {isLoggedIn && (
            <Favorite onClick={() => toggleFavorite(notice.id)}>
              <FavoriteIcon
                isfavorite={favorites.some(favorite => favorite === notice.id)}
              ></FavoriteIcon>
            </Favorite>
          )}{' '}
          {isLoggedIn && user._id === notice.owner && (
            <Remove onClick={() => handleDeleteModal(true)}>
              <RemoveIcon></RemoveIcon>
            </Remove>
          )}
          <InfoLocation>
            <LocationIcon></LocationIcon>
            <InfoText>
              {notice.location}
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
          <LearnMore onClick={() => handleLearnMore(notice.id)}>
            <TextMore>Learn more</TextMore>
            <PetIcon></PetIcon>
          </LearnMore>
        </LearnMoreDiv>
      </Item>
      
      
    </>
  );
};

export default NoticeCategoryItem;
