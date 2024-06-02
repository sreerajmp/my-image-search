'use client';

import React, { useState } from 'react';

interface PaginationProps {
  page: number;
  query: string;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, query, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState<number | string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const newPage = Number(inputPage);
    if (!isNaN(newPage) && newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <span>Search result for {query} Photos and Images ({totalPages})</span>
      
      <div className="go-to-page">
      <span>{page} of {Math.ceil(totalPages / 18)}</span>

        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        {'<'}
        </button>
        <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
        {'>'}
        </button>
        <input
          type="number"
          value={inputPage}
          onChange={handleInputChange}
          placeholder="Page"
          min="1"
          max={Math.ceil(totalPages / 8)}
        />
        <button onClick={handleGoToPage}>Go</button>
      </div>
    </div>
  );
};

export default Pagination;
