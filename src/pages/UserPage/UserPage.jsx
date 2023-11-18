import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Wrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <Wrapper>
      <UserData />
      <PetsData />
    </Wrapper>
  );
};

export default UserPage;
