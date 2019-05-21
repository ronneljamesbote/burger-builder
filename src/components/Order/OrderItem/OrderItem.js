import PropTypes from "prop-types";
import React from "react";
import styles from "./OrderItem.module.scss";

const OrderItem = ({ ingredients, price }) => {
  let items =
    ingredients &&
    ingredients.map((ingredient) => (
      <span
        key={ingredient.type}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ingredient.type} ({ingredient.quantity})
      </span>
    ));

  return (
    <div className={styles.OrderItem}>
      <p>Ingredients: {items}</p>
      <p>
        Price:&nbsp;
        <strong>PHP {!Number.isNaN(price) ? price.toFixed(2) : "0.00"}</strong>
      </p>
    </div>
  );
};

OrderItem.defaultProps = {
  ingredients: [],
  price: 0
};

OrderItem.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  price: PropTypes.number.isRequired
};

export default OrderItem;
