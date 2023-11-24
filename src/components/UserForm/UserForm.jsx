import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import LogoutUserCardBtn from './LogoutUserCardBtn/LogoutUserCardBtn';
import { useWindowSize } from 'hooks/useResize';
import ValidationError from './ValidationError';
import {
  Form,
  Input,
  InputContainer,
  InputWrapper,
  Label,
} from './UserForm.styled';

const UserForm = ({ isEditFormInactive, formik }) => {
  const [screenWidth] = useWindowSize();

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputContainer>
        <InputWrapper>
          <Label htmlFor="name">Name:</Label>
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
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="email">Email:</Label>
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
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="birthday">Birthday:</Label>
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
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="phone">Phone:</Label>
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
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="city">City:</Label>
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
        </InputWrapper>
      </InputContainer>

      {!isEditFormInactive ? (
        <ButtonComponent
          type="submit"
          height="31px"
          width={screenWidth >= 768 ? '255px' : '248px'}
          disabled={!formik.isValid}
          $variant="filled"
        >
          Save
        </ButtonComponent>
      ) : (
        <LogoutUserCardBtn />
      )}
    </Form>
  );
};

export default UserForm;
