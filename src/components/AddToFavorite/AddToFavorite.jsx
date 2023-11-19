import React from 'react';
import sprite from '../../images/icons/sprite.svg';

import ButtonComponent from 'components/ButtonComponent/ButtonComponent';
import { Svg } from './AddToFavorite.styled';

const AddToFavorite = () => {
  return (
    <ButtonComponent width={129}>
      Add to
      <Svg>
        <use href={`${sprite}#icon-heart`} />
      </Svg>
    </ButtonComponent>
  );
};

export default AddToFavorite;
