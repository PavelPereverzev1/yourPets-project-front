import UserForm from 'components/UserForm/UserForm';
import sprite from 'images/icons/sprite.svg';
import {
  CardBtn,
  Card,
  Section,
  Title,
  AvatarContainer,
  Avatar,
  UploadBtn,
  UploadInput,
  EditIcon,
  CloseIcon,
  Thumb,
  CameraIcon,
  ConfirmBtn,
  BtnWrapper,
  RemoveBtn,
  RemoveIcon,
} from './UserData.styled';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserDataLoaded, selectUser } from 'redux/AuthSlice';
import { refreshUser, updateUser } from 'redux/AuthSlice/operations';
import { validateUserSchema } from 'helpers/validateUserSchema';

const UserData = () => {
  const [isEditFormInactive, setIsEditFormInactive] = useState(true);
  const [uploadAvatarURL, setUploadAvatarURL] = useState(null);
  const [uploadedAvatar, setUploadedAvatar] = useState(false);

  const user = useSelector(selectUser);
  const isUserDataLoaded = useSelector(selectIsUserDataLoaded);
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  useEffect(() => {
    if (!isUserDataLoaded) {
      dispatch(refreshUser());
    }
  }, [dispatch, isUserDataLoaded]);

  const handleSubmit = async values => {
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
  };

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

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
    },
    validationSchema: validateUserSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Section>
      <Title>My information:</Title>
      <Card>
        <CardBtn onClick={() => setIsEditFormInactive(!isEditFormInactive)}>
          {isEditFormInactive ? (
            <EditIcon>
              <use href={`${sprite}#icon-edit-2`} />
            </EditIcon>
          ) : (
            <CloseIcon>
              <use href={`${sprite}#icon-cross-small`} />
            </CloseIcon>
          )}
        </CardBtn>
        <AvatarContainer>
          <Thumb>
            <Avatar
              src={uploadAvatarURL ?? user.avatarURL}
              alt="User avatar"
              loading="lazy"
            />
          </Thumb>
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
                <BtnWrapper>
                  <ConfirmBtn type="submit">
                    <CameraIcon>
                      <use href={`${sprite}#icon-check`} />
                    </CameraIcon>
                    Confirm
                  </ConfirmBtn>
                  <RemoveBtn type="button" onClick={handleAvatarRemove}>
                    <RemoveIcon>
                      <use href={`${sprite}#icon-cross-small`} />
                    </RemoveIcon>
                  </RemoveBtn>
                </BtnWrapper>
              ) : (
                <UploadBtn htmlFor="file-upload">
                  <CameraIcon>
                    <use href={`${sprite}#icon-camera`} />
                  </CameraIcon>
                  Edit Photo
                </UploadBtn>
              )}
            </form>
          )}
        </AvatarContainer>
        <UserForm isEditFormInactive={isEditFormInactive} formik={formik} />
      </Card>
    </Section>
  );
};

export default UserData;
