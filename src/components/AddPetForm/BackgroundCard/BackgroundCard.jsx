import React from 'react';
import { Card } from './BackgroundCard.styled';

export default function BackgroundCard({ children, width }) {
  return (
    <>
      <Card width={width}>{children}</Card>
    </>
  );
}
