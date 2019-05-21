import PropTypes from "prop-types";
import React from "react";
import styles from "./Burger.module.scss";
import Ingredient from "./Ingredient/Ingredient";

const Burger = ({ ingredients }) => {
  let sortedIngredients = [];

  if (ingredients.length > 0) {
    sortedIngredients = [...ingredients]
      .sort((a, b) => b.sort - a.sort)
      .reduce((acc, ingredient, index) => {
        for (let x = 1; x <= ingredient.quantity; x++) {
          acc = acc.concat(
            <Ingredient
              type={ingredient.type}
              key={`${ingredient.type}_${index}_${ingredient.quantity}_${x}`}
            />
          );
        }
        return acc;
      }, []);
  }

  if (sortedIngredients.length === 0)
    sortedIngredients = <p>Please start adding ingredients</p>;

  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      {sortedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

Burger.defaultProps = {
  ingredients: []
};

Burger.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      sort: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Burger;
