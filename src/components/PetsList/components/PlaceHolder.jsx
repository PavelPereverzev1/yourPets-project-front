import {
  MisisngPetElement,
  ImageWraper,
  MissingPetImage,
  MissingPetDis,
} from './Placeholder.styled';
import placeholder from '../../../images/placeholder/placeholder.jpg';
export const PlaceHolder = () => {
  return (
    <MisisngPetElement>
      <MissingPetDis>
        Hello there! 🐾 It seems like your profile is missing the delightful
        presence of your furry or feathered friends. Would you consider adding
        your beloved pets to your profile?
      </MissingPetDis>
      <ImageWraper>
        <MissingPetImage src={`${placeholder}`} alt="" />
      </ImageWraper>
    </MisisngPetElement>
  );
};
