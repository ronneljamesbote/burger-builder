import PropTypes from "prop-types";
import React from "react";
import { DangerButton, SuccessButton } from "../UI/Button";

const OrderSummary = ({ ingredients, onCancel, onContinue, price }) => {
  let ingredientList = null;

  if (ingredients.length > 0) {
    ingredientList = ingredients.map((ingredient, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>{ingredient.type}</span>{" "}
          x {ingredient.quantity}
        </li>
      );
    });
  }

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientList}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <DangerButton onClick={onCancel}>CANCEL</DangerButton>
      <SuccessButton onClick={onContinue}>CONTINUE</SuccessButton>
    </React.Fragment>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
};

export default OrderSummary;
