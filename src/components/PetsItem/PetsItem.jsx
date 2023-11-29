import sprite from 'images/icons/sprite.svg';
import {
  Card,
  DataWrapper,
  DeleteBtn,
  DeleteIcon,
  Image,
  Text,
  TextTitle,
  Thumb,
} from './PetsItem.styled';
import { formatDate } from 'helpers/formatDate';

const PetsItem = ({ pet, handleDelete }) => {
  const { name, birthday, petType, comments, photoURL, _id } = pet;

  return (
    <Card>
      <DeleteBtn onClick={() => handleDelete(_id)}>
        <DeleteIcon>
          <use href={`${sprite}#icon-trash-2`} />
        </DeleteIcon>
      </DeleteBtn>
      <Thumb>
        <Image src={photoURL} alt={petType} loading="lazy" />
      </Thumb>
      <DataWrapper>
        <Text>
          <TextTitle>Name: </TextTitle>
          {name}
        </Text>
        <Text>
          <TextTitle>Date of birth: </TextTitle>
          {formatDate(birthday, 'DD.MM.YYYY')}
        </Text>
        <Text>
          <TextTitle>Type: </TextTitle>
          {petType}
        </Text>
        <Text>
          <TextTitle>Comments: </TextTitle>
          {comments}
        </Text>
      </DataWrapper>
    </Card>
  );
};

export default PetsItem;
