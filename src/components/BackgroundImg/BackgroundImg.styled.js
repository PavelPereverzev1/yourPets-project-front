import styled from 'styled-components';
import bgMobile1x from '../../images/background/bg-mobile@1x.png';
import bgMobile2x from '../../images/background/bg-mobile@2x.png';
import bgTablet1x from '../../images/background/bg-tablet@1x.png';
import bgTablet2x from '../../images/background/bg-tablet@2x.png';
import bgDesktop1x from '../../images/background/bg-desktop@1x.png';
import bgDesktop2x from '../../images/background/bg-desktop@2x.png';

export const StyledBackgroundImg = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--background);
  background-image: url(${bgMobile1x});
  background-repeat: no-repeat;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${bgMobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTablet1x});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgTablet2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesktop1x});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${bgDesktop2x});
    }
  }
`;
