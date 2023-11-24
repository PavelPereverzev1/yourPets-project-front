import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useRef } from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  FormAddMoreDetails,
  DetailWrapper,
  PhotoBlock,
  PhotoLabel,
  ImagePreview,
  UploadIcon,
  // PhotoInput,
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
// import Image from '../../../images/pets/pet-photo-example.png';
import PreviewImage from '../ImageForm/PreviewImage';

const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];

const stepThreeValidationSchema = Yup.object().shape({
  file: Yup.mixed()
    .nullable()
    .required('Select a file')
    .test(
      'FILE_SIZE',
      'Uploaded file must be 3MB or less',
      value => !value || (value && value.size <= 3145728)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),

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

  const fileRef = useRef(null);
  console.log('fileRef', fileRef.current);

  return (
    <BackgroundCard>
      <TitleComponent name="Add pet" />
      <StepsBlock step={3} />
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <FormAddMoreDetails>
            <PhotoBlock>
              <button
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                Upload
              </button>
              <PreviewImage file={values.file} />

              <PhotoLabel htmlFor="file">Load the pet’s image:</PhotoLabel>
              <ImagePreview>
                <input
                  ref={fileRef}
                  hidden
                  type="file"
                  // accept=".JPG, .PNG"
                  id="file"
                  name="file"
                  onChange={event => {
                    setFieldValue('file', event.target.files[0]);
                  }}
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
