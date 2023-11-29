import { styled } from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const Typography = styled.p`
  font-size: 16px;
  color: var(--yellow);

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Svg = styled.svg`
  width: 28px;
  height: 28px;
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 20px;
`;
