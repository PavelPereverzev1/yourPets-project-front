import React from 'react';
import {
  Wrapper,
  NewsImg,
  NewsTitle,
  NewsText,
  NewsDate,
  NewsLink,
  BottomWrapper,
} from './NewsItem.styled';

function NewsItem() {
  return (
    <>
    <Wrapper>
      <NewsImg src="../../images/logo/log-small.png" />
      <NewsTitle>On Pets, Moral Logic and Love</NewsTitle>
      <NewsText>
        In January, I fell in love with someone. It was the last thing I’d
        expect and caught me completely off guard.He has sandy blond hair with
        flecks of gray and gorgeous, sad eyes. He loves to go on walks and
        cuddle. His name is Herbie.
      </NewsText>
      <BottomWrapper>
      <NewsDate>15/03/2023</NewsDate>
      <NewsLink>Read more</NewsLink>
      </BottomWrapper>
    </Wrapper>
      </>
  );
}

export default NewsItem;
