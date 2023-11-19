import Modal from 'components/Modal/Modal';
import { BigText, BtnContainer, Container, Icon, Text, Title } from './ModalDelete.styled';
import { Button } from 'components/ButtonComponent/ButtonComponent.styled';
import sprite from '../../images/icons/sprite.svg';


export default function ModalDelete({ active, setActive, yes }) {
  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <Title>Delete adverstiment?</Title>
        <Text>
          Are you sure you want to delete <BigText>“Cute dog looking for a home”?</BigText>  You
          can`t undo this action.
        </Text>
        <BtnContainer>
          <Button type="button" onClick={()=>setActive(false)}>No</Button>
          <Button type="button" onClick={()=>yes()}>Yes
            <Icon>
              <use href={`${sprite}#icon-trash-2`} />
            </Icon>
          </Button>
        </BtnContainer>
      </Container>
    </Modal>
  );
}
