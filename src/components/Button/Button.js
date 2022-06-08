import React from 'react';
import {NavLink} from "react-router-dom";

const Button = ({link, name}) => {
  return (
    // <button to={"/"}>{name}</button>
    <NavLink to={link}>{name}</NavLink>
  );
};

export default Button;