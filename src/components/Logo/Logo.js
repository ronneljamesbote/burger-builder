import React from "react";
import logo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="Burger Logo" />
    </div>
  );
};

export default Logo;
