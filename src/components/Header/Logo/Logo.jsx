import logoBig from '../../../images/logo/log-big.png';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logoBig} alt="LOGO"></img>
    </NavLink>
  );
};
export default Logo;
