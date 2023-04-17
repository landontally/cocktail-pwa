import React from 'react';
import styles from './CocktailList.module.css';

const CocktailList = ({ cocktails, onSelectCocktail }) => {
  return (
    <ul className={styles.cocktailList}>
      {cocktails.map((cocktail) => (
        <li
          key={cocktail.idDrink}
          onClick={() => onSelectCocktail(cocktail)}
          className={styles.cocktailItem}
        >
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className={styles.cocktailImage} />
          <p className={styles.cocktailName}>{cocktail.strDrink}</p>
        </li>
      ))}
    </ul>
  );
};

export default CocktailList;
