import React from 'react';
import {
    Item,
  Wrapper,
  NewsImg,
  NewsTitle,
  NewsText,
  NewsDate,
  NewsLink,
  BottomWrapper,
  Line,
} from './NewsItem.styled';

function NewsItem({ imgUrl, title, text, date, url }) {

  return (
    <Item>
    <Line />
    <Wrapper>
      <NewsImg src={imgUrl}/>
      <NewsTitle>{title}</NewsTitle>
      <NewsText>{text}</NewsText>
      <BottomWrapper>
      <NewsDate>15/03/23</NewsDate>
      <NewsLink href={url}>Read more</NewsLink>
      </BottomWrapper>
    </Wrapper>
      </Item>
  );
}

export default NewsItem;
