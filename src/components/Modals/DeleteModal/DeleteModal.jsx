import Modal from 'components/Modals/Modal/Modal';
import {
  BigText,
  BtnContainer,
  Container,
  Icon,
  Text,
  Title,
} from './DeleteModal.styled';
import { Button } from 'components/ButtonComponent/ButtonComponent.styled';
import sprite from '../../../images/icons/sprite.svg';

export default function DeleteModal({ active, setActive, yes, title }) {
  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <Title>Delete adverstiment?</Title>
        <Text>
          Are you sure you want to delete{' '}
          <BigText>{title}</BigText> You can`t undo this
          action.
        </Text>
        <BtnContainer>
          <Button width={'256px'} onClick={() => setActive(false)}>
            No
          </Button>
          <Button width={'256px'} onClick={() => yes()}>
            Yes
            <Icon>
              <use href={`${sprite}#icon-trash-2`} />
            </Icon>
          </Button>
        </BtnContainer>
      </Container>
    </Modal>
  );
}
