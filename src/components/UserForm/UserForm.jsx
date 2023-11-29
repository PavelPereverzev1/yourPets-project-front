import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import LogoutUserCardBtn from './LogoutUserCardBtn/LogoutUserCardBtn';
import { useWindowSize } from 'hooks/useResize';
import ValidationError from './ValidationError';
import {
  ErorrWrapper,
  Form,
  Input,
  InputWrapper,
  InputsContainer,
  Label,
} from './UserForm.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/AuthSlice';
// import StyledDatepicker from 'components/StyledDatepicker/StyledDatepicker';

const UserForm = ({ isEditFormInactive, formik }) => {
  const [screenWidth] = useWindowSize();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <InputWrapper>
          <Label htmlFor="name">Name:</Label>
          <ErorrWrapper>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.name}
            />
            <ValidationError
              touched={formik.touched.name}
              error={formik.errors.name}
            />
          </ErorrWrapper>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email:</Label>
          <ErorrWrapper>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.email}
            />
            <ValidationError
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </ErorrWrapper>
        </InputWrapper>

        {/* <InputWrapper>
          <Label htmlFor="birthday">Birthday:</Label>
          <ErorrWrapper>
            <StyledDatepicker
              selected={formik.values.birthday}
              onChange={value => formik.setFieldValue('birthday', value)}
              name="birthday"
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.birthday}
            />
            <ValidationError
              touched={formik.touched.birthday}
              error={formik.errors.birthday}
            />
          </ErorrWrapper>
        </InputWrapper> */}

        <InputWrapper>
          <Label htmlFor="birthday">Birthday:</Label>
          <ErorrWrapper>
            <Input
              type="date"
              id="birthday"
              name="birthday"
              onChange={formik.handleChange}
              value={formik.values.birthday}
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.birthday}
            />
            <ValidationError
              touched={formik.touched.birthday}
              error={formik.errors.birthday}
            />
          </ErorrWrapper>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="phone">Phone:</Label>
          <ErorrWrapper>
            <Input
              type="tel"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.phone}
            />
            <ValidationError
              touched={formik.touched.phone}
              error={formik.errors.phone}
            />
          </ErorrWrapper>
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="city">City:</Label>
          <ErorrWrapper>
            <Input
              type="text"
              id="city"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
              disabled={isEditFormInactive}
              onBlur={formik.handleBlur}
              $isValid={!formik.errors.city}
            />
            <ValidationError
              touched={formik.touched.city}
              error={formik.errors.city}
            />
          </ErorrWrapper>
        </InputWrapper>
      </InputsContainer>

      {!isEditFormInactive ? (
        <ButtonComponent
          type="submit"
          height="31px"
          width={screenWidth >= 768 ? '255px' : '248px'}
          disabled={!formik.isValid}
          $variant="filled"
        >
          {isLoading ? <span>Loading...</span> : <span>Save</span>}
        </ButtonComponent>
      ) : (
        <LogoutUserCardBtn />
      )}
    </Form>
  );
};

export default UserForm;
