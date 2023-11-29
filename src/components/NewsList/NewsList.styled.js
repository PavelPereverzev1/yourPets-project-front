import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const NotFoundText = styled.p`
  color: #111111;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  text-align: center;
  margin-bottom: 40px;
`;
