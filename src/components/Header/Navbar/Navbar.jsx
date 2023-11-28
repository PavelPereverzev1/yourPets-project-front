import { NavLink } from 'react-router-dom';

import { Nav, NavbarLink } from './Navbar.styled';

const NavBar = () => {
  return (
    <Nav>
      <NavbarLink as={NavLink} to="/news">
        News
      </NavbarLink>
      <NavbarLink as={NavLink} to="/notices/sell">
        Find Pet
      </NavbarLink>
      <NavbarLink as={NavLink} to="/friends">
        Our friends
      </NavbarLink>
    </Nav>
  );
};

export default NavBar;
