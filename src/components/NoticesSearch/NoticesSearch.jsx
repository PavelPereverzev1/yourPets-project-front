import React from 'react';
import {
  Label,
  Queryform,
  ButtonSearch,
  SearchIcon,
  ButtonCancel,
  DelateIcon,
  ButtonWrapper,
} from './NoticesSearch.styled';
import sprite from '../../images/icons/sprite.svg';

function NoticesSearch() {
  return (
    <Label>
      <Queryform placeholder="Search" />
      <ButtonWrapper>
        <ButtonSearch>
          <SearchIcon>
            <use href={`${sprite}#icon-search`}></use>
          </SearchIcon>
        </ButtonSearch>
        <ButtonCancel>
          <DelateIcon>
            <use href={`${sprite}#icon-cross-small`}></use>
          </DelateIcon>
        </ButtonCancel>
      </ButtonWrapper>
    </Label>
  );
}

export default NoticesSearch;
