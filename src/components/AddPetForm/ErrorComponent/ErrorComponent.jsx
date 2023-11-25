import React from 'react';
import { ErrorMessage } from 'formik';
import { ErrorText } from './ErrorComponent.styled';

const ErrorComponent = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export default ErrorComponent;
