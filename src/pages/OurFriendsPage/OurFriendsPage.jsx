import { useEffect } from 'react';
import { getFriendsThunk } from 'redux/OurFriends/OurFriendsOperation';
import OurFriends from 'components/OurFriends/OurFriends';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Wrapper } from 'components/OurFriends/OurFriends.styled';
import {
  selectFriend,
  selectIsLoading,
} from 'redux/OurFriends/OurFriendsSlice';
import LoaderGif from 'components/LoaderGif/LoaderGif';
import { NotFoundPetsMessage } from 'components/NoticesCategoriesList/NoticesCategoriesList.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector(selectFriend);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getFriendsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoaderGif />
      ) : (
        <Wrapper>
          <Title>Our friends</Title>
          {sponsors && sponsors.length !== 0 ? (
            <OurFriends />
          ) : (
            <NotFoundPetsMessage>We don't have friends :(</NotFoundPetsMessage>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default OurFriendsPage;
