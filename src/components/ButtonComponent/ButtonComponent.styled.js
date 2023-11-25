import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${props => props.width || '248px'};
  height: ${props => props.height || '38px'};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  color: var(--blueLink);
  background-color: transparent;
  border: 2px solid var(--blueLink);
  border-radius: 40px;
  fill: var(--white);
  stroke: var(--blueLink);
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition),
    fill var(--transition), stroke var(--transition);

  &:hover,
  &:focus {
    border: none;
    background-image: var(--blueGradient);
    background-color: var(--blueLink);
    color: var(--background);
    fill: var(--blueLink);
    stroke: var(--white);
  }
`;

export const FilledButton = styled(Button)`
  color: var(--white);
  background-color: var(--blueLink);
  border: none;
  fill: var(--blueLink);
  stroke: var(--white);
  transition: background-color var(--transition), color var(--transition),
    fill var(--transition), stroke var(--transition);

  &:hover,
  &:focus {
    background-image: var(--blueGradient);
    color: var(--background);
    fill: var(--white);
    stroke: var(--blueLink);
  }

  &:disabled {
    background-color: var(--blueLight);
    pointer-events: none;
  }
`;

export const RoundButton = styled(FilledButton)`
  position: sticky;
  top: 200px;
  z-index: +1;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  height: 80px;
  font-size: 12px;
  font-weight: 600;
  background-image: var(--blueGradient);
`;
