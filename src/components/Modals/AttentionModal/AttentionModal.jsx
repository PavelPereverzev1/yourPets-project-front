import Modal from 'components/Modals/Modal/Modal';
import { Link } from 'react-router-dom';
import { BtnContainer, Container, Text, Title } from './AttentionModal.styled';
import { AuthBtn } from 'components/Header/AuthNavigation/AuthNavigation.styled';

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
          <AuthBtn as={Link} to="/login">
            Log IN
          </AuthBtn>
          <AuthBtn as={Link} to="/register">
            Registration
          </AuthBtn>
        </BtnContainer>
      </Container>
    </Modal>
  );
}
