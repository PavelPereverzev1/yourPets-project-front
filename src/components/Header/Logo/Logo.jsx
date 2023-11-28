import logoBig from '../../../images/logo/log-big.png';
import logoBig2x from '../../../images/logo/log-big@2x.png';
import logoSmall from '../../../images/logo/log-small.png';
import logoSmall2x from '../../../images/logo/log-small@2x.png';
import useWindowWidth from '../../../hooks/useWindowWidth';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <NavLink to="/">
      {isMobile ? (
        <img
          srcSet={`${logoSmall} 1x, ${logoSmall2x} 2x`}
          src={logoSmall}
          alt="LOGO"
          type="image/png"
        ></img>
      ) : (
        <img
          srcSet={`${logoBig}, ${logoBig2x} 2x`}
          src={logoBig}
          alt="LOGO"
          type="image/png"
        ></img>
      )}
    </NavLink>
  );
};
export default Logo;
