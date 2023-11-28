import styled from 'styled-components';

export const ImgLoader = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderContainer = styled.div`
  position: fixed;
  background: transparent;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 250px;
  overflow-y: auto;
  z-index: 999;
  transform: translate(-50%, -50%);
`;