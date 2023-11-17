import React from 'react';
import { Title } from './TitleComponent.styled';

function TitleComponent({ name }) {
  return (
    <>
      <Title>{name}</Title>
    </>
  );
}

export default TitleComponent;
