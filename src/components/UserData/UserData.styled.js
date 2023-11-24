import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  padding: 20px 8px 25px 8px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: var(--boxShadowDefault);

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    padding: 20px 20px 16px 20px;
    min-height: 270px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    width: 395px;
  }
`;

export const CardBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const EditIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--blueLink);
  transition: fill var(--transition);

  &:hover,
  &:focus {
    fill: var(--yellow);
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--blueLink);
  transition: stroke var(--transition);

  &:hover,
  &:focus {
    stroke: var(--yellow);
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  height: 224px;
`;

export const Thumb = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 40px;
  overflow: hidden;
`;

export const Avatar = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadBtn = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.48px;
  cursor: pointer;

  &:hover,
  &:focus {
    svg {
      stroke: var(--yellow);
    }
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const CameraIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--blueLink);
  transition: stroke var(--transition);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ConfirmBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.48px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    svg {
      stroke: var(--yellow);
    }
  }
`;

export const ConfirmIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--blueLink);
  transition: stroke var(--transition);
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const RemoveIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--red);
`;
