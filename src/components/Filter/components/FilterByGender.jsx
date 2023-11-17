import React, { useState } from 'react';

export const FilterByGender = ({ onFilterChange }) => {
  const [display, setDisplay] = useState(false);
  const [filter, setFilter] = useState({ male: false, female: false });
  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
    onFilterChange(filter);
  };
  return (
    <div>
      <h3>By gender</h3>
      <button onClick={() => setDisplay(!display)}>{'>'}</button>
      {display && (
        <form action="">
          <label htmlFor="male">
            <input
              type="checkbox"
              id="male"
              name="male"
              checked={filter.male}
              onChange={handleCheckboxChange}
            />
            Male
          </label>

          <label htmlFor="female">
            <input
              type="checkbox"
              id="female"
              name="female"
              checked={filter.female}
              onChange={handleCheckboxChange}
            />
            Female
          </label>
        </form>
      )}
    </div>
  );
};
