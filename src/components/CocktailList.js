import React from 'react';
import './CocktailList.css'; // Import the CSS file (if using plain CSS)
import CocktailCard from './CocktailCard'; // Import the CocktailCard component

const CocktailList = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;