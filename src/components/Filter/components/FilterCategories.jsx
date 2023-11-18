/* eslint-disable */
import React, { useState, useEffect } from 'react';

export const FilterCategories = ({ filterEnteties, onFilterChange }) => {
  const [display, setDisplay] = useState(false);
  const [filter, setFilter] = useState({});
  useEffect(() => {
    const filterValue = filterEnteties.reduce((acc, filter) => {
      const key = filter.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      acc[key] = false;
      return acc;
    }, {});
    setFilter(filterValue);
  }, []);
  const propName = Object.keys(filter);
  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    const newFilter = { ...filter, [name]: checked };
    setFilter(newFilter);
    onFilterChange(filter);
  };
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>{'>'}</button>
      {display && (
        <form action="">
          {filterEnteties.map((f, index) => {
            const propValue = propName[index];
            return (
              <label key={`${f}-${index}`} htmlFor={propValue}>
                <input
                  type="checkbox"
                  id={propValue}
                  name={propValue}
                  checked={filter.propValue}
                  onChange={handleCheckboxChange}
                />
                {f}
              </label>
            );
          })}
        </form>
      )}
    </div>
  );
};
