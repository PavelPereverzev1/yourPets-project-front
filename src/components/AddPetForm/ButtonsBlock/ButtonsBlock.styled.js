import styled, { css } from 'styled-components';

// Buttons styles
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;

export const BtnIcon = styled.svg`
  width: 24px;
  height: 24px;
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const sharedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  height: 38px;
  border: none;

  cursor: pointer;

  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.3px;

  &:hover,
  &:focus {
    border: none;
  }
`;

export const ButtonWhite = styled.button`
  ${sharedStyles};
  padding: 0;
  color: var(--blueLink);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    /* flex-basis: 33%; */
  }
`;

export const ButtonBlue = styled.button`
  ${sharedStyles};
  width: 248px;
  padding: 8px 28px;
  color: var(--background);
  background-color: var(--blueLink);
  border-radius: 40px;

  &:disabled {
    cursor: no-drop;
    background-color: #cce4fb;
  }

  @media screen and (min-width: 768px) {
    /* flex-basis: 66%; */
    margin: 0;
  }
`;
