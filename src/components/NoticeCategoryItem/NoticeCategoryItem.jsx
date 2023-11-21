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
} from './NoticeCategoryItem.styled.js';

import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
} from './SvgIcons.jsx';
// import data from './data.json';

const NoticeCategoryItem = ({ notice }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [dataf, setDataf] = useState([]);



  // useEffect(() => {
  //   setDataf(data.map(item => ({ ...item, isFavorite: false })));
  // }, []);

  const handleAddToFavorite = id => {
    if (!isLoggedIn) {
      setIsLoggedIn(isLoggedIn);
    }
    // if (isLoggedIn) {
    //   console.log('error');
    // } else {
    //   const updatedData = dataf.map(item =>
    //     item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    //   );
    //   setDataf(updatedData);
    // }
  };

  const handleLearnMore = () => {};

  return (
    <>
        <Item key={notice.id}>
          <ImageBlock>
            <InGoodHands>{notice.state}</InGoodHands>
            <Favorite onClick={() => handleAddToFavorite(notice.id)}>
              <FavoriteIcon isFavorite={notice.isFavorite}></FavoriteIcon>
            </Favorite>
            {isLoggedIn && (
              <Favorite onClick={() => handleAddToFavorite(notice.id)}>
                <FavoriteIcon isFavorite={notice.isFavorite}></FavoriteIcon>
                {notice.isFavorite ? 'Видалити з обраних' : 'Додати до обраних'}
              </Favorite>
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
            <Image src={notice.img}></Image>
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
    </>
  );
};

export default NoticeCategoryItem;