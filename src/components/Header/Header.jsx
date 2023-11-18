import { useState } from 'react';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import AuthBar from './AuthBar/AuthBar';
import MenuBtn from './MenuBtn/MenuBtn';
import useWindowWidth from '../../hooks/useWindowWidth';

import { HeaderContainer, Container } from './Header.styled';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isTablet = windowWidth >= 768 && windowWidth < 1280;
  const isMobile = windowWidth < 768;

  return (
    <HeaderContainer>
      <Logo />

      {isMobile && (
        <Container>
          <AuthBar />
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isTablet && (
        <Container>
          <AuthBar />
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isDesktop && (
        <>
          <Navbar />
          <Container>
            <AuthBar />
          </Container>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
