import PropTypes from "prop-types";
import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  elementType,
  validate,
  dirty,
  valid,
  label,
  className,
  elementConfig,
  ...restProps
}) => {
  let inputElement = null;

  const classNames = [styles.InputElement, className];

  if (!valid && validate && dirty) classNames.push(styles.Invalid);

  switch (elementType) {
    case "input":
      inputElement = (
        <input
          className={classNames.join(" ")}
          {...elementConfig}
          {...restProps}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classNames.join(" ")}
          {...elementConfig}
          {...restProps}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={classNames.join(" ")} {...restProps}>
          {elementConfig.options.length &&
            elementConfig.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.displayValue}
              </option>
            ))}
        </select>
      );
      break;
    default:
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

Input.defaultProps = {
  elementType: "input",
  validate: false,
  dirty: false,
  valid: false,
  label: "",
  className: "",
  elementConfig: {}
};

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  validate: PropTypes.bool,
  dirty: PropTypes.bool,
  valid: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  elementConfig: PropTypes.object
};

export default Input;
