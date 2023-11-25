import React from 'react';
import { Card } from './BackgroundCard.styled';

export default function BackgroundCard({ children, width, height }) {
  return (
    <>
      <Card width={width} height={height}>
        {children}
      </Card>
    </>
  );
}
