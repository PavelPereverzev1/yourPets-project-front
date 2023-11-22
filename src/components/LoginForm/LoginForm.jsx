import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import ShowPasswordButton from 'components/ShowPasswordButton';
import ClearInputFieldButton from 'components/ClearInputFieldButton';
import ConfirmationIconComponent from 'components/ConfirmationIconComponent';
import { useAuth } from 'hooks/useAuth';
import { logIn } from 'redux/AuthSlice/operations';
import {
  ToastText,
  LogForm,
  Title,
  Label,
  InputForEmail,
  InputForPassword,
  Button,
  ExtraText,
  ErrorText,
  PasswordSecureText,
  LinkToRegister,
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
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Example: user@gmail.com'
    )
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long.')
    .max(16, 'Password must not exceed 16 characters.')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,16}$/,
      'Require 1 uppercase, 1 lowercase, and 1 digit.'
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

  const navigate = useNavigate();

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

      navigate('/user');
    } catch (error) {
      const { message } = error;

      toast.error(<ToastText>{message}</ToastText>, {
        autoClose: 2000,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <LogForm>
            <Title>Login</Title>

            <Label htmlFor={emailInputId}>
              <InputForEmail
                type="email"
                id={emailInputId}
                name="email"
                placeholder="Email"
                error={touched.email && errors.email ? 1 : 0}
                valid={touched.email && !errors.email ? 1 : 0}
              />
              {touched.email && errors.email && (
                <ClearInputFieldButton name="email" />
              )}
              {touched.email && !errors.email && <ConfirmationIconComponent />}
              <FormError name="email" />
            </Label>

            <Label htmlFor={passwordInputId}>
              <InputForPassword
                type={passwordVisible ? 'text' : 'password'}
                id={passwordInputId}
                name="password"
                placeholder="Password"
                error={touched.password && errors.password ? 1 : 0}
                valid={touched.password && !errors.password ? 1 : 0}
              />
              {touched.password && errors.password && (
                <ClearInputFieldButton name="password" positionRight={46} />
              )}
              {touched.password && !errors.password && (
                <ConfirmationIconComponent positionRight={46} />
              )}
              <ShowPasswordButton
                isOpen={passwordVisible}
                onClick={togglePasswordVisibility}
              />
              {touched.password && !errors.password && !passwordVisible && (
                <PasswordSecureText>Password is secure.</PasswordSecureText>
              )}
              <FormError name="password" />
            </Label>

            <Button disabled={isLoading} type="submit">
              {isLoading ? 'Loading...' : 'Login'}
            </Button>

            <ExtraText>
              Don't have an account?{' '}
              <LinkToRegister to="/register">Register</LinkToRegister>
            </ExtraText>
          </LogForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
