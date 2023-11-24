import React from 'react';
import { Button, FilledButton, RoundButton } from './ButtonComponent.styled';

export default function ButtonComponent(props) {
  switch (props.$variant) {
    case 'filled':
      return <FilledButton {...props}>{props.children}</FilledButton>;

    case 'round':
      return <RoundButton {...props}>{props.children}</RoundButton>;

    default:
      return <Button {...props}>{props.children}</Button>;
  }
}
