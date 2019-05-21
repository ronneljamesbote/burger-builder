import React from "react";
import Input from "../Input";

const TextareaInput = ({ ...props }) => {
  return <Input {...props} elementType="textarea" />;
};

export default TextareaInput;
