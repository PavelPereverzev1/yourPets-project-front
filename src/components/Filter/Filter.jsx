import React, { useState } from 'react';
import { FilterCategories } from './components/FilterCategories';
export const Filter = () => {
  const filterByAge = ['up to one year', 'up to two years', 'from two years'];
  const filterByGender = ['male', 'female'];
  const filters = [filterByAge, filterByGender];
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
      <button onClick={() => setDisplay(!display)}>Filter</button>
      {display && (
        <div>
          {filters.map((filter, index) => (
            <FilterCategories
              key={`filter-${index}`}
              filterEnteties={filter}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>
      )}
    </>
  );
};
