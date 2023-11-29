import React from 'react';
import { Card } from './BackgroundCard.styled';

export default function BackgroundCard({ children, noticetype }) {
  return <Card category={noticetype}>{children}</Card>;
}
