import { useEffect } from 'react';
import { getFriendsThunk } from 'redux/OurFriends/OurFriendsOperation';
import OurFriends from 'components/OurFriends/OurFriends';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Wrapper } from 'components/OurFriends/OurFriends.styled';
import { selectFriend } from 'redux/OurFriends/OurFriendsSlice';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector(selectFriend);

  useEffect(() => {
    dispatch(getFriendsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Our friends</Title>
      {sponsors.length !==0 ? <OurFriends/> : <Title>please wait</Title>}
    </Wrapper>
  );
};

export default OurFriendsPage;
