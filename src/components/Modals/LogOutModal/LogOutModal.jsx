import Modal from 'components/Modals/Modal/Modal';
import { Button } from 'components/ButtonComponent/ButtonComponent.styled';
import sprite from '../../../images/icons/sprite.svg';
import { BtnContainer, Container, Icon, Title } from './LogOutModal.styled';

export default function LogOutModal({ active, setActive, yes }) {
  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <Title>Already leaving?</Title>
        <BtnContainer>
          <Button width={'256px'} onClick={() => setActive(false)}>
            Cancel
          </Button>
          <Button width={'256px'} onClick={() => yes()}>
            Yes
            <Icon>
              <use href={`${sprite}#icon-logout`} />
            </Icon>
          </Button>
        </BtnContainer>
      </Container>
    </Modal>
  );
}