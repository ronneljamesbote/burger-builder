import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

const DangerButton = ({ children, ...restProps }) => {
  return (
    <Button {...restProps} type="Danger">
      {children}
    </Button>
  );
};

DangerButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default DangerButton;
