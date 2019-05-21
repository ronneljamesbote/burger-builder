import PropTypes from "prop-types";
import React from "react";
import styles from "./BuildControls.module.scss";
import Control from "./Control/Control";

const BuildControls = ({
  ingredientList,
  price,
  availableIngredients,
  canOrder,
  onAddIngredient,
  onRemoveIngredient,
  onOrder
}) => {
  if (Object.keys(ingredientList).length > 0) {
    return (
      <div className={styles.BuildControls}>
        <p>
          Current Price:&nbsp;
          <strong>{price.toFixed(2)}</strong>
        </p>

        {Object.keys(ingredientList)
          .sort((a, b) => ingredientList[b].sort - ingredientList[a].sort)
          .map((ingredient) => (
            <Control
              key={ingredient}
              label={ingredient}
              disabled={availableIngredients.indexOf(ingredient) === -1}
              onAddIngredient={() =>
                onAddIngredient({
                  ...ingredientList[ingredient],
                  type: ingredient
                })
              }
              onRemoveIngredient={() =>
                onRemoveIngredient({
                  ...ingredientList[ingredient],
                  type: ingredient
                })
              }
            />
          ))}

        <button
          className={styles.OrderButton}
          disabled={!canOrder}
          onClick={onOrder}
        >
          Order Now
        </button>
      </div>
    );
  }

  return (
    <div className={styles.BuildControls}>
      <p>There seems no ingredient to add. Please check again later!</p>
    </div>
  );
};

BuildControls.defaultProps = {
  canOrder: false
};

BuildControls.propTypes = {
  ingredientList: PropTypes.objectOf(
    PropTypes.shape({
      sort: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onOrder: PropTypes.func.isRequired,
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  availableIngredients: PropTypes.array,
  canOrder: PropTypes.bool
};

export default BuildControls;
