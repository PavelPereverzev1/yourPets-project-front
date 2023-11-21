/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  FilterElementContainer,
  FilterSubBtn,
  CheckboxContainer,
  InputCheckbox,
  InputCheckboxContainer,
  OFilterSubBtn,
} from '../style/Filter.styled';

export const FilterCategories = ({
  filterEnteties,
  onFilterChange,
  filterCategoryName,
}) => {
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
    onFilterChange(newFilter);
  };
  return (
    <FilterElementContainer>
      {display ? (
        <div>
          <OFilterSubBtn onClick={() => setDisplay(false)}>
            {filterCategoryName}
          </OFilterSubBtn>
          <form action="">
            <CheckboxContainer>
              {filterEnteties.map((f, index) => {
                const propValue = propName[index];
                return (
                  <InputCheckboxContainer
                    key={`${f}-${index}`}
                    htmlFor={propValue}
                  >
                    <InputCheckbox
                      type="checkbox"
                      id={propValue}
                      name={propValue}
                      checked={filter[propValue]}
                      onChange={handleCheckboxChange}
                    />
                    {filter[propValue] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z"
                          stroke="#54ADFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z"
                          stroke="#54ADFF"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {f}
                  </InputCheckboxContainer>
                );
              })}
            </CheckboxContainer>
          </form>
        </div>
      ) : (
        <FilterSubBtn onClick={() => setDisplay(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M4 9L12 17L20 9" />
          </svg>

          <span>{filterCategoryName}</span>
        </FilterSubBtn>
      )}
    </FilterElementContainer>
  );
};
