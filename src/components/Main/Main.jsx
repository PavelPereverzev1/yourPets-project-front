import mainMobile from '../../images/pets/pets-mobile@1x.png';
import mainMobileRetina from '../../images/pets/pets-mobile@2x.png';
import mainTablet from '../../images/pets/pets-tablet@1x.png';
import mainTabletRetina from '../../images/pets/pets-tablet@2x.png';
import mainDesktop from '../../images/pets/pets-desktop@1x.png';
import mainDesktopRetina from '../../images/pets/pets-desktop@2x.png';

import {
  MainContainer,
  MainTitleMobile,
  MainTitleDesktop,
  MainPetsPicture,
} from './Main.styled';

const Main = () => {
  return (
    <MainContainer>
      <MainTitleMobile>
        Take good care of
        <br /> your small pets
      </MainTitleMobile>

      <MainTitleDesktop>
        Take good care of your small
        <br /> pets
      </MainTitleDesktop>

      <picture>
        <source
          srcSet={`${mainMobile}, ${mainMobileRetina} 2x`}
          type="image/png"
          media="(max-width: 480px)"
        />

        <source
          srcSet={`${mainTablet}, ${mainTabletRetina} 2x`}
          type="image/png"
          media="(max-width: 768px)"
        />

        <source
          srcSet={`${mainDesktop}, ${mainDesktopRetina} 2x`}
          type="image/png"
          media="(min-width: 1280px)"
        />

        <MainPetsPicture src={mainMobile} alt="main page pets" />
      </picture>
    </MainContainer>
  );
};

export default Main;
