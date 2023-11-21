import React from 'react';

import { Link } from 'react-router-dom';

import sprite from '../../../images/icons/sprite.svg';
import { useAuth } from '../../../hooks/useAuth';
import { UserContainer, Typography, Svg } from './UserBar.styled.js';

function UserBar({ name = true }) {
  const { user } = useAuth();

  return (
    <>
      <UserContainer as={Link} to="/user">
        <Svg>
          <use href={`${sprite}#icon-user`} />
        </Svg>
        {name && <Typography>{user.name}</Typography>}
      </UserContainer>
    </>
  );
}

export default UserBar;
