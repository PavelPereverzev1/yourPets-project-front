import { styled } from 'styled-components';

const ErrorMessage = styled.p`
  position: absolute;
  bottom: -12px;
  left: 80px;
  font-size: 10px;
  line-height: normal;
  letter-spacing: 0.48px;
  color: #f43f5da6;

  @media screen and (min-width: 768px) {
    bottom: -11px;
    left: 110px;
  }
`;

const ValidationError = ({ touched, error }) => {
  return touched && error ? <ErrorMessage>{error}</ErrorMessage> : null;
};

export default ValidationError;
