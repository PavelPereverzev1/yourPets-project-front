import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { ReactComponent as EyeClosedIcon } from 'images/icons/sprite.svg#icon-eye-closed';
import { ReactComponent as EyeOpenIcon } from 'images/icons/sprite.svg#icon-eye-open';
import { logIn } from 'redux/AuthSlice/operations';
import {
  // ToastText,
  LogForm,
  Title,
  Label,
  Input,
  Button,
  ExtraText,
  ErrorText,
  LinkToRegistration,
} from './LoginForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address. Example: dmytro@gmail.com')
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long.')
    .max(16, 'Password must not exceed 16 characters.')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit.'
    )
    .required('Password is required.'),
});

const initialValues = {
  email: '',
  password: '',
};

const emailInputId = nanoid();
const passwordInputId = nanoid();

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { isLoading } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(logIn({ email, password }));

      if (requestStatus === 'rejected') {
        throw new Error(payload);
      }

      resetForm();
    } catch (error) {
      // const { message } = error;

      // toast.error(<ToastText>{message}</ToastText>, {
      //   autoClose: 2000,
      // });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <LogForm>
          <Title>Login</Title>

          <Label htmlFor={emailInputId}>
            <Input
              type="email"
              id={emailInputId}
              name="email"
              placeholder="Email"
            />
            <FormError name="email" />
          </Label>

          <Label htmlFor={passwordInputId}>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              id={passwordInputId}
              name="password"
              placeholder="Password"
            />
            {passwordVisible ? (
              <EyeClosedIcon onClick={togglePasswordVisibility} />
            ) : (
              <EyeOpenIcon onClick={togglePasswordVisibility} />
            )}
            <FormError name="password" />
          </Label>

          <Button disabled={isLoading} type="submit">
            {isLoading ? 'Loading...' : 'Login'}
          </Button>

          <ExtraText>
            Don't have an account?
            <LinkToRegistration to="/register">Register</LinkToRegistration>
          </ExtraText>
        </LogForm>
      </Formik>
    </>
  );
};

export default LoginForm;
