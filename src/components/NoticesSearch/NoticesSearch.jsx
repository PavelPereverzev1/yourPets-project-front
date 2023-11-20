import React, { useState } from 'react';
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
  const [query, setQuery] = useState();

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  return (
    <Label>
      <Queryform
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ButtonWrapper style={{ left: query ? '214px' : '244px'}}>
        <ButtonSearch hasQuery={query.length > 0}>
          <SearchIcon>
            <use href={`${sprite}#icon-search`}></use>
          </SearchIcon>
        </ButtonSearch>
        {query && (
          <ButtonCancel onClick={handleClearQuery}>
            <DelateIcon>
              <use href={`${sprite}#icon-cross-small`}></use>
            </DelateIcon>
          </ButtonCancel>
        )}
      </ButtonWrapper>
    </Label>
  );
}

export default NoticesSearch;
