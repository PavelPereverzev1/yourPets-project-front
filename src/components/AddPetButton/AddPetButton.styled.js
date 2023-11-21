import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsPlus, BsPlusLg } from 'react-icons/bs';

export const Button = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: none;
  padding: 20px 17px;
  gap: 4px;
  font-weight: 600;
  font-size: 12px;

  text-decoration: none;
  color: var(--white);
  background-color: var(--blueLink);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 3px 8px 14px 0px #88c6fd19;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: var(--blueGradient);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 129px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 18px;
    border-radius: 40px;
    gap: 8px;
  }
`;
export const PlusIconSmall = styled(BsPlus)`
  width: 24px;
  height: 24px;
`;

export const PlusIconLarge = styled(BsPlusLg)`
  width: 24px;
  height: 24px;
`;
