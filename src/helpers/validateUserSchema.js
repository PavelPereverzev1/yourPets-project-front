import * as Yup from 'yup';

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\+380\d{9}$/;
const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

export const validateUserSchema = Yup.object({
  name: Yup.string()
    .required('Please enter your name.')
    .min(2, 'Name too short.')
    .max(16, 'Name too long.'),
  email: Yup.string()
    .matches(emailRegExp, 'Invalid email format.')
    .required('Email is required'),
  birthday: Yup.string()
    .matches(dateRegExp, 'Please use YYYY-MM-DD format.')
    .required(),
  phone: Yup.string()
    .matches(phoneRegExp, 'Please use +380XXXXXXXXX format.')
    .required(),
  city: Yup.string().required(),
});
