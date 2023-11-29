import { styled } from 'styled-components';

export const AddToFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 256px;
  padding: 9px 20px;
  height: 40px;
  border-radius: 40px;
  background-color: var(--blueLink);
  border: 2px solid var(--blueLink);
  cursor: pointer;
  p {
    color: var(--white);
  }
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    background-color: var(--white);

    p {
      color: var(--blueLink);
    }
    svg {
      stroke: var(--blueLink);
      fill: var(--blueLink);
    }
  }
  @media screen and (min-width: 768px) {
    min-width: 129px;
  }
`;

export const AddToFavoriteText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 21.86px;
`;
