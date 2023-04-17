import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetch(`http://localhost:5000/api/cocktails?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setCocktails(data));
    } else {
      setCocktails([]);
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <div className="content">
        {selectedCocktail ? (
          <CocktailDetails
            cocktail={selectedCocktail}
            onBackClick={() => setSelectedCocktail(null)}
          />
        ) : (
          <CocktailList
            cocktails={cocktails}
            onSelectCocktail={(cocktail) => setSelectedCocktail(cocktail)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
