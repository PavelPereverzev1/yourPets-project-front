import { styled } from 'styled-components';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: 0.64px;
  color: var(--gray);
  background: none;
  border: none;
  margin-right: auto;
  cursor: pointer;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--blueLink);
`;
