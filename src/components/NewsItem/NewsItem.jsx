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
  ContentWrapper,
} from './NewsItem.styled';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  return `${formattedDay}/${formattedMonth}/${year}`;
}

function NewsItem({ imgUrl, title, text, date, url }) {
  return (
    <Item>
      <Line />
      <Wrapper>
        <NewsImg src={imgUrl} />
        <ContentWrapper>
          <NewsTitle>{title}</NewsTitle>
          <NewsText>{text}</NewsText>
        </ContentWrapper>
        <BottomWrapper>
          <NewsDate>{formatDate(date)}</NewsDate>
          <NewsLink href={url} target="_blank">
            Read more
          </NewsLink>
        </BottomWrapper>
      </Wrapper>
    </Item>
  );
}

export default NewsItem;
