import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box } from './AddPetForm2.styled.js';
import { useState } from 'react';

export default function AddPetForm() {
  const [data, setData] = useState({
    category: '',
    name: '',
    date: '',
    type: '',
    titleOfAdd: '',
    file: '',
    sex: '',
    location: '',
    price: '',
    comments: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };
  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handleBackStep} data={data} />,
    <StepThree next={handleNextStep} prev={handleBackStep} data={data} />,
  ];
  console.log('data:', data);

  return (
    <div className="Card">
      <div className="CardContent">{steps[currentStep]}</div>
    </div>
  );
}
//components of Steps
const stepOneValidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Choose one of the available categories')
    .oneOf(['sell', 'lost/found', 'in good hands', 'your pet']),
});

const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Box role="group" aria-labelledby="category-radio-group">
            <label>
              <Field type="radio" name="category" value="your pet" />
              your pet
            </label>

            <label>
              <Field type="radio" name="category" value="sell" />
              sell
            </label>

            <label>
              <Field type="radio" name="category" value="lost/found" />
              lost/found
            </label>

            <label>
              <Field type="radio" name="category" value="in good hands" />
              in good hands
            </label>
            <ErrorMessage name="category" />
          </Box>
          <button type="button">Back</button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};
const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter the pet's name")
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  date: Yup.string()
    .required('Enter the date in DD-MM-YYYY format')
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d\d$/,
      'Invalid date format'
    ),

  type: Yup.string()
    .required('Enter the type')
    .min(2, 'min 2 symbols')
    .max(16, 'max 16 symbols'),

  titleOfAdd: Yup.string()
    .required('Enter the title of the add')
    .min(3, 'min 3 symbols')
    .max(16, 'max 16 symbols'),
});

const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Box>
            <label htmlFor="titleOfAdd"> Title of add</label>
            <Field id="titleOfAdd" name="titleOfAdd"></Field>
            <ErrorMessage name="titleOfAdd" />

            <label htmlFor="name"> Pet's name</label>
            <Field id="name" name="name"></Field>
            <ErrorMessage name="name" />

            <label htmlFor="date"> Date Of Birth</label>
            <Field id="date" name="date"></Field>
            <ErrorMessage name="date" />

            <label htmlFor="type"> Type</label>
            <Field id="type" name="type"></Field>
            <ErrorMessage name="type" />
          </Box>
          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};
const stepThreeValidationSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('Select a file')
    .test('fileSize', 'The file must be less than 3MB', value => {
      if (!value) return true; // Дозволити порожні значення
      return value.size <= 3145728; // 3MB in bytes
    }),

  sex: Yup.string().when('category', {
    is: val => ['sell', 'lost-found', 'in-good-hands'].includes(val),
    then: Yup.string().required('Select gender').oneOf(['male', 'female']),
  }),

  location: Yup.string().when('category', {
    is: val => ['sell', 'lost-found', 'in-good-hands'].includes(val),
    then: Yup.string().required('Enter location'),
  }),

  price: Yup.number().when('category', {
    is: val => val === 'sell',
    then: Yup.number()
      .required('Enter price')
      .min(1, 'The price must be greater than 0'),
  }),

  comments: Yup.string().max(120, 'max 120 symbols'),
});

const StepThree = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };
  return (
    <Formik
      validationSchema={stepThreeValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Box>
            <div>
              <div role="group" aria-labelledby="gender-radio-group">
                <label>
                  <Field type="radio" name="sex" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="sex" value="male" />
                  Male
                </label>
                <ErrorMessage name="sex" />
              </div>

              <label htmlFor="file"> Load the pet’s image: </label>
              <Field id="file" name="file" type="file"></Field>
              <ErrorMessage name="file" />
            </div>

            <div>
              <label htmlFor="location"> Location</label>
              <Field id="location" name="location"></Field>
              <ErrorMessage name="location" />

              <label htmlFor="price"> Price</label>
              <Field id="price" name="price"></Field>
              <ErrorMessage name="price" />

              <label htmlFor="comments"> Comments</label>
              <Field id="comments" name="comments"></Field>
              <ErrorMessage name="comments" />
            </div>
          </Box>
          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Done</button>
        </Form>
      )}
    </Formik>
  );
};
