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

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector(selectFriend);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getFriendsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoaderGif />}
      <Wrapper>
        <Title>Our friends</Title>
        {sponsors.length !== 0 ? <OurFriends /> : <LoaderGif />}
      </Wrapper>
    </>
  );
};

export default OurFriendsPage;
