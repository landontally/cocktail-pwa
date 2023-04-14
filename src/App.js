import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const onSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Fetch cocktail recipes based on the searchTerm and update the state
    // For example: setCocktails(fetchedCocktails);
  };

  const onSelectCocktail = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearch} />
      {selectedCocktail ? (
        <CocktailDetails cocktail={selectedCocktail} />
      ) : (
        <CocktailList cocktails={cocktails} onSelect={onSelectCocktail} />
      )}
    </div>
  );
}

export default App;