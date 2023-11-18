import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 24.6875rem;
  height: 32.5rem;

  border-radius: 2.5rem;
  background: var(--white);

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const CardBtn = styled.button`
  position: absolute;
  top: 1.13rem;
  right: 1.13rem;
  color: var(--blueLink);
  cursor: pointer;
`;

export const AvatarContainer = styled.div``;

export const Avatar = styled.img`
  width: 11.375rem;
  height: 11.375rem;
`;

export const UploadBtn = styled.label`
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;
