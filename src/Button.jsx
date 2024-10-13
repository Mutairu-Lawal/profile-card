import React from "react";

const Button = ({ children, bg = "" }) => {
  return <button className={`${bg} c-btn`}>{children}</button>;
};

export default Button;
