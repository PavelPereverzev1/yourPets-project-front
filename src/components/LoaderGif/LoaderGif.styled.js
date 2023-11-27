import styled from 'styled-components';

export const ImgLoader = styled.img`
  position: absolute;
  top: calc(50% - 90px);
  left: calc(50% - 160px);
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 300px;
  overflow-y: auto;
  z-index: 999;
  transform: translate(-50%, -50%);
`;