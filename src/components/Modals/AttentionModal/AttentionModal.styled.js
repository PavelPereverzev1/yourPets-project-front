import styled from 'styled-components';
import { PiPawPrint } from 'react-icons/pi';

export const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 60px 40px;
    gap: 40px;
    max-width: 608px;
  }
`;
export const BtnContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    flex-direction: row;
    gap: 20px;
  }
`;
export const Title = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32.78px;
  letter-spacing: 0.3px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49.18px;
  }
`;
export const Text = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
export const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 16px;
  border: 2px solid var(--yellow);
  color: var(--yellow);
  background-color: var(--white);
  padding: 7px 20px;
  gap: 8px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    width: 168px;
  }
  &:hover,
  &:focus {
    color: var(--white);
    border: 2px solid transparent;
    background-color: var(--yellow);
    cursor: pointer;
  }
`;
export const Icon = styled(PiPawPrint)`
  width: 22px;
  height: 22px;
  transform: rotate(25deg);
  @media screen and (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
