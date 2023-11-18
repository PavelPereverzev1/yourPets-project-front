// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
// import { register } from 'redux/AuthSlice/operations';
import {
  ToastText,
  RegForm,
  Title,
  Label,
  Input,
  ButtonSwitchPasswordView,
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
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    setFormIsLoading(true);

    try {
      // const {
      //   meta: { requestStatus },
      //   payload,
      // } = await dispatch(register({ name, email, password }));

      // if (requestStatus === 'rejected') {
      //   throw new Error(payload);
      // }

      resetForm();
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
    } finally {
      setFormIsLoading(false);
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
        <RegForm>
          <Title>Registration</Title>

          <Label htmlFor={nameInputId}>
            <Input
              type="text"
              id={nameInputId}
              name="name"
              placeholder="Name"
            />
            <FormError name="name" />
          </Label>

          <Label htmlFor={emailInputId}>
            <Input
              type="email"
              id={emailInputId}
              name="email"
              placeholder="dmytro@gmail.com"
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
            <ButtonSwitchPasswordView
              type="button"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </ButtonSwitchPasswordView>
            <FormError name="password" />
          </Label>

          <Label htmlFor={confirmPasswordInputId}>
            <Input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id={confirmPasswordInputId}
              name="confirmPassword"
              placeholder="Password"
            />
            <ButtonSwitchPasswordView
              type="button"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </ButtonSwitchPasswordView>
            <FormError name="confirmPassword" />
          </Label>

          <Button disabled={formIsLoading} type="submit">
            {formIsLoading ? 'Loading...' : 'Registration'}
          </Button>

          <ExtraText>
            Already have an account?
            <LinkToLogin to="/login">Login</LinkToLogin>
          </ExtraText>
        </RegForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
