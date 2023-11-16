import React from 'react';
import { Button } from './ButtonComponent.styled';

export default function ButtonComponent({ name, width }) {
  return (
    <>
      <Button type="button" width={width}>
        {name}
      </Button>
    </>
  );
}
