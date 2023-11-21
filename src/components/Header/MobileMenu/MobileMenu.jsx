import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useWindowWidth from '../../../hooks/useWindowWidth';
import Navbar from '../Navbar/Navbar';
import AuthBar from '../AuthBar/AuthBar';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { useAuth } from '../../../hooks/useAuth';
import { MobileMenuContainer } from './MobileMenu.styled';

const mobileMenuRoot = document.getElementById('mobile-menu');

const MobileMenu = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return createPortal(
    <MobileMenuContainer>
      {isMobile && <AuthBar userBarKey="mobile-menu" />}
      <Navbar />
      {isMobile && isLoggedIn && <LogoutBtn />}
    </MobileMenuContainer>,
    mobileMenuRoot
  );
};

export default MobileMenu;
