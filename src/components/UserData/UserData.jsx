import UserForm from 'components/UserForm/UserForm';
import { EditBtn, UserDataContainer } from './UserData.styled';

const UserData = () => {
  return (
    <UserDataContainer>
      <EditBtn onClick={() => console.log('click')} />
      <UserForm />;
    </UserDataContainer>
  );
};

export default UserData;
