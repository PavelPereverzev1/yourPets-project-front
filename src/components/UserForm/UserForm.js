import { useFormik } from 'formik';
import { Button, Form, Input, Label } from './UserForm.styled';
import user from './user.json';

const UserForm = () => {
  const formik = useFormik({
    initialValues: user,
    onSubmit: values => console.log(values),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Label htmlFor="birthday">Birthday</Label>
      <Input
        type="date"
        id="birthday"
        name="birthday"
        onChange={formik.handleChange}
        value={formik.values.birthday}
      />
      <Label htmlFor="phone">Phone</Label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <Label htmlFor="city">City</Label>
      <Input
        type="text"
        id="city"
        name="city"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default UserForm;
