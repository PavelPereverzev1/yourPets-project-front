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
import { useEffect, useRef, useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';
import { GrClose } from 'react-icons/gr';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserDataLoaded, selectUser } from 'redux/AuthSlice';
import { refreshUser, updateUser } from 'redux/AuthSlice/operations';
import LogoutBtn from 'components/Header/LogoutBtn/LogoutBtn';
import { validateUserSchema } from 'helpers/validateUserSchema';

// const defaultAvatarUrl = '/yourPets-project-front/defaultAvatar.png';

const UserData = () => {
  const [isEditFormInactive, setIsEditFormInactive] = useState(true);
  const [uploadAvatarURL, setUploadAvatarURL] = useState(null);
  const [uploadedAvatar, setUploadedAvatar] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectIsUserDataLoaded) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  const fileInputRef = useRef();
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
    },
    validationSchema: validateUserSchema,
    onSubmit: async values => {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }

      if (fileInputRef.current.files[0]) {
        const file = fileInputRef.current.files[0];
        formData.append('avatar', file);
        fileInputRef.current.value = null;
      }

      const res = await dispatch(updateUser(formData));

      if (updateUser.fulfilled.match(res)) {
        setIsEditFormInactive(true);
        return;
      }
      alert('database error, please try again later');
    },
  });

  const handleAvatarConfirm = e => {
    e.preventDefault();
    setUploadedAvatar(false);
  };

  const handleAvatarChange = e => {
    const file = e.currentTarget.files[0];

    if (file) {
      const newAvatarUrl = URL.createObjectURL(file);
      setUploadAvatarURL(newAvatarUrl);
      setUploadedAvatar(true);
    }
  };

  const handleAvatarRemove = () => {
    setUploadAvatarURL(null);
    setUploadedAvatar(false);
    fileInputRef.current.value = null;
  };

  return (
    <Section>
      <Title>My information:</Title>
      <Card>
        <CardBtn
          as={isEditFormInactive ? LuPencilLine : GrClose}
          onClick={() => setIsEditFormInactive(!isEditFormInactive)}
        />
        <AvatarContainer>
          <Avatar src={uploadAvatarURL ?? user.avatarURL} alt="User avatar" />
          {!isEditFormInactive && (
            <form onSubmit={handleAvatarConfirm}>
              <UploadInput
                id="file-upload"
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                ref={fileInputRef}
              />
              {uploadedAvatar ? (
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
        <UserForm isEditFormInactive={isEditFormInactive} formik={formik} />
        <LogoutBtn />
      </Card>
    </Section>
  );
};

export default UserData;
