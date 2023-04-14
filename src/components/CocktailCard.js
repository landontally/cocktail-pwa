import React from 'react';
import './CocktailCard.css'; // Import the CSS file (if using plain CSS)

const CocktailCard = ({ cocktail, onSelect }) => {
  const { strDrink, strDrinkThumb } = cocktail;

  const handleClick = () => {
    onSelect(cocktail);
  };

  return (
    <div className="cocktail-card" onClick={handleClick}>
      <img src={strDrinkThumb} alt={strDrink} className="cocktail-image" />
      <h3 className="cocktail-name">{strDrink}</h3>
    </div>
  );
};

export default CocktailCard;