import PropTypes from "prop-types";
import React from "react";
import Burger from "../../Burger/Burger";
import { DangerButton, SuccessButton } from "../../UI/Button";
import styles from "./CheckoutSummary.module.scss";

const CheckoutSummary = ({ ingredients, onCancel, onContinue }) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div className={styles.Burger}>
        <Burger ingredients={ingredients} />
      </div>
      <DangerButton onClick={onCancel}>CANCEL</DangerButton>
      <SuccessButton onClick={onContinue}>CONTINUE</SuccessButton>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
};

export default CheckoutSummary;
