import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid var(--blueLink);
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? 'var(--blueLink)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--background)' : 'var(--blueLink)'};
  cursor: pointer;
  outline: none;

  &:hover:not(:disabled) {
    background-color: ${() => 'var(--blueLink)'};
    color: ${() => 'var(--background)'};
  }

  &:hover,
  &:focus {
    border: 1px solid var(--blueLink);
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media screen and (min-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
