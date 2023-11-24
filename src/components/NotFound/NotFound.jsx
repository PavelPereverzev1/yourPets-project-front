import notFoundMobile from '../../images/notFound/notFound-mobile.png';
import notFoundMobileRetina from '../../images/notFound/notFound-mobile@2x.png';
import notFoundTablet from '../../images/notFound/notFound-tablet.png';
import notFoundTabletRetina from '../../images/notFound/notFound-tablet@2x.png';
import notFoundDesk from '../../images/notFound/notFound-desk.png';
import notFoundDeskRetina from '../../images/notFound/notFound-desktop@2x.png';

import BackgroundImg from 'components/BackgroundImg/BackgroundImg';
import {
  ButtonBlue,
  Icon,
} from 'components/Modals/CongratsModal/CongratsModal.styled';
import sprite from '../../images/icons/sprite.svg';
import { Link } from 'react-router-dom';
import { Container, Title, TitleMob } from './NotFound.styled';

export default function NotFound() {
  return (
    <BackgroundImg>
        <Container>
      <Title><TitleMob>Ooops!</TitleMob> This page not found :(</Title>
      <picture>
        <source
          srcSet={`${notFoundDesk}, ${notFoundDeskRetina} 2x`}
          type="image/png"
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${notFoundTablet}, ${notFoundTabletRetina} 2x`}
          type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${notFoundMobile}, ${notFoundMobileRetina} 2x`}
          type="image/png"
          media="(min-width: 280px)"
        />
        <img src={notFoundMobile} alt="page404 Cat" />
      </picture>
      <ButtonBlue as={Link} to="/">
        To main page
        <Icon>
          <use href={`${sprite}#icon-pawprint-1`} />
        </Icon>
      </ButtonBlue>
      </Container>
    </BackgroundImg>
  );
}
