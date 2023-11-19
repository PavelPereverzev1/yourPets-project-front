import React, { useState, useEffect } from 'react';
import {
  ImageBlock,
  Image,
  TextDiv,
  Text,
  Container,
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
} from './NoticeCategoryItem.js';

import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
} from './SvgIcons.jsx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import data from './data.json';

const NoticeCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataf, setDataf] = useState([]);

  useEffect(() => {
    setDataf(data.map(item => ({ ...item, isFavorite: false })));
   
  }, []);

  const handleAddToFavorite = (id) => {
    if(!isLoggedIn){
      setIsLoggedIn(isLoggedIn)
    }
    if (isLoggedIn) {
      Notify.failure('Please, sign in');
    } else {
      
      const updatedData = dataf.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      );
      setDataf(updatedData);
    }
  };

  const handleLearnMore = () => {
   
  };

  return (
    <>
      <Container>
        {dataf.map((item) => (
          <Item key={item.id}>
            <ImageBlock>
              <InGoodHands>{item.state}</InGoodHands>
              <Favorite onClick={() => handleAddToFavorite(item.id)}>
                <FavoriteIcon isFavorite={item.isFavorite}></FavoriteIcon>
              </Favorite>
              {isLoggedIn && (
                <Favorite
                  onClick={() => handleAddToFavorite(item.id)}
                  
                >
                  <FavoriteIcon isFavorite={item.isFavorite}></FavoriteIcon>
                  {item.isFavorite ? 'Видалити з обраних' : 'Додати до обраних'}
                </Favorite>
              )}
              <InfoLocation>
                <LocationIcon></LocationIcon>
                <InfoText>{item.location.length > 5
                    ? item.location.slice(0, 5) + '...'
                    : item.location}</InfoText>
              </InfoLocation>
              <InfoAge>
                <AgeIcon></AgeIcon>
                <InfoText>{item.age} year</InfoText>
              </InfoAge>
              <InfoPol>
                {item.sex === 'male' ? (
                  <MaleIcon></MaleIcon>
                ) : item.sex === 'female' ? (
                  <FemaleIcon></FemaleIcon>
                ) : null}
                <InfoText>{item.sex}</InfoText>
              </InfoPol>
              <Image src={item.img}></Image>
            </ImageBlock>
            <TextDiv>
              <Text>Сute cat/dog looking for a home</Text>
            </TextDiv>
            <LearnMoreDiv>
              <LearnMore onClick={handleLearnMore}>
                <TextMore>Learn more</TextMore>
                <PetIcon></PetIcon>
              </LearnMore>
            </LearnMoreDiv>
          </Item>
        ))}
      </Container>
    </>
  );
};

export default NoticeCard;