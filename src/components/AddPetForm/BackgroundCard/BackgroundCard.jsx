import React from 'react';
import { Card } from './BackgroundCard.styled';

export default function BackgroundCard({ children, noticeType }) {
  return <Card noticeType={noticeType}>{children}</Card>;
}
