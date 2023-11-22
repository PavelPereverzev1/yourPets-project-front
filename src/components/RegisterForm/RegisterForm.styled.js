import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

export const ToastText = styled.span`
  font-weight: 600;
`;

export const RegForm = styled(Form)`
  width: 280px;
  height: 479px;

  padding: 28px 12px 28px 12px;
  margin-top: 45px;

  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 629px;

    padding: 56px 75px 56px 75px;
    margin-top: 92px;

    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    height: 617px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 20px 0;

  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin: 0 0 40px 0;

    font-size: 36px;
    letter-spacing: 0.04em;
  }
`;

export const Label = styled.label`
  position: relative;
`;

const InputStyles = `
  width: 256px;
  height: 48px;

  margin-bottom: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;

  border-radius: 40px;
  border: solid 1px;

  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;

    color: var(--gray);
  }

  @media screen and (min-width: 768px) {
    width: 458px;

    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InputForEmailName = styled(Field)`
  ${InputStyles}

  ${({ error, valid }) => {
    if (error) {
      return `
        padding: 12px 46px 12px 16px;

        border-color: var(--red);
        &:focus {
          outline: solid 1px var(--red);
        }
      `;
    }
    if (valid) {
      return `
        padding: 12px 46px 12px 16px;

        border-color: var(--green);
        &:focus {
          outline: solid 1px var(--green);
        }
      `;
    }
    return `
      padding: 12px 16px;  

      border-color: var(--blueLink);
      &:focus {
        outline: solid 1px var(--blueLink);
      }
    `;
  }}
`;

export const InputForPasswords = styled(Field)`
  ${InputStyles}

  ${({ error, valid }) => {
    if (error) {
      return `
        padding: 12px 74px 12px 16px;

        border-color: var(--red);
        &:focus {
          outline: solid 1px var(--red);
        }
      `;
    }
    if (valid) {
      return `
        padding: 12px 74px 12px 16px;

        border-color: var(--green);
        &:focus {
          outline: solid 1px var(--green);
        }
      `;
    }
    return `
      padding: 12px 46px 12px 16px;  

      border-color: var(--blueLink);
      &:focus {
        outline: solid 1px var(--blueLink);
      }
    `;
  }}
`;

export const Button = styled.button`
  width: 256px;
  height: 48px;

  margin: 20px 0 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.04em;

  border-radius: 40px;
  border: none;

  color: var(--white);
  background-color: var(--blueLink);

  @media screen and (min-width: 768px) {
    width: 458px;

    margin: 20px 0 20px 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 8px 0 20px 0;
  }
`;

export const ExtraText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;

  color: var(--gray);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -34px;
  left: -8px;

  font-weight: 400;
  font-size: 12px;

  color: red;

  @media screen and (min-width: 768px) {
    bottom: -36px;
    left: 18px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LinkToLogin = styled(NavLink)`
  text-decoration: underline;

  color: var(--blueLink);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
