import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import AuthBar from './AuthBar/AuthBar';

import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
      <AuthBar />
    </HeaderContainer>
  );
};

export default Header;
