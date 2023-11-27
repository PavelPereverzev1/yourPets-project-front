import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Wrapper } from './UserPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFirstLoggedIn, setIsFirstLoggedIn } from 'redux/AuthSlice';
import CongratsModal from 'components/Modals/CongratsModal/CongratsModal';

const UserPage = () => {
  const isFirstLoggedIn = useSelector(selectIsFirstLoggedIn);
  const dispatch = useDispatch();

  console.log(isFirstLoggedIn);

  const handleCongratsModal = () => {
    dispatch(setIsFirstLoggedIn());
  };

  return (
    <>
      <Wrapper>
        <UserData />
        <PetsData />
      </Wrapper>
      <CongratsModal active={isFirstLoggedIn} setActive={handleCongratsModal} />
    </>
  );
};

export default UserPage;
