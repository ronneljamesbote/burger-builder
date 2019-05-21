import PropTypes from "prop-types";
import React from "react";
import styles from "./DrawerToggle.module.scss";

const DrawerToggle = ({ onClick }) => {
  return (
    <div className={styles.DrawerToggle} onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DrawerToggle;
