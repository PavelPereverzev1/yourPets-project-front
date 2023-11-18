import { styled } from 'styled-components';

export const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  border: 2px solid #ffc107;
  color: #ffc107;
  background-color: #fff;
  padding: 8px 20px;
  gap: 8px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 142px;
  }
  &:hover,
  &:focus {
    color: #fff;
    border: 2px solid transparent;
    background-color: #ffc107;
    cursor: pointer;
  }
`;
