import React from 'react';
import styles from './CocktailDetails.module.css';

const CocktailDetails = ({ cocktail, onBackClick }) => {
  if (!cocktail) {
    return <div className={styles.emptyMessage}>Please select a cocktail from the list.</div>;
  }

  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure || '',
      });
    }
  }

  return (
    <div className={styles.cocktailDetails}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className={styles.cocktailImage} />
      <h2 className={styles.title}>{cocktail.strDrink}</h2>
      <h3 className={styles.subtitle}>Ingredients</h3>
      <ul className={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <li key={index} className={styles.ingredientItem}>
            {ingredient.measure} {ingredient.name}
          </li>
        ))}
      </ul>
      <h3 className={styles.subtitle}>Instructions</h3>
      <p className={styles.instructions}>{cocktail.strInstructions}</p>
      <button onClick={onBackClick}>Back to list</button>
    </div>
  );
};

export default CocktailDetails;
