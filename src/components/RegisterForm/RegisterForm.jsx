import { RegForm, Input, Button, } from "./RegisterForm.styled";

const RegisterForm = () => {
  return <RegForm>

    <Input type="text" name="name" required placeholder="Name" />
    <Input type="email" name="email" required placeholder="dmytro@gmail.com" />
    <Input type="password" name="password" required placeholder="Password" />
    <Input type="password" name="password" required placeholder="Confirm password" />

    <Button>Registration</Button>

  </RegForm>
};

export default RegisterForm;
