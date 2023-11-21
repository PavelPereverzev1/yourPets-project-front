import { styled } from 'styled-components';

export const AddToFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 256px;
  height: 40px;
  border-radius: 40px;
  background-color: #54adff;
  border: 2px solid #54adff;
  cursor: pointer;
  p {
    color: #fff;
  }
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    background-color: #fff;

    p {
      color: #54adff;
    }
    svg {
      stroke: #54adff;
    }
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const AddToFavoriteText = styled.p`
  font-weight: 700;
  font-size: 16px;
`;
