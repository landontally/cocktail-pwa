import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';

function App() {
  const [cocktails, setCocktails] = useState([]);

  const onSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Fetch cocktail recipes based on the searchTerm and update the state
    // For example: setCocktails(fetchedCocktails);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearch} />
      <CocktailList cocktails={cocktails} />
    </div>
  );
}

export default App;