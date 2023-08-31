import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Calculate the range of pages to display (e.g., 1, 2, 3 for the first set)
  const rangeStart = Math.max(currentPage - 1, 1);
  const rangeEnd = Math.min(currentPage + 1, totalPages);

  for (let page = rangeStart; page <= rangeEnd; page++) {
    pages.push(
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={currentPage === page ? 'active' : ''}
      >
        {page}
      </button>
    );
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;

