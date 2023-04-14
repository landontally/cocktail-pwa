import React from 'react';
import './CocktailDetails.css'; // Import the CSS file (if using plain CSS)

const CocktailDetails = ({ cocktail }) => {
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strGlass,
  } = cocktail;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <div className="cocktail-details">
      <h2 className="cocktail-title">{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} className="cocktail-image" />
      <h3 className="section-title">Ingredients:</h3>
      <ul className="ingredients-list">
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.ingredient}
            {item.measure && ` - ${item.measure}`}
          </li>
        ))}
      </ul>
      <h3 className="section-title">Instructions:</h3>
      <p className="instructions">{strInstructions}</p>
      <h3 className="section-title">Glass:</h3>
      <p className="glass">{strGlass}</p>
    </div>
  );
};

export default CocktailDetails;