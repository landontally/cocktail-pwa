import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a cocktail..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
