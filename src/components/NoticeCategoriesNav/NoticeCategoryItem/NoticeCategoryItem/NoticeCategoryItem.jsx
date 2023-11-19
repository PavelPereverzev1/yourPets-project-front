
import React, {useState, useEffect} from 'react';
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
} from './NoticeCategoryItem.js';
import myImg from './images/cat.png';
import {
  PetIcon,
  FavoriteIcon,
  LocationIcon,
  AgeIcon,
  MaleIcon,
  FemaleIcon,
} from './SvgIcons.jsx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import data from "./data.json"



const NoticeCard = ({ }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
   
  }, []);

  const handleAddToFavorite = () => {

    if(!isLoggedIn){
      setIsFavorite(isFavorite)
      Notify.failure("Please, sign in")
    }
    else{
      setIsFavorite(!isFavorite);
    }
     if(isLoggedIn){
      setIsLoggedIn(isLoggedIn)
    }
      
    
  };
  const handleLearnMore = () => {
  
  
  }


  return (
    <>
    

          <Container>
        {data.map(data => {
          return(
          <Item key="id">
          <ImageBlock>
            <InGoodHands>In good hands</InGoodHands>
            <Favorite
           onClick={() => handleAddToFavorite(data.id)}
            >
              <FavoriteIcon isFavorite={isFavorite}></FavoriteIcon>
            </Favorite>
            {isLoggedIn && (
          <Favorite
            onClick={handleAddToFavorite}
            
            style={{
              backgroundColor: isFavorite ? 'yellow' : 'yellow',
            }}
          >
            <FavoriteIcon isFavorite={isFavorite}></FavoriteIcon>
            {isFavorite ? "Видалити з обраних" : "Додати до обраних"}
          </Favorite>
        )}
            <InfoLocation>
              <LocationIcon></LocationIcon>
              <p>{data.location}</p>
            </InfoLocation>
            <InfoAge>
              <AgeIcon></AgeIcon>
              <p>{data.age} year</p>
            </InfoAge>
            <InfoPol>
            {data.sex === 'Male' ? (
                <MaleIcon></MaleIcon>
              ) : data.sex === 'Female' ? (
                <FemaleIcon></FemaleIcon>
              ): null}
              <p>{data.sex}</p>
            </InfoPol>

            <Image src={myImg}></Image>
          </ImageBlock>
          <TextDiv>
            <Text>Сute cat looking for a home</Text>
          </TextDiv>
          <LearnMoreDiv>
            <LearnMore onClick={handleLearnMore}>
              <TextMore>Learn more</TextMore>
              <PetIcon></PetIcon>
            </LearnMore>
          </LearnMoreDiv>
        </Item>
          )
        })}
          
        </Container>
      
    </>
     
  );
};

export default NoticeCard;