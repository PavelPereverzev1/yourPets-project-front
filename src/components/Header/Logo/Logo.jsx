import logoBig from '../../../images/logo/log-big.png';
import logoSmall from '../../../images/logo/log-small.png';
import useWindowWidth from '../../../hooks/useWindowWidth';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <NavLink to="/">
      {isMobile ? (
        <img src={logoSmall} alt="LOGO"></img>
      ) : (
        <img src={logoBig} alt="LOGO"></img>
      )}
    </NavLink>
  );
};
export default Logo;
