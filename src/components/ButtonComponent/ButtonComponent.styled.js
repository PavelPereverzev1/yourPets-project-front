import styled from 'styled-components';

export const Button = styled.button`
  width: ${props => props.width || '248px'};
  height: 38px;
  color: #54adff;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #54adff;
  border-radius: 40px;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.3px;
  transition: background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-image: linear-gradient(to left, #419ef1, #9bd0ff);
    color: #fef9f9;
  }
`;
