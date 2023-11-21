import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import AuthBar from './AuthBar/AuthBar';
import MenuBtn from './MenuBtn/MenuBtn';
import MobileMenu from './MobileMenu/MobileMenu';
import useWindowWidth from '../../hooks/useWindowWidth';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import { useAuth } from '../../hooks/useAuth';
import { HeaderContainer, Container } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isTablet = windowWidth >= 768 && windowWidth < 1280;
  const isMobile = windowWidth < 768;

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <HeaderContainer>
      <Logo />

      {isMobile && (
        <Container>
          {isLoggedIn && !isOpenMenu && <AuthBar name={false} />}
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isTablet && (
        <Container>
          {isOpenMenu ? isLoggedIn ? <LogoutBtn /> : <AuthBar /> : <AuthBar />}
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isDesktop && (
        <>
          <Navbar />
          {isLoggedIn ? (
            <AuthBar />
          ) : (
            <Container>
              <LogoutBtn />
              <AuthBar />
            </Container>
          )}
        </>
      )}

      {isOpenMenu && !isDesktop && <MobileMenu />}
    </HeaderContainer>
  );
};

export default Header;
