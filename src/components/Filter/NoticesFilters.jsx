import React, { useState } from 'react';
import { FilterCategories } from './components/FilterCategories';
import {
  FilterContainer,
  MainFilterBtn,
  FiltrSpan,
  FiltersBtn,
} from './style/Filter.styled';

export const NoticesFilters = () => {
  const filterByAge = ['up to 1 year', 'up to 2 years', 'from 2 years'];
  const filterByGender = ['male', 'female'];
  const filters = {
    'by age': filterByAge,
    'by sex': filterByGender,
  };
  const [display, setDisplay] = useState(false);
  const [filter, setFilter] = useState({
    uptooneyear: false,
    uptotwoyears: false,
    fromtwoyears: false,
    female: false,
    male: false,
  });
  console.log(filter); // Використати для запитів на бек за категоріями
  const handleFilterChange = filter => {
    setFilter(prevState => {
      return { ...prevState, ...filter };
    });
  };
  return (
    <>
      <MainFilterBtn onClick={() => setDisplay(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M4 4L9 12V18L15 21V12L20 4H4Z" />
        </svg>
        <FiltrSpan>Filter</FiltrSpan>
      </MainFilterBtn>
      {display && (
        <FilterContainer>
          <FiltersBtn onClick={() => setDisplay(false)}>Filters</FiltersBtn>
          {Object.entries(filters).map(([filterName, filter], index) => (
            <FilterCategories
              key={`filter-${index}`}
              filterEnteties={filter}
              onFilterChange={handleFilterChange}
              filterCategoryName={filterName}
            />
          ))}
        </FilterContainer>
      )}
    </>
  );
};
