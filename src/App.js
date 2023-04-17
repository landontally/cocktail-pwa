import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';

import './App.css';

function App() {
  // ...

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearch} />
      {isMobile ? (
        <CocktailList cocktails={cocktails} onSelectCocktail={setSelectedCocktail} />
      ) : (
        <div className="cocktail-container">
          <CocktailList cocktails={cocktails} onSelectCocktail={setSelectedCocktail} />
          <CocktailDetails cocktail={selectedCocktail} />
        </div>
      )}
    </div>
  );
}

export default App;
