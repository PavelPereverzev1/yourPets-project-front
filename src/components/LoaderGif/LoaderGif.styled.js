import styled from 'styled-components';

export const ImgLoader = styled.img`
  position: absolute;
  top: calc(40% - 90px);
  left: calc(40% - 160px);
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 999;
`;