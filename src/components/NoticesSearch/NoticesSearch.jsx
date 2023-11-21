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
import { useDispatch } from 'react-redux';
import { setSearchQuery } from 'redux/notices/noticesQuerySlice';

function NoticesSearch() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery('');
    dispatch(setSearchQuery(''));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setSearchQuery(query));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Queryform
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ButtonWrapper hasquery={query.length > 0}>
        <ButtonSearch hasquery={query.length > 0} onClick={handleSubmit}>
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
