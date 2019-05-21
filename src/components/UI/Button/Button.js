import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type, className, children, ...restProps }) => {
  const classNames = [styles.Button, styles[type], className].join(" ");
  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "Success",
  children: "Click me",
  className: ""
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Button;
