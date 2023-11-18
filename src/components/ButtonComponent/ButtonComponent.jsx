import React from 'react';
import { Button } from './ButtonComponent.styled';

export default function ButtonComponent({ children, width }) {
  return (
    <>
      <Button type="button" width={width}>
        {children}
      </Button>
    </>
  );
}
