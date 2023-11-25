import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 16px 20px 40px 20px;
  gap: 20px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: var(--boxShadowDefault);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    border-radius: 40px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 820px;
    gap: 32px;
  }
`;

export const Thumb = styled.div`
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 162px;
    height: 162px;
    border-radius: 40px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 16px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.64px;
  }
`;

export const TextTitle = styled.span`
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;
