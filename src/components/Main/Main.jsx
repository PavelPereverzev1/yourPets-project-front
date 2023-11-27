import mainMobile from '../../images/pets/pets-mobile@1x.png';
import mainMobileRetina from '../../images/pets/pets-mobile@2x.png';
import mainTablet from '../../images/pets/pets-tablet@1x.png';
import mainTabletRetina from '../../images/pets/pets-tablet@2x.png';
import mainDesktop from '../../images/pets/pets-desktop@1x.png';
import mainDesktopRetina from '../../images/pets/pets-desktop@2x.png';

import BackgroundImg from '../BackgroundImg/BackgroundImg';

import { MainContainer, MainTitle, MainPetsPicture } from './Main.styled';

const Main = () => {
  return (
    <BackgroundImg>
      <MainContainer>
        <MainTitle>Take good care of your small pets</MainTitle>

        <picture>
          <source
            srcSet={`${mainMobile}, ${mainMobileRetina} 2x`}
            type="image/png"
            media="(max-width: 767px)"
          />

          <source
            srcSet={`${mainTablet}, ${mainTabletRetina} 2x`}
            type="image/png"
            media="(min-width: 768px) and (max-width: 1279px)"
          />

          <source
            srcSet={`${mainDesktop}, ${mainDesktopRetina} 2x`}
            type="image/png"
            media="(min-width: 1280px)"
          />

          <MainPetsPicture src={mainDesktop} alt="main page pets" />
        </picture>
      </MainContainer>
    </BackgroundImg>
  );
};

export default Main;
