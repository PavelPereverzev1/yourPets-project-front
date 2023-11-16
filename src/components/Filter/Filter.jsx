import React, { useState } from 'react';
import { FilterByAge } from './components/FilterByAge';
import { FilterByGender } from './components/FilterByGender';

export const Filter = () => {
  const [display, setDisplay] = useState(false);
  const [filter, setFilter] = useState({
    upToOneYear: false,
    upToTwoYears: false,
    fromTwoYears: false,
    female: false,
    male: false,
  });
  const handleFilterChange = filter => {
    setDisplay(prevState => {
      return { ...prevState, ...filter };
    });
  };
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Filter</button>
      {display && (
        <div>
          <FilterByAge onFilterChange={handleFilterChange} />
          <FilterByGender />
        </div>
      )}
    </>
  );
};
