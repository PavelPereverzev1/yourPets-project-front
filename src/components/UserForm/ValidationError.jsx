import { styled } from 'styled-components';

const ErrorMessage = styled.p`
  font-size: 10px;
  line-height: normal;
  letter-spacing: 0.48px;
  padding: 2px 0 0 8px;
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
