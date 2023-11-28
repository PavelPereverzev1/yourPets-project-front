import React, { useState } from 'react';
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

const NoticeCategoryItem = ({
  notice,
  handleLearnMore,
  handleAttentionModal,
  handleDeleteModal,
}) => {
  const { isLoggedIn, user } = useAuth();
  const [favorites, setFavorites] = useState(user.favorites || []);
  const [isFavoriteNotice, setIsFavoriteNotice] = useState(() =>
    favorites.some(favorite => favorite === notice._id)
  );
  const [isFavoriteButtonDisabled, setIsFavoriteButtonDisabled] =
    useState(false);
  // const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);

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
      console.log(error);
    }
  };

  return (
    <>
      <Item key={notice._id}>
        <ImageBlock>
          <InGoodHands>{notice.noticeType}</InGoodHands>
          {!isLoggedIn && (
            <Favorite onClick={() => handleAttentionModal(true)}>
              <FavoriteIcon></FavoriteIcon>
            </Favorite>
          )}
          {isLoggedIn && (
            <Favorite
              disabled={isFavoriteButtonDisabled}
              onClick={() => toggleFavorite(notice._id)}
            >
              <FavoriteIcon isfavorite={isFavoriteNotice}></FavoriteIcon>
            </Favorite>
          )}{' '}
          {isLoggedIn && user._id === notice.owner && (
            <Remove disabled={false} onClick={() => handleDeleteModal(true)}>
              <RemoveIcon></RemoveIcon>
            </Remove>
          )}
          <InfoLocation>
            <LocationIcon></LocationIcon>
            <InfoText>{notice.location}</InfoText>
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
            <PetIcon />
          </LearnMore>
        </LearnMoreDiv>
      </Item>
    </>
  );
};

export default NoticeCategoryItem;
