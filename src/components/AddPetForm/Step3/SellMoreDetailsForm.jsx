import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import sprite from '../../../images/icons/sprite.svg';
import {
  FormSellMoreDetails,
  SexPhotoblock,
  Sexblock,
  RadioButton,
  IconSex,
  PhotoBlock,
  ImagePreview,
  PhotoInput,
  PhotoLabel,
  UploadIcon,
  LocationPriceBlock,
  DetailWrapper,
  CommentsLabel,
  CommentsInput,
  SexList,
  Label,
} from './SellMoreDetailsForm.styled';
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

const SellMoreDetailsForm = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <BackgroundCard width="882px">
      <TitleComponent name="Add pet" />
      <StepsBlock step={3} />
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <FormSellMoreDetails>
            <div>
              <SexPhotoblock>
                <Label>
                  <RadioButton type="radio" name="sex" value="female" />
                  Female
                </Label>

                <Label>
                  <RadioButton type="radio" name="sex" value="male" />
                  Male
                </Label>

                <Sexblock role="group" aria-labelledby="gender-radio-group">
                  <h3>The Sex</h3>
                  <SexList>
                    <label>
                      <RadioButton type="radio" name="sex" value="female" />
                      <IconSex>
                        <use href={`${sprite}#icon-female`} />
                      </IconSex>
                      Female
                    </label>
                    <label>
                      <RadioButton type="radio" name="sex" value="male" />
                      <IconSex>
                        <use href={`${sprite}#icon-male`} />
                      </IconSex>
                      Male
                    </label>
                  </SexList>
                  <ErrorMessage name="sex" />
                </Sexblock>

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
                </PhotoBlock>
              </SexPhotoblock>

              <LocationPriceBlock>
                <DetailWrapper>
                  <label htmlFor="location"> Location</label>
                  <Field
                    id="location"
                    name="location"
                    placeholder="Kyiv"
                  ></Field>
                  <ErrorMessage name="location" />
                </DetailWrapper>

                <DetailWrapper>
                  <label htmlFor="price"> Price</label>
                  <Field id="price" name="price" placeholder="000 USD"></Field>
                  <ErrorMessage name="price" />
                </DetailWrapper>

                <DetailWrapper>
                  <CommentsLabel htmlFor="comments"> Comments</CommentsLabel>
                  <CommentsInput
                    id="comments"
                    name="comments"
                    placeholder="Enter your comment"
                  ></CommentsInput>
                  <ErrorMessage name="comments" />
                </DetailWrapper>
              </LocationPriceBlock>
            </div>

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
          </FormSellMoreDetails>
        )}
      </Formik>
    </BackgroundCard>
  );
};

export default SellMoreDetailsForm;

// const SellMoreDetailsForm = ({ formData, handleChange, handleSubmit }) => {
//   return (
//     <>
//       <FormSellMoreDetails onSubmit={handleSubmit}>
//         <SexPhotoblock className="sexPhotoblock">
//           <Sexblock className="sexblock">
//             <h3>The Sex</h3>
//             <SexList>
//               <SexBtn
//                 type="button"
//                 name="sex"
//                 value="female"
//                 onClick={handleChange}
//               >
//                 <IconSex>
//                   <use href={`${sprite}#icon-female`} />
//                 </IconSex>
//                 Female
//               </SexBtn>
//               <SexBtn
//                 type="button"
//                 name="sex"
//                 value="male"
//                 onClick={handleChange}
//               >
//                 <IconSex>
//                   <use href={`${sprite}#icon-male`} />
//                 </IconSex>
//                 Male
//               </SexBtn>
//             </SexList>
//           </Sexblock>
//           <PhotoBlock>
//             <PhotoLabel htmlFor="upload">Load the pet's image</PhotoLabel>

//             <ImagePreview id="default-svg-preview">
//               <PhotoInput
//                 type="file"
//                 accept=".JPG, .PNG"
//                 id="upload"
//                 // onChange={handleFileUpload}
//               />
//               <UploadIcon>
//                 <use href={`${sprite}#icon-plus`} />
//               </UploadIcon>
//             </ImagePreview>
//           </PhotoBlock>
//         </SexPhotoblock>
//         <LocationPriceBlock className="locationPriceBlock">
//           <DetailWrapper>
//             <DetailLabel htmlFor="location">Location</DetailLabel>
//             <DetailInput
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Kyiv"
//             />
//           </DetailWrapper>
//           {formData.category !== 'in good hands' && (
//             <DetailWrapper>
//               <DetailLabel htmlFor="price">Price</DetailLabel>
//               <DetailInput
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="000 USD"
//               />
//             </DetailWrapper>
//           )}
//           <DetailWrapper>
//             <CommentsLabel htmlFor="comments">Comments</CommentsLabel>
//             <CommentsInput
//               type="text"
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               placeholder="Enter your comment"
//             />
//           </DetailWrapper>
//         </LocationPriceBlock>
//       </FormSellMoreDetails>
//     </>
//   );
// };

// export default SellMoreDetailsForm;
