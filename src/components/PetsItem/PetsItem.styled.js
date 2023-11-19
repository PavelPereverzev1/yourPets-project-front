import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  width: 51.3125rem;
  padding: 1.25rem;
  gap: 2rem;

  border-radius: 2.5rem;
  background: var(--white);

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const Image = styled.img`
  width: 10.0625rem;
  height: 10.0625rem;
  border-radius: 2.5rem;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.04rem;
`;

export const TextTitle = styled.span`
  font-weight: 600;
  line-height: normal;
`;
