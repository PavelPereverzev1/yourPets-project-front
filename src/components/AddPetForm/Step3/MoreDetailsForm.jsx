import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
// import { FormContext } from '../AddPetForm';
// import AddMoreDetailsForm from './AddMoreDetailsForm';
// import SellMoreDetailsForm from './SellMoreDetailsForm';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
// import ButtonsBlock from '../ButtonsBlock';

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

const MoreDetailsForm = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };

  // const formProps = useContext(FormContext);
  // const {
  //   formData,
  //   handleChange,
  //   currentStep,
  //   totalSteps,
  //   nextStep,
  //   backStep,
  //   handleSubmit,
  // } = formProps;

  return (
    <>
      <BackgroundCard>
        <TitleComponent name="Add pet" />
        <StepsBlock step={3} />
        <Formik
          validationSchema={stepThreeValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div>
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
              </div>
              <button type="button" onClick={() => props.prev(values)}>
                Back
              </button>
              <button type="submit">Done</button>
            </Form>
          )}
        </Formik>
      </BackgroundCard>
    </>
  );
};

export default MoreDetailsForm;

//   return (
//     <>
//       {formData.category === 'your pet' ? (
//         <BackgroundCard>
//           <TitleComponent name="Add pet" />
//           <StepsBlock step={currentStep} />
//           <AddMoreDetailsForm
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//           <ButtonsBlock
//             currentStep={currentStep}
//             totalSteps={totalSteps}
//             nextStep={nextStep}
//             backStep={backStep}
//             handleSubmit={handleSubmit}
//           />
//         </BackgroundCard>
//       ) : (
//         <BackgroundCard width="882px">
//           <TitleComponent name="Add pet" />
//           <StepsBlock step={currentStep} />
//           <SellMoreDetailsForm
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//           <ButtonsBlock
//             currentStep={currentStep}
//             totalSteps={totalSteps}
//             nextStep={nextStep}
//             backStep={backStep}
//             handleSubmit={handleSubmit}
//           />
//         </BackgroundCard>
//       )}
//     </>
//   );
// };

// export default MoreDetailsForm;
