import styled, { css } from 'styled-components';

// Buttons styles
export const ButtonsWrapper = styled.div`
  // position: absolute;
  // bottom: 0;
  // left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
`;

const sharedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 38px;
  padding: 8px 28px;
  background-color: transparent;
  cursor: pointer;
  color: #54adff;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.3px;
`;

export const ButtonWhite = styled.button`
  ${sharedStyles};
  border: 2px solid transparent;
  border-radius: 40px;
`;

export const BtnIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--blueLink);
  transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ButtonBlue = styled.button`
  ${sharedStyles};
  width: 248px;
  border: 2px solid #54adff;
  border-radius: 40px;
  transition: background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-image: linear-gradient(to left, #419ef1, #9bd0ff);
    color: #fef9f9;
  }

  &:hover ${BtnIcon}, &:focus ${BtnIcon} {
    fill: var(--white);
  }
`;
