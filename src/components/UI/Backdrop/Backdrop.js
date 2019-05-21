import PropTypes from "prop-types";
import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({ show, onClick }) => {
  return show ? <div className={styles.Backdrop} onClick={onClick} /> : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default Backdrop;
