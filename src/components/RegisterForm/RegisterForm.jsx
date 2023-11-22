import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import ShowPasswordButton from 'components/ShowPasswordButton';
import ClearInputFieldButton from 'components/ClearInputFieldButton';
import ConfirmationIconComponent from 'components/ConfirmationIconComponent';
import { useAuth } from 'hooks/useAuth';
import { register } from 'redux/AuthSlice/operations';
import {
  ToastText,
  RegForm,
  Title,
  Label,
  InputForEmailName,
  InputForPasswords,
  Button,
  ExtraText,
  ErrorText,
  LinkToLogin,
} from './RegisterForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long.')
    .max(16, 'Name must not exceed 16 characters.')
    .required('Name is required.'),
  email: yup
    .string()
    .email('Example: dmytro@gmail.com')
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
  confirmPassword: yup
    .string()
    .required('Confirm password is required.')
    .oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const nameInputId = nanoid();
const emailInputId = nanoid();
const passwordInputId = nanoid();
const confirmPasswordInputId = nanoid();

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // const navigate = useNavigate();

  const { isLoading } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      const {
        meta: { requestStatus },
        payload,
      } = await dispatch(register({ name, email, password }));

      if (requestStatus === 'rejected') {
        throw new Error(payload);
      }

      resetForm();

      // navigate('/user');
    } catch (error) {
      const { message } = error;

      toast.error(<ToastText>{message}</ToastText>, {
        autoClose: 2000,
      });

      resetForm({
        values: {
          name,
          email,
          password,
          confirmPassword: '',
        },
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
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
          <RegForm>
            <Title>Registration</Title>

            <Label htmlFor={nameInputId}>
              <InputForEmailName
                type="text"
                id={nameInputId}
                name="name"
                placeholder="Name"
                error={touched.name && errors.name ? 1 : 0}
                valid={touched.name && !errors.name ? 1 : 0}
              />
              {touched.name && errors.name && (
                <ClearInputFieldButton name="name" />
              )}
              {touched.name && !errors.name && <ConfirmationIconComponent />}
              <FormError name="name" />
            </Label>

            <Label htmlFor={emailInputId}>
              <InputForEmailName
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
              <InputForPasswords
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
              {touched.password && !errors.password ? (
                <>
                  {setPasswordVisible(false)}
                  <ConfirmationIconComponent positionRight={46} />
                  <ShowPasswordButton
                    stroke="var(--gray)"
                    isOpen={passwordVisible}
                    onClick={togglePasswordVisibility}
                    disabled
                  />
                </>
              ) : (
                <ShowPasswordButton
                  isOpen={passwordVisible}
                  onClick={togglePasswordVisibility}
                />
              )}
              <FormError name="password" />
            </Label>

            <Label htmlFor={confirmPasswordInputId}>
              <InputForPasswords
                type={confirmPasswordVisible ? 'text' : 'password'}
                id={confirmPasswordInputId}
                name="confirmPassword"
                placeholder="Confirm password"
                error={
                  touched.confirmPassword && errors.confirmPassword ? 1 : 0
                }
                valid={
                  touched.confirmPassword && !errors.confirmPassword ? 1 : 0
                }
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <ClearInputFieldButton
                  name="confirmPassword"
                  positionRight={46}
                />
              )}
              {touched.confirmPassword && !errors.confirmPassword && (
                <ConfirmationIconComponent positionRight={46} />
              )}
              <ShowPasswordButton
                isOpen={confirmPasswordVisible}
                onClick={toggleConfirmPasswordVisibility}
              />
              <FormError name="confirmPassword" />
            </Label>

            <Button disabled={isLoading} type="submit">
              {isLoading ? 'Loading...' : 'Registration'}
            </Button>

            <ExtraText>
              Already have an account?{' '}
              <LinkToLogin to="/login">Login</LinkToLogin>
            </ExtraText>
          </RegForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
