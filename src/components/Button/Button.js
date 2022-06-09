import React from 'react';
import './Button.scss'
import {NavLink} from "react-router-dom";

const Button = ({link, name}) => {
  return (
    // <button to={"/"}>{name}</button>
    <NavLink className={'btn'} to={link}>{name}</NavLink>
  );
};

export default Button;