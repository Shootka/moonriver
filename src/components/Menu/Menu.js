import React from 'react';
import './Menu.scss'
import {useDispatch, useSelector} from "react-redux";

const Menu = () => {
  const isOpen = useSelector(state => state.burgerMenu.isOpen)
  const dispatch = useDispatch()
  return (
    <div className="menu-wrapper " onClick={() => dispatch({type: "TOGGLE_MENU", payload: !isOpen})}>
      <div className={`${!!isOpen ? 'hamburger-menu animate' : 'hamburger-menu'}`}/>
    </div>
  );
};

export default Menu;