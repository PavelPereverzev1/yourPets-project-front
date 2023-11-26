import { useEffect } from 'react';
import { getFriendsThunk } from 'redux/OurFriends/OurFriendsOperation';
import OurFriends from 'components/OurFriends/OurFriends';
import { useDispatch } from 'react-redux';
import { Title, Wrapper } from 'components/OurFriends/OurFriends.styled';

const OurFriendsPage = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFriendsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Our friends</Title>
      <OurFriends/>
    </Wrapper>
  );
};

export default OurFriendsPage;
