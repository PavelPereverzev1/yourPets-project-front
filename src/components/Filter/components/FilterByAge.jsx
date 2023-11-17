// import React from 'react';
// import { useState } from 'react';

// export const FilterByAge = () => {
//   const [display, setDisplay] = useState(false);
//   const [filter, setFilter] = useState({
//     upToOneYear: false,
//     upToTwoYears: false,
//     fromTwoYears: false,
//   });
//   const handleCheckboxChange = event => {
//     const { name, checked } = event.target;
//     setFilter(prevFilters => ({
//       ...prevFilters,
//       [name]: checked,
//     }));
//     onFilterChange(filter);
//   };
//   return (
//     <div>
//       <h3>By age</h3>
//       <button>{'>'}</button>
//       {display && (
//         <form action="">
//           <label htmlFor="upToOneYear">
//             <input
//               type="checkbox"
//               id="upToOneYear"
//               name="upToOneYear"
//               checked={filter.upToOneYear}
//               onChange={handleCheckboxChange}
//             />
//             up to 1 year
//           </label>

//           <label htmlFor="upToTwoYears">
//             <input
//               type="checkbox"
//               id="upToTwoYears"
//               name="upToTwoYears"
//               checked={filter.upToTwoYears}
//               onChange={handleCheckboxChange}
//             />
//             up to 2 years
//           </label>
//           <label htmlFor="fromTwoYears">
//             <input
//               type="checkbox"
//               id="fromTwoYears"
//               name="fromTwoYears"
//               checked={filter.fromTwoYears}
//               onChange={handleCheckboxChange}
//             />
//             from 2 years
//           </label>
//         </form>
//       )}
//     </div>
//   );
// };
