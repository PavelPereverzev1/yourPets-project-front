import React, { useState } from 'react';
import {
  Form,
  Queryform,
  ButtonSearch,
  SearchIcon,
  ButtonCancel,
  DelateIcon,
  ButtonWrapper,
} from './NoticesSearch.styled';
import sprite from '../../images/icons/sprite.svg';
import axios from 'axios';

function NoticesSearch() {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios('')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Queryform
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ButtonWrapper hasQuery={query.length > 0}>
        <ButtonSearch hasQuery={query.length > 0} onClick={handleSubmit}>
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
    </Form>
  );
}

export default NoticesSearch;
