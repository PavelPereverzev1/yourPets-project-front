import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  FormAddMoreDetails,
  DetailWrapper,
  PhotoBlock,
  PhotoLabel,
  ImagePreview,
  UploadIcon,
  PhotoInput,
  CommentsInput,
  CommentsLabel,
} from './AddMoreDetails.styled';
// import iconPlus from '../../../images/icons/sprite.svg';
import BackgroundCard from '../BackgroundCard';
import TitleComponent from '../../TitleComponent/TitleComponent';
import StepsBlock from '../StepsBlock';
import {
  ButtonBlue,
  ButtonWhite,
  BtnIcon,
} from '../ButtonsBlock/ButtonsBlock.styled';

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

const AddMoreDetailsForm = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <BackgroundCard>
      <TitleComponent name="Add pet" />
      <StepsBlock step={3} />
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormAddMoreDetails>
            <PhotoBlock>
              <PhotoLabel htmlFor="file">Load the pet’s image:</PhotoLabel>
              <ImagePreview id="default-svg-preview">
                <PhotoInput
                  type="file"
                  accept=".JPG, .PNG"
                  id="file"
                  name="file"
                />
                <UploadIcon>
                  <use href={`${sprite}#icon-plus`} />
                </UploadIcon>
              </ImagePreview>

              <ErrorMessage name="file" />
            </PhotoBlock>

            <DetailWrapper>
              <CommentsLabel htmlFor="comments"> Comments</CommentsLabel>
              <CommentsInput
                id="comments"
                name="comments"
                placeholder="Enter your comment"
              ></CommentsInput>
              <ErrorMessage name="comments" />
            </DetailWrapper>

            <ButtonWhite type="button" onClick={() => props.prev(values)}>
              <BtnIcon>
                <use href={`${sprite}#icon-arrow-left`} />
              </BtnIcon>
              Back
            </ButtonWhite>
            <ButtonBlue type="submit">
              Done
              <BtnIcon>
                <use href={`${sprite}#icon-pawprint-1`} />
              </BtnIcon>
            </ButtonBlue>
          </FormAddMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default AddMoreDetailsForm;

// const AddMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
//   return (
//     <div>
//       <AddMoreDetailsWrapper onSubmit={handleSubmit}>
//         <PhotoBlock>
//           <PhotoLabel htmlFor="upload">Load the pet's image</PhotoLabel>

//           <ImagePreview id="default-svg-preview">
//             <PhotoInput
//               type="file"
//               accept=".JPG, .PNG"
//               id="upload"
//               // onChange={handleFileUpload}
//             />
//             <UploadIcon>
//               <use href={`${sprite}#icon-plus`} />
//             </UploadIcon>
//           </ImagePreview>
//         </PhotoBlock>

//         <DetailWrapper>
//           <CommentsLabel htmlFor="comments">Comments</CommentsLabel>
//           <CommentsInput
//             type="text"
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             placeholder="Enter your comment"
//           />
//         </DetailWrapper>
//       </AddMoreDetailsWrapper>
//     </div>
//   );
// };

// export default AddMoreDetailsForm;
