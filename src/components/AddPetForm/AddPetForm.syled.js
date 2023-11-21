import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.width || '458px'};
  border-radius: 40px;
  background: #fff;
  margin: 0 auto;
  padding: 32px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const Title = styled.h2`
  color: #111;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`;

// Buttons styles
export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
