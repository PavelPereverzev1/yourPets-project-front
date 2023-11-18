import Modal from 'components/Modal/Modal';
import { BigText, BtnContainer, Container, Text, Title } from './ModalDelete.styled';
import { Button } from 'components/ButtonComponent/ButtonComponent.styled';

export default function ModalDelete({ active, setActive, yes }) {
  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <Title>Delete<tr/> adverstiment?</Title>
        <Text>
          Are you sure you want to delete<tr/> <BigText>“Cute dog looking for a home”?</BigText> <tr/> You
          can`t undo this action.
        </Text>
        <BtnContainer>
          <Button type="button">No</Button>
          <Button type="button" onClick={()=>yes()}>Yes</Button>
        </BtnContainer>
      </Container>
    </Modal>
  );
}
