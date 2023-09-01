import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  const rangeStart = Math.max(currentPage - 1, 1);
  const rangeEnd = Math.min(currentPage + 1, totalPages);

  // Add start arrow button if currentPage is greater than 2
  if (currentPage > 2) {
    pages.push(
      <button key={1} onClick={() => onPageChange(1)}>
        {'<<'}
      </button>
    );
  }

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

  // Add end arrow button if currentPage is less than totalPages - 1
  if (currentPage < totalPages - 1) {
    pages.push(
      <button key={totalPages} onClick={() => onPageChange(totalPages)}>
        {'>>'}
      </button>
    );
  } else if (currentPage === totalPages - 1) {
    pages.push(
      <button key={totalPages} onClick={() => onPageChange(totalPages)}>
        {totalPages}
      </button>
    );
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;
