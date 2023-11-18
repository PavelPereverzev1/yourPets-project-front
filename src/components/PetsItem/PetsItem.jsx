import React from 'react';
import { Card, DataWrapper, Image, Text, TextTitle } from './PetsItem.styled';

const PetsItem = ({ pet }) => {
  const { image, type, name, datebirth, comments } = pet;
  return (
    <Card>
      <Image
        src={image}
        alt={type}
        width="10.0625rem"
        height="10.0625rem"
        loading="lazy"
      />
      <DataWrapper>
        <Text>
          <TextTitle>Name: </TextTitle>
          {name}
        </Text>
        <Text>
          <TextTitle>Date of birth: </TextTitle>
          {datebirth}
        </Text>
        <Text>
          <TextTitle>Type: </TextTitle>
          {type}
        </Text>
        <Text>
          <TextTitle>Comments: </TextTitle>
          {comments}
        </Text>
      </DataWrapper>
    </Card>
  );
};

export default PetsItem;
