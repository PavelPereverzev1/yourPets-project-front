import RegisterForm from 'components/RegisterForm';
import { Wrapper, Title } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Wrapper>
      <Title>Registration</Title>
      <RegisterForm />
    </Wrapper>
  );
};

export default RegisterPage;
