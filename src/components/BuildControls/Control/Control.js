import PropTypes from "prop-types";
import React from "react";
import styles from "./Control.module.scss";

const Control = ({ label, onAddIngredient, onRemoveIngredient, disabled }) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button
        onClick={onRemoveIngredient}
        disabled={disabled}
        className={styles.Less}
      >
        Less
      </button>
      <button className={styles.More} onClick={onAddIngredient}>
        More
      </button>
    </div>
  );
};

Control.defaultProps = {
  label: "",
  disabled: false
};

Control.propTypes = {
  label: PropTypes.string.isRequired,
  onAddIngredient: PropTypes.func.isRequired,
  onRemoveIngredient: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Control;
