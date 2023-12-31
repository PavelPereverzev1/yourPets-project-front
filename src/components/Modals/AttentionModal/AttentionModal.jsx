import Modal from 'components/Modals/Modal/Modal';
import { Link } from 'react-router-dom';
import { BtnContainer, Container, Text, Icon, Title, ButtonOrange } from './AttentionModal.styled';
import sprite from '../../../images/icons/sprite.svg';

export default function AttentionModal({ active, setActive }) {
  return (
    <Modal active={active} setActive={setActive}>
      <Container>
        <Title>Attention</Title>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <BtnContainer>
          <ButtonOrange as={Link} to="/login">
            Log IN 
            <Icon>
                    <use href={`${sprite}#icon-pawprint-1`} />
                    </Icon>
          </ButtonOrange>
          <ButtonOrange as={Link} to="/register">
            Registration
          </ButtonOrange>
        </BtnContainer>
      </Container>
    </Modal>
  );
}
