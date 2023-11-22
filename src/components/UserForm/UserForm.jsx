import { Button, Form, Input, Label } from './UserForm.styled';

const UserForm = ({ isEditFormInactive, formik }) => {
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        disabled={isEditFormInactive}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        disabled={isEditFormInactive}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <Label htmlFor="birthday">Birthday</Label>
      <Input
        type="date"
        id="birthday"
        name="birthday"
        onChange={formik.handleChange}
        value={formik.values.birthday}
        disabled={isEditFormInactive}
        onBlur={formik.handleBlur}
      />
      {formik.touched.birthday && formik.errors.birthday ? (
        <div>{formik.errors.birthday}</div>
      ) : null}
      <Label htmlFor="phone">Phone</Label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        disabled={isEditFormInactive}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}
      <Label htmlFor="city">City</Label>
      <Input
        type="text"
        id="city"
        name="city"
        onChange={formik.handleChange}
        value={formik.values.city}
        disabled={isEditFormInactive}
        onBlur={formik.handleBlur}
      />
      {formik.touched.city && formik.errors.city ? (
        <div>{formik.errors.city}</div>
      ) : null}
      {!isEditFormInactive && <Button type="submit">Save</Button>}
    </Form>
  );
};

export default UserForm;
