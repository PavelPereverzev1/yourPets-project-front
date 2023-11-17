import UserForm from 'components/UserForm/UserForm';
import {
  CardBtn,
  Card,
  Section,
  Title,
  AvatarContainer,
  Avatar,
  UploadBtn,
  UploadInput,
} from './UserData.styled';
import { useRef, useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';
import { GrClose } from 'react-icons/gr';

const defaultAvatarUrl = 'yourPets-project-front/defaultAvatar.png';

const UserData = () => {
  const [isEditFormInactive, setisEditFormInactive] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatarUrl);
  // const [uploadedAvatar, setUploadedAvatar] = useState(false);
  const fileInputRef = useRef();

  // console.log(fileInputRef.current?.value);

  const handleSubmit = async e => {
    e.preventDefault();

    const file = fileInputRef.current?.files[0];
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
    }
    fileInputRef.current.value = null;

    console.log(fileInputRef.current.value);

    // setUploadedAvatar(false);
  };

  const handleAvatarChange = e => {
    const file = e.currentTarget.files[0];

    if (file) {
      const newAvatarUrl = URL.createObjectURL(file);
      setAvatarUrl(newAvatarUrl);
      // setUploadedAvatar(true);
    }
  };

  const handleAvatarRemove = () => {
    setAvatarUrl(defaultAvatarUrl);
    // setUploadedAvatar(false);
    fileInputRef.current.value = null;
  };

  return (
    <Section>
      <Title>My information:</Title>
      <Card>
        <CardBtn
          as={isEditFormInactive ? LuPencilLine : GrClose}
          onClick={() => setisEditFormInactive(!isEditFormInactive)}
        />
        <AvatarContainer>
          <Avatar src={avatarUrl} alt="User avatar" />
          {!isEditFormInactive && (
            <form onSubmit={handleSubmit}>
              <UploadInput
                id="file-upload"
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                ref={fileInputRef}
              />
              {fileInputRef.current?.value ? (
                <>
                  <button type="submit">Confirm</button>
                  <button type="button" onClick={handleAvatarRemove}>
                    X
                  </button>
                </>
              ) : (
                <UploadBtn htmlFor="file-upload">Edit Photo</UploadBtn>
              )}
            </form>
          )}
        </AvatarContainer>
        <UserForm
          formStatusIndicator={{ isEditFormInactive, setisEditFormInactive }}
        />
      </Card>
    </Section>
  );
};

export default UserData;
