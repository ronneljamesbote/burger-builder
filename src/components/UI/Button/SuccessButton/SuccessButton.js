import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

const SuccessButton = ({ children, ...restProps }) => {
  return (
    <Button {...restProps} type="Success">
      {children}
    </Button>
  );
};

SuccessButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default SuccessButton;
