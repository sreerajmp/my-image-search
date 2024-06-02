'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  totalResult: number;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ totalResult, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-filter">
      <div className="search-bar">
        <button onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
          onKeyPress={(e) => { if (e.key === 'Enter') handleSubmit(e); }}
        />
      </div>

      <div className="button-group">
        <button>All</button>
        <button>Creative</button>
        <button>Editorial</button>
      </div>
      <span className="query-count">{query} stock Photos and Images ({totalResult})</span>
    </div>
  );
};

export default SearchBar;
