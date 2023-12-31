import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding: 68px 16px 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 768px){
        padding: 60px 129px;
    }
`
export const Title = styled.h2`
    font-family: Manrope, sans-serif;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: 0.3px;
    @media screen and (min-width: 768px){
        font-size: 36px;
        line-height: 49.18px;
        margin-bottom: 52px;
    }
`
export const Text = styled.p`
    font-family: Manrope, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    margin-bottom: 40px;
    @media screen and (min-width: 768px){
        font-size: 24px;
        line-height: 32.78px;
        margin-bottom: 60px;
    }
`
const sharedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 38px;
  padding: 8px 28px;
  background-color: transparent;
  cursor: pointer;
  color: var(--blueLink);
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.3px;
`;
export const Icon = styled.svg`
    width: 24px;
    height: 24px;
    fill: var(--blueLink);
    transition: fill var(--transition);
`
export const ButtonBlue = styled.button`
  ${sharedStyles};
  width: 248px;
  border: 2px solid var(--blueLink);
  border-radius: 40px;
  transition: background-image var(--transition),
    color var(--transition);

  &:hover,
  &:focus {
    background-image: var(--blueGradient);
    color: var(--background);
  }

  &:hover ${Icon}, &:focus ${Icon} {
    fill: var(--white);
  }
`;