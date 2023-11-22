import styled from 'styled-components';

export const ConfirmationSvg = styled.svg`
  width: 24px;
  height: 24px;

  position: absolute;
  top: 50%;
  right: ${({ $positionRight }) => `${$positionRight}px`};
  transform: translateY(-50%);

  stroke: var(--green);
`;

export const Use = styled.use``;
