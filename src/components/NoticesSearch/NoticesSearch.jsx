import React, { useState } from 'react';
import {
  Form,
  Queryform,
  ButtonSearch,
  SearchIcon,
  ButtonCancel,
  DelateIcon,
  FormWrapper,
} from './NoticesSearch.styled';
import sprite from '../../images/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from 'redux/notices/noticesSlices';

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

  const buttonSearchStyle =
    query.length > 0 ? { right: '40px' } : { right: '12px' };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Queryform
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <ButtonSearch style={buttonSearchStyle} onClick={handleSubmit}>
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
      </Form>
    </FormWrapper>
  );
}

export default NoticesSearch;
