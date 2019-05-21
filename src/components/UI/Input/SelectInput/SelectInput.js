import React from "react";
import Input from "../Input";

const SelectInput = ({ ...props }) => {
  return <Input {...props} elementType="select" />;
};

export default SelectInput;
