
// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <ul className="pagination">
//       {pageNumbers.map((number) => (
//         <li
//           key={number}
//           className={`page-item ${number === currentPage ? 'active' : ''}`}
//         >
//           <button
//             onClick={() => onPageChange(number)}
//             className="page-link"
//           >
//             {number}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

