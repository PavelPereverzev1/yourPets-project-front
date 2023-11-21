import styled from 'styled-components';

export const EyeBtn = styled.button`
  width: 24px;
  height: 24px;

  padding: 0;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;

  stroke: ${({ stroke }) => stroke};
`;

export const Use = styled.use``;
